const supabase=supabase.createClient("https://jalzezkphjcnfgbthiix.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...");async function fetchClients(){const e=(await supabase.from("clients").select("*"))["data"],t=document.getElementById("clients-body");t.innerHTML="",e?.forEach(e=>{e=`
      <tr>
        <td class="p-3">${e.full_name}</td>
        <td class="p-3">${e.email}</td>
        <td class="p-3">${e.phone}</td>
        <td class="p-3">${e.address}</td>
      </tr>
    `;t.innerHTML+=e})}async function submitClient(){var e=document.getElementById("nameInput").value,t=document.getElementById("emailInput").value,n=document.getElementById("phoneInput").value,a=document.getElementById("addressInput").value,e=(await supabase.from("clients").insert([{full_name:e,email:t,phone:n,address:a,created_by:null}]))["error"];e?(alert("Error adding client"),console.error(e)):(closeModal(),fetchClients())}function openModal(){document.getElementById("clientModal").classList.remove("hidden")}function closeModal(){document.getElementById("clientModal").classList.add("hidden")}document.addEventListener("DOMContentLoaded",fetchClients);