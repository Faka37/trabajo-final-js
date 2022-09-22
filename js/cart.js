//CART

const cart = []

const updateCart = (cart) => {
    let cartContainer = document.querySelector("#cart")
    let container = document.getElementById("cartContainer")
    if (container) {
        cartContainer.innerHTML = ""
    }
    for (const product of cart) {
        let div = document.createElement("div")
        div.setAttribute("class", "card text-center col-xl-2 col-md-3 col-sm-4 col-8 m-3")
        div.setAttribute("id", "cartContainer")
        div.innerHTML +=
            `
                <div>
                    <h2 class="name">${product.name}</h2>
                    <h4>${product.brand}</h4>
                    <img  class="image w-75" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
                    <p class="price"><strong>${product.price} USD</strong></p>
                    <p>Cantidad: ${product.quantity}</p>
                    <button class="btn remove" ><strong><i class="fa-regular fa-trash-can"></i></strong></button>
                </div>
            `
        cartContainer.appendChild(div)
    }
}




const buttons = document.getElementsByClassName("button")
const loadCart = () => {
    for (const button of buttons) {
        button.addEventListener("click", () => {
            let counter = cart.find((element) => element.name == button.id)
            if (counter) {
                counter.quantity++
            } else {
                let product = products.find((element) => element.name == button.id)
                if (product) {
                    let newProduct = {
                        brand: product.brand,
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        quantity: 1,
                    };
                    cart.push(newProduct)
                }
            }
            updateCart(cart)
        })

    }
}

const remover = document.getElementsByClassName("remove")
function remove(product) {
    // busco su índice en el array
    let index = cart.indexOf(product)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        product.splice(index, 1)
    } 
}

//remover.addEventListener("click", remove)

