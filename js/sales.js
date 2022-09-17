// LLAMADAS AL HTML
const filter = document.querySelector("#filter")//Filtro
const result = document.querySelector("#result")//resultado
const everyBody = document.querySelector("#everybody")//Todos los productos
const filtered = document.getElementsByName("filtered")//Menor precio / Mayor precio 
const select = document.querySelector("#filteredPrice")//select
const addingNewProducts = document.querySelector("#addingProducts")//Cargando productos
const container = document.querySelector("#container")//Contenedor de cards


// VARIABLES NECESARIAS 


// CLASE CONSTRUCTORA   
class Product {
    constructor(brand, name, image, price) {
        this.brand = brand
        this.name = name
        this.image = image
        this.price = price
        this.quantity = 0
    }
    priceIVA() {
        this.price = this.price * IVA
    }
    discountStock(units) {
        this.quantity = this.quantity - units
    }

}


// ARRAYS
const products = []
const cart = []
const search = []


// LISTA DE PRODUCTOS 
function list() {

    products.push(new Product("XIAOMI", "REDMI 9A", "./assets/images/redmi-9A.jpg", 145))
    products.push(new Product("XIAOMI", "REDMI 9C", "./assets/images/redmi-9C.jpg", 175))
    products.push(new Product("XIAOMI", "REDMI 9T", "./assets/images/redmi-9t.jpg", 210))
    products.push(new Product("XIAOMI", "NOTE 9 PRO", "./assets/images/redmiNote9Pro.jpg", 290))
    products.push(new Product("XIAOMI", "REDMI 10", "./assets/images/redmi-10.png", 215))
    products.push(new Product("XIAOMI", "REDMI 10A", "./assets/images/redmi-10a.jpg", 180))

}


// AGREGADO DE PRODUCTOS
const addingProducts = () => {
    let brand = prompt("ingrese una marca").toUpperCase()
    let name = prompt("ingrese nombre").toUpperCase()
    let image = prompt("ingrese el url de la imagen")
    let price = Number(prompt("ingrese el precio"))


    let newProduct = new Product(brand, name, image, price)

    products.push(newProduct)
}


// CARGANDO PRODUCTOS (NUEVO)
let div = ""
const loadProducts = (products) => {
    container.innerHTML = ""
    for (const product of products)  {
        div = document.createElement("div")
        div.setAttribute("class", "card text-center col-xl-3 col-md-4 col-8  m-3")

        div.innerHTML += ` 
            <h2>${product.name}</h2>
            <h4>${product.brand}</h4>
            <img  class="image w-75" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
            <p class="price"><strong>${product.price} USD</strong></p>
            <button class="button btn " id="cart" >Agregar al carro</button>
            `
        container.appendChild(div)
    }
}

// PARA ORDENAR LOS PRECIOS (NUEVO)
function optionPrice(){
    products.sort((a, b) => {
        if (filteredPrice.value === "lowerPrice") {
            if (a.price > b.price)
                return 1
            if (a.price < b.price)
                return -1
            return 0
        }
        if (filteredPrice.value === "higherPrice") {
            if (a.price > b.price)
                return -1
            if (a.price < b.price)
                return 1
            return 0
        }
    })
    loadProducts(products)
}


// MAS DE UN RESULTADO
function searching() {
    let parameter = filter.value.toUpperCase()
        if (parameter !== "") {
            const result = products.filter(product => product.name.match(parameter))
            if (result.length !== 0) {
                search.push(result)
                search.map( search => {products
                loadProducts(search)})
            } else {
                alert("No se encontro el producto")
            }
        } 
}


// BOTONES

//OPCION DE PRECIOS
select.addEventListener("change", () => optionPrice())
//AGREGADO DE PRODUCTOS
addingNewProducts.addEventListener("click", () => addingProducts())
//MUESTRA LOS PRODUCTOS
everyBody.addEventListener("click", () => loadProducts(products), list())
//BUSCADOR
result.addEventListener("click", searching)
filter.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searching()
    }
})