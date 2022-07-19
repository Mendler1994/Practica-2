const lista = document.getElementById('lista')
console.log(lista)

const arrayLista = ["item 1", "item 2", "item 3", "item 4", "item 5"];

//Referencia
//<li class="list">
//    <b>Nombre: </b> <span class="text-danger">descripción...</spam>
//</li>

const fragment = document.createDocumentFragment()
arrayLista.forEach(item => {
    const li = document.createElement('li')
    li.classList.add('list')
    const b = document.createElement('b')
    b.textContent = 'Nombre: '

    const span = document.createElement('span')
    span.classList.add('text-danger')
    span.textContent = item

    li.appendChild(b)
    li.appendChild(span)

    fragment.appendChild(li)
})

lista.appendChild(fragment)

