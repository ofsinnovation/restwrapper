var bodyParser = require("body-parser");
var express = require("express");
var errorHandler = require("errorhandler");
var index_1 = require("./routes/index");
var contract_controller_1 = require("./app/contract/contract.controller");
var swagger = require('swagger-express');
var Server = (function () {
    /**
     * Constructor.
     *
     * @class Server
     * @constructor
     */
    function Server() {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        //add routes
        this.routes();
        //add api
        this.api();
    }
    Server.bootstrap = function () {
        return new Server();
    };
    /**
     * Create REST API routes
     *
     * @class Server
     * @method api
     */
    Server.prototype.api = function () {
        //empty for now
    };
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    Server.prototype.config = function () {
        //mount json form parser
        this.app.use(bodyParser.json());
        //mount query string parser
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        //error handling
        this.app.use(errorHandler());

        //Swagger init
        this.app.use(swagger.init(this.app, {
            apiVersion: '1.0',
            swaggerVersion: '2.0',
            swaggerURL: '/docs',
            swaggerJSON: './doc.json',//swagger service description
            swaggerUI: './public/swagger/',
            basePath: 'http://localhost:'+process.env.PORT,
            apis: ['./src/routes/index.js'],    
            middleware: function(req, res){
            }
          }));
        
    };
    Server.prototype.routes = function () {
        var router;
        router = express.Router();
        //IndexRoute
        index_1.IndexRoute.create(router);
        //ContractController
        contract_controller_1.ContractController.index(router);
        //use router middleware
        this.app.use(router);
    };
    return Server;
})();






exports.Server = Server;
