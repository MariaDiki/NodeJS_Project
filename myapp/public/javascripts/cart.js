document.addEventListener('DOMContentLoaded', function () {
    var carts = document.querySelectorAll('.add-cart');
    console.log(carts);

    let products = [
        {
            name: 'Dimonds Ring',
            tag: 'Dring',
            price: 950,
            inCart: 0
        },
        {
            name: 'Golden bracelat',
            tag: 'bracelat',
            price: 130,
            inCart: 0
        },
        {
            name: 'Golden Earrings',
            tag: 'short_earings',
            price: 999,
            inCart: 0
        },
        {
            name: 'Golden Rings',
            tag: 'weddingR',
            price: 150,
            inCart: 0
        },
        {
            name: 'Golden Necklace',
            tag: 'mandarinN',
            price: 250,
            inCart: 0
        },
        {
            name: 'Long Golden Earrings',
            tag: 'long_earings',
            price: 1450,
            inCart: 0
        }
    ];

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);


        })
    }

    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers) {
            document.querySelector('.cartButton span').textContent = productNumbers;

        }
    }
    function cartNumbers(product) {

        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);

        if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cartButton span').textContent = productNumbers + 1;

        } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cartButton span').textContent = 1;
        }
        setItems(product);
        totalCost(product);
    }

    function setItems(product) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        console.log("My cart items are:", cartItems);

        if (cartItems != null) {
            if (cartItems[product.tag] == undefined) {
                cartItems = {
                    ...cartItems,
                    [product.tag]: product
                }
            }
            cartItems[product.tag].inCart += 1;
        } else {
            product.inCart = 1;
            cartItems = {
                [product.tag]: product
            }
        }

        localStorage.setItem("productsInCart", JSON.stringify(cartItems));
        return cartItems;
    }

    function totalCost(product) {

        let cartCost = localStorage.getItem('totalCost');

        console.log("my cart cost is", cartCost);
        console.log(typeof cartCost);

        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            localStorage.setItem("totalCost", cartCost + product.price);

        } else {
            localStorage.setItem("totalCost", product.price);

        }


    }
    function order() {
        console.log("order Button")
    }
    document.addEventListener("click", function (event) {
        if (event.target && event.target.id === "OrderButton") {
            order();
        }
    });
    function displayCart() {

        var cartButton = document.querySelector(".cartButton");
        var bodymain = document.getElementById("bodymain");
        cartButton.onclick = function () {
            bodymain.innerHTML = "";
            bodymain.innerHTML = `
            <style>
            .bodymain{
                height: 80vh;
                width:auto;
            }

            .products-container {
                max-width: 750px;
                height: auto;
                justify-content: space-around;
                margin: 0 auto;
                margin-top: 50px ;
                color: black;
                background: white;
                
            
            }
            
            .products-container ion-icon {
                font-size: 25px;
                color: #462523;
                margin-left: 10px;
                margin-right: 10px;
                cursor: pointer;
            
            }
            .products-header {
                width: 100%;
                max-width: 680px;
                display: flex;
                justify-content: flex-start;
                border-bottom: 4px solid #462523;
                margin: 0 auto;
                font-weight: bold;
            }
            
            .products-title {
                width: 50%;
            }
            
            .price {
                width: 15%;
                display: flex;
                align-items: center;
            }
            
            .quantity{
                width: 30%;
                display: flex;
                align-items: center;
            
            }
            .total {
                width: 10%;
                display: flex;
                align-items: center;
            }

            .products {
                border-bottom: 2px solid lightblue;

            }
            
            .product {
                width: 45%;
                display: flex;
                align-items: center;
                justify-content: space-around;
                padding: 10px 0;
            }
            
            .product ion-icon {
                cursor: pointer;
            }
            
            .product img {
                width: 25px;
            }
            .products {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
            }
            
            .basketTotalContainer {
                display: flex;
                justify-content: flex-end;
                width: 100%;
                padding: 10px 0;
            }
            
            .basketTotalTitle {
                width: 30%;
            
            }
            .basketTotal{
                width: 10%;
            }
            .OrderButton {
    
                background-color:#cb9b51;
                font-size: large;
                font-weight: bold;
                font-family: Bookman, URW Bookman L, serif;
                margin-top: 10px;
                position: relative;
                display: inline-block;
              }
              .Order-Container {
                display: flex;
                justify-content: center;
                align-items: center;
              }

            
            </style>

          `;

            bodymain.innerHTML += `
            <div class="products-container">
              <div class="products-header">
                <h5 class="products-title">Product</h5>
                <h5 class="price">PRICE</h5>
                <h5 class="quantity">QUANTITY</h5>
                <h5 class="total">TOTAL</h5>
              </div>
              <div class="products"></div>
            </div>
            
            <div class="Order-Container">
            <button class="OrderButton" id="OrderButton" onclick="order()">Place Order</button>
        </div>
          `;


            let cartItems = localStorage.getItem("productsInCart");
            cartItems = JSON.parse(cartItems);
            let cartCost = localStorage.getItem('totalCost');
            let productContainer = document.querySelector(".products");


            console.log(cartItems);

            if (cartItems && productContainer) {
                productContainer.innerHTML = '';
                Object.values(cartItems).map((item,index) => {
                    productContainer.innerHTML += `
                <div class="products">
                  <div class="product">
                    <ion-button (click)="removeFromCart()" data-index="${index}"><ion-icon name="close-circle" id="close-circle" ></ion-icon></ion-button>
                    <img src="images/${item.tag}.jpg" alt="jewelry">
                    <span>${item.name}</span>
                  </div>
                  <div class="price">${item.price}$</div>
                  <div class="quantity">
                    <ion-icon name="remove-circle-outline" (click)="removeQuantityFromCart(${index})"></ion-icon>
                    <span id="quantity-${index}">${item.inCart}</span>
                    <ion-icon name="add-circle-outline" (click)="addQuantityToCart(${index})"></ion-icon>
                  </div>  
                  <div class="total">${item.inCart * item.price}</div>
                </div>
              `;
                });
                productContainer.innerHTML += `
              <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                  Basket Total
                </h4>
                <h4 class="basketTotal">
                  $${cartCost}
                </h4>
              </div>
            `;

            }


        };
    }


    onLoadCartNumbers();
    displayCart();

});


