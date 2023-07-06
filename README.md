# NodeJS_Project
NodeJs final project

How to activate the program after downloading? 
1. open the folder on visual studio code.
2. open terminal and navigate to "myapp" folder.
3. type "npm start" and press enter.
4. Open a web browser and write http://localhost:3000 and it will open the login page.

Login Page:
1. Enter user name and password and press "Sign in", the values will be checked in "users" sql table if exists.
2. if yes -> redirect to products page and writes the username on the logout button at the top right side.
3. if not -> writes a red error text.
4. press "Not registered?" -> will redirect to Register Page.

Register Page:
1. after filling all the detailes (are requiered) and pressing "Register", all the data is sent to the "users" sql table and creates a new object(person).
2. after register you will be redirected back to login page.

Products Page:
1. on Products page you will have a logout drop down button that redirect back to login page.
2. the products page will have 6 cards od products in which you will be able to choose quantity and the add it to a basket.
3. after adding everything in the basket you will have a checkout button.
4. after clicking checkout button there will be created a new object in "orders" sql table which will add all the products, the user, email and phone number.
5. also after clicking on checkout the user will recieve a pop up message "Order Accepted".

That's all for now - still in process !

