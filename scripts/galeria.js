const template = document.querySelector('#template').content
const fragment = document.createDocumentFragment()
const galeria = document.querySelector('.galery')

const fetchApi = async () => {
  const res = await fetch('api/productos.php')
  const data = await res.json()

  data.forEach(product => {
    const clon = template.cloneNode(true);
    clon.querySelector('img').src = product.url
    clon.querySelector('#title').textContent = product.Title
    clon.querySelector('#year').textContent = product.Year
    clon.querySelector('#materials').textContent = product.Materials
    fragment.appendChild(clon)
  })
  galeria.appendChild(fragment)
}

window.onload = () => fetchApi();