/* function updateTotalCost(price, quantity) {
    let cartCost = localStorage.getItem('totalCost');
    cartCost = parseFloat(cartCost) || 0;

    const productPrice = parseFloat(price);
    const productQuantity = parseFloat(quantity);

    cartCost += productPrice * productQuantity;

    localStorage.setItem('totalCost', cartCost.toFixed(2));

    document.querySelector('.cartTotal span').textContent = cartCost.toFixed(2);

} */

/* ----------------ION-ICON functions------------------- */

function updateCartNumbers(change) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers) || 0;

    productNumbers += change;

    localStorage.setItem('cartNumbers', productNumbers);
    document.querySelector('.cartButton span').textContent = productNumbers;
   
}

function removeFromCart(productDiv, quantity) {
    let updatedCartItems = localStorage.getItem('productsInCart');
    updatedCartItems = JSON.parse(updatedCartItems);
   
    let targetTag = productDiv.querySelector('img').getAttribute('src').split('/')[1].split('.')[0];
    if(updatedCartItems[targetTag]){
        if(updatedCartItems[targetTag].inCart > quantity){
            updatedCartItems[targetTag].inCart-=quantity;
            } else {
                    delete updatedCartItems[targetTag];
            }
    }

    localStorage.setItem('productsInCart', JSON.stringify(updatedCartItems));
    updateCartNumbers(-quantity);
    productDiv.remove();
/*     const price = parseFloat(productDiv.querySelector('.price').textContent); */
 /*    updateTotalCost(price, quantity); */


}
function removeUnitOFProduct(productDiv) {
    console.log("inside remove quantity function")
    let updatedCartItems = localStorage.getItem('productsInCart');
    updatedCartItems = JSON.parse(updatedCartItems);
  
    let targetTag = productDiv.querySelector('img').getAttribute('src').split('/')[1].split('.')[0];
    if (updatedCartItems[targetTag]) {
      updatedCartItems[targetTag].inCart -= 1;
    }
  
    localStorage.setItem('productsInCart', JSON.stringify(updatedCartItems));

    updateCartNumbers(-1);
 
    const quantityElement = productDiv.querySelector('.quantity span');
    quantityElement.textContent = updatedCartItems[targetTag].inCart;
  }


function addQuantityToCart(productDiv) {
    console.log("inside add quantity function")
    let updatedCartItems = localStorage.getItem('productsInCart');
    updatedCartItems = JSON.parse(updatedCartItems);
  
    let targetTag = productDiv.querySelector('img').getAttribute('src').split('/')[1].split('.')[0];
    if (updatedCartItems[targetTag]) {
      updatedCartItems[targetTag].inCart += 1;
    }
  
    localStorage.setItem('productsInCart', JSON.stringify(updatedCartItems));

    updateCartNumbers(1);
 
    const quantityElement = productDiv.querySelector('.quantity span');
    quantityElement.textContent = updatedCartItems[targetTag].inCart;
  }



/* ----------------Event Listeners------------------- */
document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "close-circle") {
        let removeButton = event.target;
        let productDiv = removeButton.closest(".products");
        let quantity = parseInt(productDiv.querySelector('.quantity').textContent);
        console.log(productDiv);
        console.log(quantity);
        removeFromCart(productDiv,quantity);
     }

     if (event.target && event.target.name == "remove-circle-outline") {
        console.log("remove circle clicked");
        let removeUnitButton = event.target;
        let productDiv = removeUnitButton.closest(".products");
        console.log(productDiv);
        const quantityElement = productDiv.querySelector('.quantity span');
        console.log(quantityElement);
        let quantity = parseInt(quantityElement.textContent);
        console.log(quantity);
        
        if(quantity > 1){
            removeUnitOFProduct(productDiv);
        }
        else{
            removeFromCart(productDiv,1);
        }
      }
    

      if (event.target && event.target.name == "add-circle-outline") {
        console.log("add circle clicked");
        let addUnitButton = event.target;
        let productDiv = addUnitButton.closest(".products");
        const quantityElement = productDiv.querySelector('.quantity span');
        console.log(quantityElement);
        addQuantityToCart(productDiv);

      }
    
});



