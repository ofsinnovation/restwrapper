import { NextFunction, Request, Response, Router } from "express";
import * as solc from "solc";
import * as fs from "fs";
import * as request from "request";
import * as Web3 from "web3";


/**
 * / route
 *
 * @class User
 */
export class IndexRoute {
  /**
   * Create the routes.
   *
   * @class Ind-exRoute
   * @method create
   * @static
   */
  public static create(router: Router) {

	router.get("/bcurl", function (req, res, next) {
        let blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
		let privateIp = process.env.HEROKU_PRIVATE_IP;
        console.log(process.env.BLOCKCHAIN_SERVICE_URL);
        console.log(blockchainurl);
        console.log(process.env.HEROKU_PRIVATE_IP);
        console.log(process.env.HEROKU_DNS_APP_NAME);
        console.log(process.env.HEROKU_DNS_DYNO_NAME);
        console.log(process.env.HEROKU_DNS_FORMATION_NAME);
        res.send({"blockchainurl":blockchainurl, "privateIp":privateIp});
    });

    router.post("/:smartcontractId/:key", function (req, res, next) {
        var blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
        var web3 = new Web3(new Web3.providers.HttpProvider(blockchainurl));
        var requestData = JSON.stringify(req.body);
        var requestParams  = req.params;
        var contractAddress = requestParams.smartcontractId;
        var transactionHash = "";
        var input = fs.readFileSync('./assets/HLSABI.json', "utf8");
        var abi = JSON.parse(input);
        console.log(requestParams, JSON.parse(requestData));
        try {
            var myContract  = web3.eth.contract(abi);
            var myContractInstance = myContract.at(contractAddress);
            const transactionObject = {
                from: web3.personal.listAccounts[0],
                gas: 3000000,
                gasPrice: 0
            };
            console.log(requestParams, requestData);
            myContractInstance.write(requestParams.key, requestData, transactionObject, (error, result) => {
                if(!error) {
                    transactionHash = result;
                    res.status(201);
                    res.json(transactionHash);
                } else {
                    res.status(500);
                    res.json(transactionHash);
                }
            });
        } catch (err) {
            console.log("error", err)
            res.status(500);
            res.json(err);
        }
    });

    router.get("/:smartcontractId/:key", function (req, res, next) {
        var blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
        var web3 = new Web3(new Web3.providers.HttpProvider(blockchainurl));
        var requestData = JSON.stringify(req.body);
        var requestParams  = req.params;
        var contractAddress = requestParams.smartcontractId;
        var transactionHas = "";
        var input = fs.readFileSync('./assets/HLSABI.json', "utf8");
        var abi = JSON.parse(input);
        try {
            var myContract  = web3.eth.contract(abi);
            var myContractInstance = myContract.at(contractAddress);
            const transactionObject = {
                from: web3.personal.listAccounts[0],
                gas: 3000000,
                gasPrice: 0
            };
            var result = myContractInstance.read(requestParams.key);
            const resultData = [];
            if(result.length != 0) {
                for (let i=1; i<result.length; i++) {
                    resultData.push(result[i])
                }
                const resultObject = {
                    key: requestParams.key,
                    value: resultData
                };
                res.status(200);
                res.json(resultObject);
            } else {
                res.status(400);
            }
        } catch (err) {
            res.status(500);
            res.json(err);
        }
    });

    router.put("/:smartcontractId/:key/:method", function (req, res, next) {
        var blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
        var web3 = new Web3(new Web3.providers.HttpProvider(blockchainurl));
        var requestData = JSON.stringify(req.body);
        var requestParams = req.params;
        var contractAddress = requestParams.smartcontractId;
        var transactionHash = "";
        var updateData = [web3.fromAscii(requestParams.key), web3.fromAscii(requestData)];
        console.log("requestData", requestData);
        var input = fs.readFileSync('./assets/HLSABI.json', "utf8");
        var abi = JSON.parse(input);
        try {
            var myContract  = web3.eth.contract(abi);
            var myContractInstance = myContract.at(contractAddress);
            const transactionObject = {
                from: web3.personal.listAccounts[0],
                gas: 3000000,
                gasPrice: 0
            };
            myContractInstance.executeFunction(requestParams.method, requestParams.key, requestData, transactionObject, (error, result) => {
                if(!error) {
                    transactionHash = result;
                    console.log("result ", result);
                    res.status(200);
                    res.json(transactionHash);
                } else {
                    transactionHash = error;
                    console.log("error ", error);
                    res.status(500);
                    res.json(transactionHash);
                }
            });
        } catch (err) {
            res.status(500);
            res.json(err);
        }
    });
}
}
