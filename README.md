# <img src="public/logo192.png" width="30" height="30"> About CanningParadise

CanningParadise is an E-commerce created for the final project of the React Js course of Coderhouse.

  - Student: Orengia Christian
  - Year: 2021
  - Commission: 16995

## Running the project

1. First install Node.js on your OS from [https://nodejs.org/es/](https://nodejs.org/es/).
2. We recommend you to use Visual Studio Code and its terminal for this project from [Visual Studio Code](https://code.visualstudio.com/download) (This is optional).
3. From your console run:

> `cd {installation folder}` Position into the installation folder
>
> `git clone https://github.com/mxchristian17/CanningParadiseOrengia.git` Clone the project repository
>
> `cd CanningParadiseOrengia` Position into the project folder
>
> `npm install` Install required dependencies
>
> `npm start` Run the server with the project
    
4. Enjoy!

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
    
    - **phone** *String*  
    The user contact phone number
    - **total** *Number*  
    Total order price

## Uploading products

The project doesn´t have a control panel yet that allows to upload products from there, so you will need to do that task directly from [Firebase](https://console.firebase.google.com/).
