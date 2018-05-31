var Web3 = require("web3");
var BaseController = (function () {
    function BaseController(web3) {
        console.log("Abstract Class Call");
        var blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
        this.web3 = new Web3(new Web3.providers.HttpProvider(blockchainurl));
        console.log("Abstract Class Call success");
    }
    return BaseController;
})();
