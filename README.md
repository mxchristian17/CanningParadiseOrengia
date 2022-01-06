# <img src="public/logo192.png" width="30" height="30"> About CanningParadise

CanningParadise is an E-commerce created for the final project of the React Js course of Coderhouse.

  - Student: Orengia Christian
  - Year: 2021
  - Commission: 16995

## Running the project

1. First install Node.js on your OS from [https://nodejs.org/es/](https://nodejs.org/es/).
2. From your console run

`cd {installation folder}`

Position into the installation folder

`git clone https://github.com/mxchristian17/CanningParadiseOrengia.git`

Clone the project repository

`cd CanningParadiseOrengia`

Position into the project folder

`npm install`

Install required dependencies

`npm start`

Run the server with the project
    
3. Enjoy!

## Products database

+ This project was designed to be executed using Firebase. In the database you need to have two collections: items and orders.
  + items:
    + categoryId
    + description
    + img
    + initial
    + name
    + price
    + rateAverage
    + reviews
    + sold
    + stock
  + orders:
    + date
    + email
    + items
      + item
      + name
      + price
      + qty
    + name
    + phone
    + total
