# <img src="public/logo192.png" width="30" height="30"> About CanningParadise

CanningParadise is an E-commerce created for the final project of the React Js course of Coderhouse.

  - Student: Orengia Christian
  - Year: 2021
  - Commission: 16995

## Running the project

1. First install Node.js on your OS from [https://nodejs.org/es/](https://nodejs.org/es/).
2. From your console run:

> `cd {installation folder}` Position into the installation folder
>
> `git clone https://github.com/mxchristian17/CanningParadiseOrengia.git` Clone the project repository
>
> `cd CanningParadiseOrengia` Position into the project folder
>
> `npm install` Install required dependencies
>
> `npm start` Run the server with the project
    
3. Enjoy!

## Products database

This project was designed to be executed using [Firebase](https://firebase.google.com/). In the database you need to have two collections: **items** and **orders**.
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
    
    - **email** *String*  
    
    - **items** *Matrix*  
    
      - **item** *String*  
      Item Firebase Id
      - **name** *String*  
      Item Name
      - **price** *Number*  
      Item Price
      - **qty** *Number*  
      Item sold quantity
    - **name** **  
    
    - **phone** **  
    
    - **total** **  
    
