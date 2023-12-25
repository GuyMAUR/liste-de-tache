function AjouterTache() {
  const tacheInput = document.getElementById("tacheInput");
  const liste = document.getElementById("liste");
  const valueTache = tacheInput.value.trim();
  if (valueTache !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${valueTache}</h4>

        <button onclick="deleteTache(this)"> supprimer</button>
        <input type="checkbox" />
    `;
    liste.appendChild(li);
  }
}

function deleteTache(btn) {
  const li = btn.parentElement;
  const liste = document.getElementById("liste");
  liste.removeChild(li);
}

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", AjouterTache);
