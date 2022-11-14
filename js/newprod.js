// CLASE CONSTRUCTORA  
class Product {
    constructor(brand, name, image, price, quantity) {
        this.brand = brand
        this.name = name
        this.image = "./assets/images/iphone-14.jpg"
        this.price = price
        this.quantity = 0
    }
}

// AGREGADO DE PRODUCTOS
const addingProducts = () => {
    brand = brand.value.toUpperCase()
    pName = pName.value.toUpperCase()
    image = image.value
    price = price.value


    let newProduct = new Product(brand, pName, image, price)

    products.push(newProduct)
    loadProducts(products)

}

//INGRESO ADMIN / TERNARIO / SWEET ALERT
const adminLogin = async () => {
    
    const admin = await Swal.fire({
        title: 'Datos de administrador',
        html:
            '<input id="swal-input1" class="swal2-input" placeholder="Usuario" value="admin" required>' +
            '<input type="password" id="swal-input2" class="swal2-input" placeholder="Contraseña" value="1234" required>',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
            return [
                user = document.getElementById('swal-input1').value,
                pass = document.getElementById('swal-input2').value
            ]
        }
        
        
        
    })
    
    const permitted = (user === "admin" && pass === "1234")
    

    permitted ? vanishProducts() 
                : Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Usuario o contraseña invalido',
                        footer: '<a href="">¿Es usted el administrador?</a>'
                    })
}

//APARECIENDO FORMULARIO / PRODUCTOS
const vanishProducts = () => {
    if (section2.style.display = "none") {
        section2.style.display = "block"
        section1.style.display = "none"
    } else {
        section1.style.display = "none"
    }
}
const appearProducts = () => {
    if (section1.style.display = "none") {
        section1.style.display = "block"
        section2.style.display = "none"
    } else {
        section2.style.display = "none"
    }
}



addProducts.addEventListener("click", adminLogin)
allProducts.addEventListener("click", appearProducts)
//AGREGADO DE PRODUCTOS
submit.addEventListener("click",() => {
    addingProducts(), Swal.fire('Se cargó un nuevo producto');
})