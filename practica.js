const lista = document.getElementById('lista')
console.log(lista)

//const li = document.createElement('li')
//li.textContent = 'primer elemento'

//lista.appendChild(li)

//const arrayElement = ['primer elemento', ' segundo', 'tercero']

//arrayElement.forEach(item => {
//    console.log(item)
//    const li = document.createElement('li')
//    li.textContent = item

//    lista.appendChild(li)
//})

const arrayItem = ["item 1", "item 2", "item 3", "item 4", "item 5"];

const fragment = document.createDocumentFragment()
//Otra opción:
//const fragment = document = new DocumentFragment()

arrayItem.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    fragment.appendChild(li)
})

lista.appendChild(fragment)




