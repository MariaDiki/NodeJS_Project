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
    /*------------------------- Loading Cart Page ----------------------------- */
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
            console.log("after parseInt:", typeof cartCost);
            console.log("after parseInt product.price:", typeof product.price);

            localStorage.setItem("totalCost", cartCost + product.price);

        } else {
            localStorage.setItem("totalCost", product.price);

        }
        console.log(typeof cartCost);



    }



    document.addEventListener("click", function (event) {
        if (event.target && event.target.id === "OrderButton") {
            orderFunction();
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
              @media(max-width:600px){
                .products-container {
                  width: 80%;
                  margin:0 auto;
                  margin-bottom: 10px;
                }
              }
              .products-header {
                width: 100%;
                max-width: auto;
                display: flex;
                justify-content: flex-start;
                border-bottom: 4px solid #462523;
                margin: 0 auto;
                font-weight: bold;
            }
              
                .footer {
                  background: linear-gradient(to right,
                      #462523 0,
                      #cb9b51 22%,
                      #f6e27a 45%,
                      #f6f2c0 50%,
                      #f6e27a 55%,
                      #cb9b51 78%,
                      #462523 100%);
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: end;
                  padding: 20px;
                  height: auto;
                  bottom: 0;
                  width: 100%;
                  color: black;
                  font-family: Bookman, URW Bookman L, serif;
              
              
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
            <button class="OrderButton" id="OrderButton" onclick="orderFunction()">Place Order</button>
        </div>
          `;


            let cartItems = localStorage.getItem("productsInCart");
            cartItems = JSON.parse(cartItems);
            let cartCost = localStorage.getItem('totalCost');
            let productContainer = document.querySelector(".products");


            console.log(cartItems);

            if (cartItems && productContainer) {
                productContainer.innerHTML = '';
                Object.values(cartItems).map((item, index) => {
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
        if (updatedCartItems[targetTag]) {
            if (updatedCartItems[targetTag].inCart > quantity) {
                updatedCartItems[targetTag].inCart -= quantity;
            } else {
                delete updatedCartItems[targetTag];
            }
        }

        localStorage.setItem('productsInCart', JSON.stringify(updatedCartItems));
        updateCartNumbers(-quantity);
        productDiv.remove();

        updateTotalCost();

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
        updateTotalProduct(productDiv);
        updateTotalCost();
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
        updateTotalProduct(productDiv);
        updateTotalCost();


    }

    function updateTotalProduct(productDiv) {
        let updatedCartItems = localStorage.getItem('productsInCart');

        updatedCartItems = JSON.parse(updatedCartItems);

        let targetTag = productDiv.querySelector('img').getAttribute('src').split('/')[1].split('.')[0];
        const item = updatedCartItems[targetTag];

        const totalElement = productDiv.querySelector('.total');
        totalElement.textContent = item.inCart * item.price;
        updateTotalCost();
    }
    function updateTotalCost() {
        let updatedCartItems = localStorage.getItem('productsInCart');
        let oldTotal = localStorage.getItem('totalCost');
        updatedCartItems = JSON.parse(updatedCartItems);

        let totalCost = 0;

        for (let item in updatedCartItems) {
            totalCost += updatedCartItems[item].inCart * updatedCartItems[item].price;
        }

        const basketTotal = document.querySelector('.basketTotal');
        basketTotal.textContent = `$${totalCost}`;

        console.log("this is the oldTotal type:", typeof oldTotal);
        console.log("this is the basketTotal type:", typeof basketTotal);

        let updatedTotal = JSON.stringify(totalCost); // stringify the totalCost variable

        console.log("this is the updatedTotal type:", typeof updatedTotal);
        localStorage.setItem('totalCost', updatedTotal);
        console.log("totalCost", totalCost);
    }


    /* ----------------Event Listeners------------------- */
    document.addEventListener("click", function (event) {
        if (event.target && event.target.id === "close-circle") {
            let removeButton = event.target;
            let productDiv = removeButton.closest(".products");
            let quantity = parseInt(productDiv.querySelector('.quantity').textContent);
            console.log(productDiv);
            console.log(quantity);
            removeFromCart(productDiv, quantity);
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

            if (quantity > 1) {
                removeUnitOFProduct(productDiv);
            }
            else {
                removeFromCart(productDiv, 1);
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


    onLoadCartNumbers();
    displayCart();


});




/*------------------------- Loading Order Page ----------------------------- */
function orderFunction() {
    console.log("order Button");
    var orderButton = document.querySelector("OrderButton");
    var bodymain = document.getElementById("bodymain");

    bodymain.innerHTML = "";

    bodymain.innerHTML = `      
    <div id="card-container">
    <div class="card-order">
   
      <h1>Thank You for your order !</h1>
      <h4 class="h4">a member of our staff willl contact you by the phone number provided to seal the order</h4>
      <pre class="textBox" id="textBox"> 
        please insure that you provide your current phone number:
      </pre>
      <div class="phoneBox" id="phoneBox">
      <input type="text" placeholder="Phone:" id="phone" name="phone" maxlength="10" required>
      </div>
      <button type="submit" class="btn" id="btn"">Submit</button>
    </div>
    </div>
    <style>
    .bodymain{
        height: 80vh;
        width:auto;
        display: flex;
        justify-content: center;
        align-items: flex-start;

    }

    .card-order {
        background-color: white;
        width: 85%;
        height: auto;
        color: #cb9b51;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        word-wrap:break-word;
        overflow-wrap:break-all;
        padding: 10px;
        margin-top: 150px ;
      }

      .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: auto;
        margin-top: 150px ;
                
                
      }
      .card-order .h4 {
        color: black;
      }

    
    .textBox {
      color: black;
      text-align: start; 
      white-space: pre-wrap;
      margin: 0;
      font-family: arial;
    
    }
    .phoneBox {
        width: auto;
        overflow: hidden;
        color: #cb9b51;
        font-size: 20px;
        padding: 8px 0;
        margin: 8px 0;
        border-bottom: 1px solid#cb9b51;
    }
    
    .phoneBox input {
        border: none;
        outline: none;
        background: none;
        color: #cb9b51;
        font-size: 18px;
        float: left;
        width: auto;
        margin: 0 10px;
    }
    .btn {
        width: auto;
        background: black;
        border: 2px solid #cb9b51;
        color:#cb9b51;
        padding: 5px;
        font-size: 18px;
        cursor: pointer;
        margin: 12px 0;
    }
    .btn:hover {
        background-color: #cb9b51;
    }
    @media(max-width:600px){
        .card-container{
          flex-direction: column;
          justify-content: center;
        
        }
        .card-order {
          width: 80%;
          margin:0 auto;
          margin-bottom: 10px;
        }
      }
      
        .footer {
          background: linear-gradient(to right,
              #462523 0,
              #cb9b51 22%,
              #f6e27a 45%,
              #f6f2c0 50%,
              #f6e27a 55%,
              #cb9b51 78%,
              #462523 100%);
          display: flex;
          flex-wrap: wrap;
          justify-content: end;
          padding: 20px;
          height: auto;
          bottom: 0;
          width: 100%;
          color: black;
          font-family: Bookman, URW Bookman L, serif;
      
        }
      


      </style>


    }
  `;
    var submitButton = document.getElementById("btn");
    submitButton.addEventListener("click", function () {
        console.log("Submit button clicked");
        var phone = document.getElementById("phone").value;
        var phoneRegex = /^\d{10}$/;
        if (!phone.match(phoneRegex)) {
          alert("Please enter a valid phone number.");
          return; 
          
        }
        else {
      
        var username = localStorage.getItem("username");
        var productsIntCartOrder = JSON.parse(localStorage.getItem("productsInCart"));
        var products = [];

        for (var key in productsIntCartOrder) {
            if (productsIntCartOrder.hasOwnProperty(key)) {
                var product = {
                    name: productsIntCartOrder[key].name,
                    inCart: productsIntCartOrder[key].inCart
                };
                products.push(product);
            }
        }
        var totalCostOrder = localStorage.getItem("totalCost");
        var orderData = {
            username: username,
            phone: phone,
            products: products,
            totalCost: totalCostOrder

        };
        console.log("the data is:", orderData);
        newOrder(orderData);
    }
    localStorage.removeItem("productsInCart");
    localStorage.removeItem("totalCost");
    localStorage.removeItem("cartNumbers");
  
    window.location.reload();
    window.alert("Order has been successfully placed!");

    });



}

function newOrder(orderData) {
    let url;

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        url = 'http://localhost:3000/products/new-order';
    } else {
        url = '/products/new-order';
    }

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    })
        .then(response => {
            if (response.ok) {
                console.log('Order sent successfully');
            } else {
                console.log('Error sending order:', response.statusText);
            }
        })
        .catch(error => {
            console.log('Error sending order:', error);
        });
}


