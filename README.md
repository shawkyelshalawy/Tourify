# Tour_Booking
A  tour booking web application developed using  NodeJS, Express, MongoDB 


## Key Features

* Authentication and Authorization
  - Login and logout
* Tour
  - Manage booking, check tours map, check users' reviews and rating
* User profile
  - Update username, photo, email, and password
* Credit card Payment (using stripe)

## How To Use

### Book a tour
* Login to the site
* Search for tours that you want to book
* Book a tour
* Proceed to the payment checkout page
* Enter the card details (Test Mood):
  ```
  - Card No. : 5353 5353 5353 5353
  - Expiry date: 07 / 25
  - CVV: 255
  ```
* Finished!


### Manage your booking

* Check the tour you have booked in "Manage Booking" page in your user settings. You'll be automatically redirected to this
  page after you have completed the booking.

### Update your profile

* You can update your own username, profile photo, email and password.

## Installation
You can fork the app or you can git-clone the app into your local machine. Once done that, please install all the
dependencies by running
```
$ npm i
set your env variables
$ npm start (for development)
$ npm run start:prod (for production)
$ npm run debug ( for debugging)
