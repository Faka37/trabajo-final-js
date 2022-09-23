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
                
                <div >
                    <div class="card-info">
                        <p class="text-title">${product.name} </p>
                        <p class="text-body">${product.brand}</p>
                    </div>
                    <img class="image" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
                            
                            
                    <div class="card-footer ">
                        <span class="text-title">${product.price} USD</span>
                        <span><strong>*${product.quantity}</strong></span>
                        
                        <div class="card-button remove" >
                            <strong class="btn " dataId="${product.name} "><i class="fa-regular fa-trash-can"></i></strong>
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
    debugger
    let idProd;
    if (e.target.classList.contains("remove")) {
        idProd = e.target.getAttribute("dataId");
        console.log(idProd);
        idProd = cart.find((element) => element.name == idProd);
        console.log(idProd);
    }

    if (idProd.quantity === 1) {
        let product = cart.find((element) => element.name == idProd.id);
        let index = cart.indexOf(product);
        cart.splice(index, 1);
    } else if (idProd) {
        idProd.quantity--;
    }
}


