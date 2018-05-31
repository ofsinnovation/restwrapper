import { NextFunction, Request, Response, Router } from "express";
import * as solc from "solc";
import * as fs from "fs";
import * as request from "request";
import * as Web3 from "web3";


class BaseController {
    public web3: object;
    constructor (web3: object) {
        console.log("Abstract Class Call");
        var blockchainurl = process.env.BLOCKCHAIN_SERVICE_URL;
        this.web3 = new Web3(new Web3.providers.HttpProvider(blockchainurl));
        console.log("Abstract Class Call success")
    }
}