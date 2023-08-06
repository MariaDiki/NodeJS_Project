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
3. if you remmembered that you already registered you can press the button "Back to Login Page" and be redirected. 
4. ןכ 

Products Page:
1. on Products page you will have a username name button with logout drop down button that redirect back to login page.
2. "About" button that shows about the page information.
3. "Home" page to redirect back to that products page.
4. the products page has 6 cards of products with "Add to Cart" hover button. each click adds more product to the cart.
5. near the username name button you will have a cart button that shows how many items you have added to the cart.
6. on click the "Cart" button you will see all the products you have chose(with name of product, small image and quantity).
7. each product in the list has a remove button, add unit and remove unit. the quantity will be updated immidiatly, also the number of items in the cart and the total cost.
8. after clicking "Place Order" button, you will see a new card div in which you have to provide a phone number to complete the order (mandatory).
9. after clicking "Submit" you will get a success alert and be redirected back to product page with 0 items in cart.
10. on the backend, you order will be sent to sql table with you name, phone number, the list of product(name and inCart) and total cost.

The End !

