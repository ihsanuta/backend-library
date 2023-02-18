# Library API

## Overview
This is a simple API Node JS application to operational library.
It supports the API:

* `[GET] books` - list of books library by subject
* `[GET] rents` - list of rent books library
* `[POST] rent` - create data rent book library

## What it Takes to Run the Project
This project is built with:

* Node 16.13 or later
* NPM 8.193 or later

## How to Run the Application

### From the Command Line
```
* npm instal
* npm run start
```

## How to Run test file

### From the Command Line
```
* npm test
```

### cURL API

#### [GET] /books
```
curl --location --request GET 'http://localhost:3000/books?subjects=love&limit=5'
```

#### [GET] /rents
```
curl --location --request GET 'http://localhost:3000/rents'
```

#### [POST] /rent
```
curl --location --request POST 'http://localhost:3000/rent' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name":"Emily Brontë",
    "pickup_date":"2022-01-04",
    "books":[
        {
            "title": "Wuthering Heights",
            "author": [
                {
                    "key": "/authors/OL4327048A",
                    "name": "Emily Brontë"
                }
            ],
            "editionNumber": "OL38586477M"
        }
    ]
}'
```

## Reference Documentation
For further reference, please consider the following sections:

* [Node JS](https://nodejs.org/en/docs/)
* [NPM](https://docs.npmjs.com/getting-started)

