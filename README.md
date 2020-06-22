# Reminder App (Server)
A simple reminder through Email app to leave in time to your destination (Server side code)
For UI side code, go [here](https://github.com/shubhammxv/reminder-app-front)

## Technologies used

- Node.js
- Express
- JavaScript
- NPM

## Build Setup

#### Create .env file in root folder
```
.env Variables

GOOGLE_MATRIX_API = https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial
API_KEY = [YOUR_API_KEY]
DUMMY_EMAIL = [EMAIL_ID_TO_SENT_MAIL_FROM]
DUMMY_EMAIL_PASSWORD = [DUMMY_EMAIL_PASSWORD]
PORT = 8080
```

``` bash
# install dependencies
$ npm install

# launch server
$ npm start
```
