# purrfect

This full stack application provides a helpful dashboard for Purrfect Creatings. 

## Server

A call to the Airtable API is done from the server. No API key is provided in this repo and will need to be taken from the appropriate airtable account. To begin...

cd/server

npm i

npm run serve

Port 4000

## Client

A basic REACT front end to show dashboard information. To begin...

cd/client

npm i

npm run start

Port 3000

## Testing

Basic unit tests are provided for the client

cd client

npm run test

## Docker
This application is also containerised via docker for each of distribution.

docker-compose-up --build

## If I'd had more time...

I would have provided more test coverage including end-to-end as well as more front end functionality.


