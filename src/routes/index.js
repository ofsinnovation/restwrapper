var fs = require("fs");
var Web3 = require("web3");
/**
 * / route
 *
 * @class User
 */
var IndexRoute = (function () {
    function IndexRoute() {
    }
    /**
     * Create the routes.
     *
     * @class Ind-exRoute
     * @method create
     * @static
     */
    IndexRoute.create = function (router) {
        router.get("/bcurl", function (req, res, next) {
            var blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
            var privateIp = process.env.HEROKU_PRIVATE_IP;
            console.log(process.env.BLOCKCHAIN_SERVICE_URL);
            console.log(blockchainurl);
            console.log('PRIVATE IP   : '+process.env.HEROKU_PRIVATE_IP);
            console.log('DNS APP NAME : '+process.env.HEROKU_DNS_APP_NAME);
            console.log('DNS DYNO NAME: '+process.env.HEROKU_DNS_DYNO_NAME);
            console.log('DNS FORMATION: '+process.env.HEROKU_DNS_FORMATION_NAME);
            res.send({ "blockchainurl": blockchainurl, "privateIp": privateIp,"appName":process.env.HEROKU_DNS_APP_NAME});
        });
        router.get("/doc.json", function (req, res, next) {
            var docjson = fs.readFileSync('./assets/doc.json', "utf8");
            res.header('Access-Control-Allow-Origin', '*');
            res.download('./assets/doc.json');
        });
        router.post("/:smartcontractId/:key", function (req, res, next) {
            var blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
            var web3 = new Web3(new Web3.providers.HttpProvider(blockchainurl));
            var requestData = JSON.stringify(req.body);
            var requestParams = req.params;
            var contractAddress = requestParams.smartcontractId;
            var transactionHash = "";
            var input = fs.readFileSync('./assets/HLSABI.json', "utf8");
            var abi = JSON.parse(input);
            console.log(requestParams, JSON.parse(requestData));
            try {
                var myContract = web3.eth.contract(abi);
                var myContractInstance = myContract.at(contractAddress);
                var transactionObject = {
                    from: web3.personal.listAccounts[0],
                    gas: 3000000,
                    gasPrice: 0
                };
                console.log(requestParams, requestData);
                myContractInstance.write(requestParams.key, requestData, transactionObject, function (error, result) {
                    if (!error) {
                        transactionHash = result;
                        res.status(201);
                        res.json(transactionHash);
                    }
                    else {
                        res.status(500);
                        res.json(transactionHash);
                    }
                });
            }
            catch (err) {
                console.log("error", err);
                res.status(500);
                res.json(err);
            }
        });
        router.get("/:smartcontractId/:key", function (req, res, next) {
            var blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
            var web3 = new Web3(new Web3.providers.HttpProvider(blockchainurl));
            var requestData = JSON.stringify(req.body);
            var requestParams = req.params;
            var contractAddress = requestParams.smartcontractId;
            var transactionHas = "";
            var input = fs.readFileSync('./assets/HLSABI.json', "utf8");
            var abi = JSON.parse(input);
            try {
                var myContract = web3.eth.contract(abi);
                var myContractInstance = myContract.at(contractAddress);
                var transactionObject = {
                    from: web3.personal.listAccounts[0],
                    gas: 3000000,
                    gasPrice: 0
                };
                var result = myContractInstance.read(requestParams.key);
                var resultData = [];
                if (result.length != 0) {
                    for (var i = 1; i < result.length; i++) {
                        resultData.push(result[i]);
                    }
                    var resultObject = {
                        key: requestParams.key,
                        value: resultData
                    };
                    res.status(200);
                    res.json(resultObject);
                }
                else {
                    res.status(400);
                }
            }
            catch (err) {
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
                var myContract = web3.eth.contract(abi);
                var myContractInstance = myContract.at(contractAddress);
                var transactionObject = {
                    from: web3.personal.listAccounts[0],
                    gas: 3000000,
                    gasPrice: 0
                };
                myContractInstance.executeFunction(requestParams.method, requestParams.key, requestData, transactionObject, function (error, result) {
                    if (!error) {
                        transactionHash = result;
                        console.log("result ", result);
                        res.status(200);
                        res.json(transactionHash);
                    }
                    else {
                        transactionHash = error;
                        console.log("error ", error);
                        res.status(500);
                        res.json(transactionHash);
                    }
                });
            }
            catch (err) {
                res.status(500);
                res.json(err);
            }
        });
    };
    return IndexRoute;
})();
exports.IndexRoute = IndexRoute;
