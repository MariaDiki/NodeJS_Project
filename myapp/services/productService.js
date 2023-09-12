const mongoose = require('mongoose');
class productService {

  constructor() {
    this.orderConnection = mongoose.createConnection('mongodb+srv://maria:169shLIwco7b3IEy@cluster0.esme3ba.mongodb.net/?retryWrites=true&w=majority', {
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
      <div class="card-container" id="card-container">
      <div class="card-about">
     
        <h1>Welcome to my NodeJs Project!</h1>
        <h4 class="h4">This website was made with a solid foundation in programming languages such as HTML, CSS, and JavaScript,
        coupled with a deep understanding of web development principles, I am eager to translate my theoretical knowledge
        into practical solutions. My dedication to self-driven learning has led me to explore various frameworks and tools,
        as I am committed to staying abreast of industry trends. In this project I have improved my MVC design pattern
        knowledge combined with vanilla JS coding while keeping the code readable and organized.
        I thrive on challenges and look forward to collaborating with experienced professionals
        to cultivate a hands-on understanding of building robust and user-centric applications.
        My enthusiastic approach, coupled with my determination to continuously enhance my skills,
        positions me to contribute effectively to projects that require innovation and technical excellence.
        I hope that thanks to my diversity in code I was able to present to you the tools I acquired
        by self-learning, hard work, and a real passion for creating various projects.
        After 5+ years of working as a PMO and gaining experience in managing projects in terms of schedules, budget, risk management and execution phases in the field of construction and infrastructure, it's time to change my route.
        So, if by chance a Fullstack or Frontend job pops up for you 
        then I'd be more than happy if you will to contact me :) 0545266614 or mariadiki21@gmail.com.
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
        4.Cart Page -> shows all the products you have chose with options of remove a product, adding units and removing units.
        5.Order Page -> after clicking the "place Order" on the Cart Page, you will get a message with phone number input.
        6.After you input a phone number the order will be successful and you will be redirected back to products page.
        </pre>
        <h4>Thank you for visiting my Project !</h4> 
   

      </div>
      </div>
      <style>
      .footer{
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        padding: 20px;
        bottom: 0;
        position:absolute;
      }
      
      .card-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
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
        text-align: start; 
        width: 95%;
        
      }
      .textBox {
        color: black;
        text-align: start; 
        white-space: pre-wrap;
        margin: 0;
        font-family: arial;
      
      }
        </style>


      }
    `;

    console.log('About Service')
    return html;
  }


}


module.exports = new productService();
