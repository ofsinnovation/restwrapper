/**
 * / route
 *
 * @class User
 */
var ContractController = (function () {
    function ContractController() {
    }
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    ContractController.index = function (router) {
        router.get("/write", function (req, res, next) {
            res.send({ "blockchainurl": "ok" });
        });
    };
    return ContractController;
})();
exports.ContractController = ContractController;
