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
                
                
                    <div class="card-info">
                        <p class="text-title">${product.name} </p>
                        <p class="text-body">${product.brand}</p>
                        <p><strong>Cantidad: ${product.quantity}</strong></p>
                    </div>
                    <img class="image" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
                            
                            
                    <div class="card-footer ">
                        <span class="text-title">${product.price} USD</span>
                        <div class="card-button" >
                        <i class="fa-regular fa-trash-can remove" data-id="${product.name}"></i>
                        </div>
                    </div>
                

            `
            cartContainer.appendChild(div)
        }
}


const buttons = document.getElementsByClassName("buttonCart")
const loadCart = () => {
    for (const button of buttons) {
        button.addEventListener("click", () => {
            let counter = cart.find((element) => element.name === button.id)
            if (counter) {
                counter.quantity++
            } else {
                let product = products.find((element) => element.name === button.id)
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


let collection = document.querySelector(".cart");

collection.addEventListener("click", remove);


function remove(e) {
    let idProd;
    if (e.target.classList.contains("remove")) {
        idProd = e.target.getAttribute("data-id");
        idProd = cart.find((element) => element.name == idProd);
    }

    if (idProd.quantity === 1) {
        let product = cart.find((prod) => prod.name == idProd.name);
        let index = cart.indexOf(product);
        cart.splice(index, 1);
        updateCart(cart)
    } else if (idProd) {
        idProd.quantity--;
        updateCart(cart)
    }
}

localStorage.getItem()

