const lista = document.getElementById('lista')
console.log(lista)

const arrayLista = ["item 1", "item 2", "item 3", "item 4", "item 5"];

let fragment = ''
arrayLista.forEach(item => {
    fragment += `
    <li class="list">
        <b>Nombre: </b> <span class="text-danger">${item}</spam>
    </li>
    `
})

lista.innerHTML = fragment
