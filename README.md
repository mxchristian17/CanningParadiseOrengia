# <img src="public/logo192.png" width="30" height="30"> About CanningParadise

CanningParadise is an E-commerce created for the final project of the React Js course of Coderhouse.

  - Student: Orengia Christian
  - Year: 2021
  - Commission: 16995

## Running the project

1. First install [Node.js](https://nodejs.org/es/) on your OS (don´t forget to setup [Environment variables](https://bertofern.wordpress.com/2019/01/08/solucion-node-js-npm-no-reconocido-como-comando-interno-o-externo/)).
2. Install [Git](https://git-scm.com/)
3. We recommend you to use [Visual Studio Code](https://code.visualstudio.com/download) and its terminal for this project (This is optional).
4. From your console run:

> `cd {installation folder}` Position into the installation folder
>
> `git clone https://github.com/mxchristian17/CanningParadiseOrengia.git` Clone the project repository
>
> `cd CanningParadiseOrengia` Position into the project folder
>
> `npm install` Install required dependencies
>
> `cp .env.example .env` Copy de example **.env.example** file and rename it to **.env**  
> *At this point you need to complete the .env file created with the data of your Firebase connection (explained on Products database section)*
>
> `npm start` Run the server with the project
    
5. Enjoy!

## Products database

This project was designed to be executed using [Firebase](https://firebase.google.com/) with a Firestore Database.  
You will need to create your project from your console following this steps:
1. Press **Add project**
2. Enter the *project name* you want
3. Press *Next* button
4. You can enable Google Analytics for the project, but is not necesary. If you enable it, you will need a Google Analytics account
5. Press *create project* button
6. Press *Continue* button
7. Select in the left sidebar the **Firestore Database** menu
8. Select **create Database**
9. You can start the project in **production** or **test** mode. We recommend you to start it in **test mode**
10. If you want you can select the *Cloud Firestore Location*, but you can press *enable* button on this step with default option selected.  
At this point you have created your database. Now you will need to create two collections: **items** and **orders**.
  - **items** *Collection*
    - **categoryId** *String*  
    Text identifier of the category of the product
    - **description** *String*  
    Description of the product
    - **img** *String*  
    Name of the image file with extension and no path
    - **initial** *Number*  
    Amount of products to buy set as default. If this value is bigger than stocks value, it will be consider equal
    - **name** *String*  
    Name of the product
    - **price** *Number*  
    Selling price of the product with tax included
    - **rateAverage** *Number*  
    Average of ratings of the product from one to five stars. It can be a float number
    - **reviews** *Number*  
    Number of product reviews
    - **sold** *Number*  
    Historic sold quantity of the product
    - **stock** *Number*  
    Available stock qty of the product
  - **orders** *Collection*
    - **date** *Timestamp*  
    The date and time of the order generation
    - **email** *String*  
    The user contact email address
    - **items** *Matrix*  
    An object with the products of the order and its details
      - **item** *String*  
      Item Firebase Id
      - **name** *String*  
      Item Name
      - **price** *Number*  
      Item Price
      - **qty** *Number*  
      Item sold quantity
    - **name** *String*  
    The user Name
    - **phone** *String*  
    The user contact phone number
    - **total** *Number*  
    Total order price

#### Configuration of Firebase database in your .env file

To configure your database connection settings in your .env file follow the next steps:
1. Open your [Firebase console](https://console.firebase.google.com/)
2. Select your created project
3. Go to **Project settings** in the left panel
4. Scroll down until you see something like:  
~~~
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkDzthRAqb3Oga5DI0FN663bfvHiIsVYg",
  authDomain: "yourproject.firebaseapp.com",
  projectId: "yourproject",
  storageBucket: "yourproject.appspot.com",
  messagingSenderId: "654896974545",
  appId: "1:654896974545:web:c2435b0a7e32205903adbc"
};
~~~
5. Complete your .env file with the previous data like:
~~~
REACT_APP_apiKey=AIzaSyDkDzthRAqb3Oga5DI0FN663bfvHiIsVYg
REACT_APP_authDomain=yourproject.firebaseapp.com
REACT_APP_projectId=yourproject
REACT_APP_storageBucket=yourproject.appspot.com
REACT_APP_messagingSenderId=654896974545
REACT_APP_appId=1:654896974545:web:c2435b0a7e32205903adbc
~~~

## Uploading products

The project doesn´t have a control panel yet that allows to upload products from there, so you will need to do that task directly from [Firebase](https://console.firebase.google.com/).
