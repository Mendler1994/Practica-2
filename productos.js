const lista = document.getElementById('lista')
console.log(lista)

const arrayLista = ["item 1", "item 2", "item 3", "item 4", "item 5"];

const template = document.querySelector('#template-li').content
const fragment = document.createDocumentFragment()

arrayLista.forEach((item) =>{
    template.querySelector('.list span').textContent = item
    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
})

lista.appendChild(fragment)