

# Smart contract REST wrapper

### What is this app?

Think of this generic smart contract as a key-value store in blockchain with functions to read, write and execute some business logic.
The REST API will be a wrapper around the said operations and will take in the contract id and method params

### How to use this?

This wrapper can be used to call any smart contract deployed to the blockchain with the following interface.
```
interface SalesforceSmartContractI {
    function write(string key, string value) external;
    function executeFunction(string functionName, string key, string value) external;
    function read(string key) external view returns (string, string, uint, uint, string);
}
```
refer to a sample here https://github.com/objectfrontiergit/restWrapper/blob/master/assets/HLSContract.sol

This wrapper has the following endpoints

POST https://{heroku-restwrapperapp.heroku.com}/{smartcontract_id}/{key}
Body: JSON value of the key


GET https: //{heroku-restwrapperapp.heroku.com}/{smartcontract_id}/{key}
Response:
```
     {“key”:”key”,
      “value”:[“array of string that the smart contract returns”]
    }
```
PUT https: //{heroku-restwrapperapp.heroku.com}/{smartcontract_id}/{key}/{method}
Body: JSON value of the key

### How to run this?

To run the application locally follow the below instructions

1. Clone code
2. SET BLOCKCHAIN_SERVICE_URL environment variable. This will be the URL of the Blockchain you deployed using Heroku Blockchain Add-On https://elements.heroku.com/addons/blockchain  
3. SET PORT environment variable
4. Start the app: "npm run start"

But you can just use the “Deploy to Heroku” button to quickly deploy the app to Heroku

<a href="https://heroku.com/deploy?template=https://github.com/objectfrontiergit/restWrapper">
<img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>
