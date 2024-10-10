const button = document.querySelector("button");
const divContenedor = document.getElementById("post-data");
const lista = document.createElement("ul");
divContenedor.appendChild(lista);

button.addEventListener("click", () => 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petici�n');
            }
            return response.json();
        })
        .then(data => {
            for (let element of data) {
                let itemLista = document.createElement("li");
                let negrita = document.createElement("strong");
                let contenido = document.createElement("p");

                negrita.innerText = element.title;
                contenido.innerText = element.body;

                itemLista.appendChild(negrita);
                itemLista.appendChild(contenido);
                lista.appendChild(itemLista);
            }
        })
        .catch(error => {
            console.error('Hubo un problema con la petici�n Fetch:', error);
        })
);
