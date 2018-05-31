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

export class ContractController {
    
    /**
     * Create the routes.
     *
     * @class IndexRoute
     * @method create
     * @static
     */
    public static index(router: Router) {

        router.get("/write", function (req, res, next) {
            res.send({"blockchainurl":"ok"});
        });
    }
}
