const supabase = supabase.createClient(
  'https://jalzezkphjcnfgbthiix.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
);

async function fetchClients() {
  const { data, error } = await supabase.from('clients').select('*');
  const tbody = document.getElementById('clients-body');
  tbody.innerHTML = '';

  data?.forEach((client) => {
    const row = `
      <tr>
        <td class="p-3">${client.full_name}</td>
        <td class="p-3">${client.email}</td>
        <td class="p-3">${client.phone}</td>
        <td class="p-3">${client.address}</td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

async function submitClient() {
  const full_name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const phone = document.getElementById('phoneInput').value;
  const address = document.getElementById('addressInput').value;

  const { data, error } = await supabase.from('clients').insert([
    { full_name, email, phone, address, created_by: null }
  ]);

  if (error) {
    alert('Error adding client');
    console.error(error);
  } else {
    closeModal();
    fetchClients();
  }
}

function openModal() {
  document.getElementById('clientModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('clientModal').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', fetchClients);
