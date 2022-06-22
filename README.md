# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

I have created a file db.json where the data is stored
I have installed React JSON-server using the command:

### `npm install -g json-server`

To run the json server please use the command:

### `json-server --watch db.json --port 4000`

## Note:

You can use any port if the currently set (4000) is occupied


## Functionality overview

The application fetches data from the db.json using the json-server.
The balance history are then shown excluding the current balance
The input field takes in the amount a user may wish to deposit or widthdraw
The Deposit button adds the input amount to the current balance
The Withdraw button decrements the current balance by the input amount



