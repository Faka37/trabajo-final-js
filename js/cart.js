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
                
                <div class= "cart">
                <div class="card-info">
                    <p class="text-title">${product.name} </p>
                    <p class="text-body">${product.brand}</p>
                </div>
                <img class="image" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
                        
                        
                <div class="card-footer">
                    <span class="text-title">${product.price} USD</span>
                    <p>Cantidad: ${product.quantity}</p>
                    
                    <div class="card-button">
                        <strong class="btn remove"><i class="fa-regular fa-trash-can"></i></strong>
                    </div>
                </div>
                </div>

            `
        cartContainer.appendChild(div)
    }
}



console.log(cart);
const buttons = document.getElementsByClassName("buttonCart")
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
            console.log(cart);
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

remover.addEventListener("click", () =>  remove(product))


