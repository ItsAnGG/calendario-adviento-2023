window.addEventListener("DOMContentLoaded", function() {
    const inputDeseo = document.querySelector(".deseoInput");
    const submitBtn = document.querySelector(".submit-btn");
    const listaDeseos = document.getElementById("listaDeseos");
    const deleteAllBtn = document.getElementById("delete-all-btn");

    submitBtn.addEventListener("click", function(){
        const nuevoDeseo = inputDeseo.value.trim();
        if (nuevoDeseo !== "") {
            const deseoId = Date.now();

            const nuevoElemento = document.createElement("li");
            nuevoElemento.classList.add("deseo");
            nuevoElemento.setAttribute("data-deseo-id", deseoId);
            nuevoElemento.innerHTML= `
                ${nuevoDeseo}
                <button class="eliminar-btn" data-deseo-id="${deseoId}"> X </button>
            `;

            listaDeseos.appendChild(nuevoElemento);
            inputDeseo.value= "";

            const eliminarBtn = nuevoElemento.querySelector(".eliminar-btn");
            eliminarBtn.addEventListener("click", function (){
                const deseoId = eliminarBtn.getAttribute("data-deseo-id");
                const elementoAEliminar = document.querySelector(`[data-deseo-id]`);
                if (elementoAEliminar) {
                    elementoAEliminar.remove();
                }
            })
        }
    })

    deleteAllBtn.addEventListener("click", function(){
        const arrayDeseos = Array.from(listaDeseos.children)

        arrayDeseos.forEach((deseo)=> deseo.remove());
    })
})