const mongoose = require('mongoose');
class productService {

  constructor() {
    this.orderConnection = mongoose.createConnection('mongodb://localhost/DDG_NodeJS', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

  }

   newOrder(req, res) {
  

      console.log('Order placed');
      const orderSchema = new mongoose.Schema({
        username: String,
        phone: String,
        products: Array,
        totalCost: Number
      });
  
      const OrderModel = this.orderConnection.model('orders', orderSchema);
  
      OrderModel.create({
        username: req.body.username,
        phone: req.body.phone,
        products: req.body.products,
        totalCost: req.body.totalCost
      })
        .then(() => {
          console.log('Order inserted successfully');
        })
        .catch((err) => {
          console.log('Error inserting order:', err);
         
        });
    }
  


  

  aboutText(req) {
    // Generate HTML string

    const html = `
      <div id="card-container">
      <div class="card-about">
     
        <h1>Welcome to my NodeJs Project!</h1>
        <h4 class="h4">This website was made using NodeJS MVC pattern,
          Express, MongoDB, HTML and CSS.
        </h4>
        <pre class="textBox" id="textBox"> 
        The Structure of this project is:
        1.Login Page -> checks if the user exists in the mongoDB users collection or you can just login as a guest.
        2.Register Page -> creates a user, stores the data and redirect back to login page.
        3.Product Page -> has a display of all products and 4 buttons.
            3.1.About button -> displays about the project.
            3.2.Home button -> redirect back to the initial Product Page.
            3.3.Cart Button -> changes the main body of the html file to the cart page.
            3.4.Username Button -> has a drop-down of "Logout" button that redirect back to login page.
        4.Cart Page -> has a place order button that takes your order and stores it as data in mongoDB collection. 
        (still in construction)
        </pre>
        <h4>Thank you for visiting my Project !</h4> 
   

      </div>
      </div>
      <style>
      .footer{
        padding: 20px;
       position: absolute;
        bottom: 0;
      }
      
      .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
        height: auto;

      }
      
      
      .card-about {
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
      }
      
      .card-about .h4 {
        color: black;
      }
      .textBox {
        color: black;
        text-align: start; 
        white-space: pre-wrap;
        margin: 0;
        font-family: arial;
      
      }
      @media(max-width:600px){
        .card-container{
          flex-direction: column;
          justify-content: center;
        
        }
        .card-about {
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

    console.log('About Service')
    return html;
  }


}


module.exports = new productService();
