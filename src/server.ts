import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import * as errorHandler from "errorhandler";
import * as cors from 'cors';



import { IndexRoute } from "./routes/index";
import { ContractController }from "./app/contract/contract.controller";

export class Server {
  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();

    //add api
    this.api();
  }

  /**
   * Create REST API routes
   *
   * @class Server
   * @method api
   */
  public api() {
    //empty for now
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   */
  public config() {


    //mount json form parser
    this.app.use(bodyParser.json());
    
    //mount query string parser
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
        err.status = 404;
        next(err);
    });

    //error handling
    this.app.use(errorHandler());
  }

  private routes() {
    let router: express.Router;
    router = express.Router();

    //IndexRoute
    IndexRoute.create(router);

    //ContractController
    ContractController.index(router);
    //use router middleware
    this.app.use(router);
  }

}
