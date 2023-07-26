
var gProducts = [
    {
        id: 0,
        name: 'Dimonds Ring',
        tag: 'Dring',
        price: 950,
        inCart: 0
    },
    {
        id: 1,
        name: 'Golden bracelat',
        tag: 'bracelat',
        price: 130,
        inCart: 0
    },
    {
        id: 2,
        name: 'Golden Earrings',
        tag: 'short_earings',
        price: 999,
        inCart: 0
    },
    {
        id: 3,
        name: 'Golden Rings',
        tag: 'weddingR',
        price: 150,
        inCart: 0
    },
    {
        id: 4,
        name: 'Golden Necklace',
        tag: 'mandarinN',
        price: 250,
        inCart: 0
    },
    {
        id: 5,
        name: 'Long Golden Earrings',
        tag: 'long_earings',
        price: 1450,
        inCart: 0
    }
];




function removeProduct(id){
    console.log("id ====>:",id);
    console.log("gProducts ====>:",gProducts);

        const wantedProduct = gProducts.filter(product => product.id != id)
    
    console.log("wantedProduct ====>:",wantedProduct);
    gProducts = wantedProduct
    renderProducts(gProducts)
}


document.addEventListener('DOMContentLoaded', function () {
    var carts = document.querySelectorAll('.add-cart');
    console.log(carts);

    

    

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(gProducts[i]);
            totalCost(gProducts[i]);


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
    }

    function setItems(product) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        gProducts  = cartItems
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
 


    function displayCart() {


        var cartButton = document.querySelector(".cartButton");
        var bodymain = document.getElementById("bodymain");

        cartButton.onclick = function () {
            bodymain.innerHTML = "";
            bodymain.innerHTML = `
            <style>

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
           // gProducts = cartItems
            let cartCost = localStorage.getItem('totalCost');
            let productContainer = document.querySelector(".products");


            console.log('cartItems===>',cartItems);

            if (cartItems && productContainer) {
                productContainer.innerHTML = '';
                Object.values(cartItems).map(item => {
                    productContainer.innerHTML += `
                <div class="products">
                  <div class="product">
                  <button name="close-circle" onclick="removeProduct(${item.id})">X</button>
                    <img src="images/${item.tag}.jpg" alt="jewelry">
                    <span>${item.name}</span>
                  </div>
                  <div class="price">${item.price}$</div>
                  <div class="quantity">
                    <ion-icon name="remove-circle-outline" onclick="decreaseQuantity('${item.tag}')"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon name="add-circle-outline" onclick="increaseQuantity('${item.tag}')"></ion-icon>
                  </div>  
                  <div class="total">${item.inCart * item.price}</div>
                </div>
              `;
                });
                console.log("inside function");

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
            console.log("Check");

        };


        
        
    }
  







    onLoadCartNumbers();
    displayCart();


}); 




function renderProducts(products){
    console.log("renderProducts - products ====>:",products);
    let productContainer = document.querySelector(".products");
    let strHTML = ''
    const productsHTML = products.map((product)=>{
         return      `<div class="products">
                <div class="product">
                <ion-icon name="close-circle" onclick="removeProduct(${product.id})"></ion-icon>
                    <img src="images/${product.tag}.jpg" alt="jewelry">
                    <span>${product.name}</span>
                </div>
                <div class="price">${product.price}$</div>
                <div class="quantity">
                    <ion-icon name="remove-circle-outline" onclick="decreaseQuantity('${product.tag}')"></ion-icon>
                    <span>${product.inCart}</span>
                    <ion-icon name="add-circle-outline" onclick="increaseQuantity('${product.tag}')"></ion-icon>
                </div>  
                <div class="total">${product.inCart * product.price}</div>
                </div>`
    })
    console.log("productsHTML ====>:",productsHTML);
    
    strHTML = productsHTML.join('')
    productContainer.innerHTML = strHTML
   }





