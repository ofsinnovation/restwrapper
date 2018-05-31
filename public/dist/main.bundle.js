webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/account/account.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/account/account.component.html"),
            styles: [__webpack_require__("./src/app/account/account.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manageuser_manageuser_component__ = __webpack_require__("./src/app/account/manageuser/manageuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_routes__ = __webpack_require__("./src/app/account/account.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__account_routes__["a" /* accountRoute */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__account_component__["a" /* AccountComponent */], __WEBPACK_IMPORTED_MODULE_4__manageuser_manageuser_component__["a" /* ManageuserComponent */]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return accountRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manageuser_manageuser_component__ = __webpack_require__("./src/app/account/manageuser/manageuser.component.ts");


var accountRoute = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__account_component__["a" /* AccountComponent */],
        children: [
            {
                path: '',
                redirectTo: 'accountmanage',
                pathMatch: 'full'
            },
            {
                path: 'accountmanage',
                component: __WEBPACK_IMPORTED_MODULE_1__manageuser_manageuser_component__["a" /* ManageuserComponent */]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/account/manageuser/manageuser.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n   <div *ngIf=\"accCreated\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n    <strong>Account</strong> Created successfully.\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n     <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  </div>\r\n  <div *ngIf=\"accCreateFail\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n    <strong>Account</strong> {{ error }}.\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n     <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  </div>\r\n\r\n <div *ngIf=\"transactionDone\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n    <strong>Transaction</strong> executed successfully.\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n     <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  </div>\r\n  <div *ngIf=\"transactionFail\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n    <strong>Transaction</strong> {{ error }}.\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n     <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n  </div>\r\n\r\n  <div *ngIf=\"peerAdded\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n      <strong>Peer</strong> added successfully.\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n       <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    </div>\r\n    <div *ngIf=\"peerFail\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n      <strong>Peer</strong> {{ error }}\r\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n       <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n    </div>\r\n    <div class=\"modal-backdrop fade in\" [style.display]=\"showModal ? 'block' : 'none'\"></div>\r\n      <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" style=\"display: block\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-popup\">\r\n            <div class=\"popup-title\">\r\n              <img src=\"assets/img/loader.gif\" alt=\"\" class=\"mx-auto d-block\">\r\n            </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n  <div class=\"container\">\r\n    <div id=\"account-wizard\" class=\"mt-3\">\r\n      <!-- Add new account -->\r\n      <div class=\"card mb-2\">\r\n        <div class=\"card-header\" id=\"header-addnew\" data-toggle=\"collapse\" data-target=\"#body-addnew\" aria-expanded=\"true\" aria-controls=\"body-addnew\">\r\n          <h6 class=\"mb-0 py-2\">\r\n            <i class=\"icon-plus\"></i> Add New Admin</h6>\r\n        </div>\r\n        <div id=\"body-addnew\" class=\"collapse show\" aria-labelledby=\"header-addnew\" data-parent=\"#account-wizard\">\r\n          <form name=\"form\" (ngSubmit)=\"f.form.valid && addAccount($event)\" #f=\"ngForm\" novalidate>\r\n            <div class=\"card-body\">\r\n              <div class=\"w-100\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-4\">\r\n                    <label for=\"accname\">Account Name</label>\r\n                    <input type=\"email\"\r\n                           id=\"accname\"\r\n                           name=\"accname\"\r\n                           #accname=\"ngModel\"\r\n                           [(ngModel)]=\"account.accname\"\r\n                           required\r\n                           class=\"form-control\">\r\n                    <div *ngIf=\"f.submitted && !accname.valid\" class=\"help-block\">Account name is required</div>\r\n                  </div>\r\n\r\n                  <div class=\"form-group col-md-4\">\r\n                    <label for=\"accpwd\">Password</label>\r\n                    <input type=\"password\"\r\n                           id=\"accpwd\"\r\n                           name=\"accpwd\"\r\n                           #accpwd=\"ngModel\"\r\n                           (keyup)=\"passwordMatch()\"\r\n                           [(ngModel)]=\"account.accpwd\"\r\n                           required\r\n                           class=\"form-control\">\r\n                    <div *ngIf=\"f.submitted && !accpwd.valid\" class=\"help-block\">Password is required</div>\r\n                  </div>\r\n                  <div class=\"form-group col-md-4\">\r\n                    <label for=\"accpwd\">Confirm Password</label>\r\n                    <input type=\"password\"\r\n                           id=\"confirmpwd\"\r\n                           name=\"confirmpwd\"\r\n                           #confirmpwd=\"ngModel\"\r\n                           (keyup)=\"passwordMatch()\"\r\n                           [(ngModel)]=\"account.confirmpwd\"\r\n                           required\r\n                           class=\"form-control\">\r\n                    <div *ngIf=\"f.submitted && !confirmpwd.valid\" class=\"help-block\">Confirm Password is required</div>\r\n                    <div *ngIf=\"!confirmpwd.pristine\">\r\n                      <div *ngIf=\"!passwordMatcher\" class=\"help-block\">\r\n                          Passwords did not match\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n              <button type=\"submit\" class=\"btn btn-success\"> Submit </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- ./Add new account -->\r\n\r\n      <!-- Manage admin -->\r\n      <div class=\"card mb-2\">\r\n        <div class=\"card-header collapsed\" id=\"header-manage\"  (click)=\"getAccount()\"  data-toggle=\"collapse\" data-target=\"#body-manage\" aria-expanded=\"false\" aria-controls=\"body-manage\">\r\n          <h6 class=\"mb-0 py-2\">\r\n            <i class=\"icon-users\"></i> Manage Admin\r\n          </h6>\r\n        </div>\r\n        <div id=\"body-manage\" class=\"collapse\" aria-labelledby=\"header-manage\" data-parent=\"#account-wizard\">\r\n          <div class=\"card-body\">\r\n            <div class=\"table-responsive-md\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Account Name</th>\r\n                    <th>Address</th>\r\n                    <th>Balance</th>\r\n                    <th>Lock Account</th>\r\n                    <th>Mine</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor =\"let accountDetail of accountDetails; let i=index\">\r\n                    <td>{{accountDetail.accountname}}</td>\r\n                    <td class=\"text-wrap\">{{accountDetail.accountId}}</td>\r\n                    <td> {{accountDetail.amount }} </td>\r\n                    <td>\r\n                      <div *ngIf=\" i != 0;\">\r\n                        <label class=\"toggle\">\r\n                          <input type=\"checkbox\" [checked]=\"accountDetail.status == 'inactive'\" (click)=\"updateAccountStaus( accountDetail.accountId, accountDetail.password, accountDetail.status )\">\r\n                          <span class=\"handle\"></span>\r\n                        </label>\r\n                      </div>\r\n                    </td>\r\n                    <td>\r\n                      <div *ngIf=\" i == 0;\">\r\n                          <div *ngIf=\" isMining == false;\">\r\n                              <button class=\"btn btn-success btn-sm btn-rounded\" (click)=\"updateMineService('start')\">\r\n                              <i class=\"icon-pause\"></i>Start</button>\r\n                          </div>\r\n                          <div *ngIf=\" isMining == true;\">\r\n                              <button class=\"btn btn-danger btn-sm btn-rounded\" (click)=\"updateMineService('stop')\">\r\n                              <i class=\"icon-pause\"></i>Stop</button>\r\n                          </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ./Manage admin -->\r\n\r\n      <!-- Transaction tokens -->\r\n      <div class=\"card mb-2\">\r\n        <div class=\"card-header collapsed\" id=\"header-transaction\" data-toggle=\"collapse\" data-target=\"#body-transaction\" aria-expanded=\"false\" aria-controls=\"body-transaction\">\r\n          <h6 class=\"mb-0 py-2\">\r\n            <i class=\"icon-tab\"></i> Transaction tokens</h6>\r\n        </div>\r\n        <div id=\"body-transaction\" class=\"collapse\" aria-labelledby=\"header-transaction\" data-parent=\"#account-wizard\">\r\n          <div class=\"card-body\">\r\n            <div class=\"w-75\">\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"accfrom\">From Account</label>\r\n                  <select name=\"profile\" class=\"form-control\" [(ngModel)]=\"accountTransaction.fromAccount\">\r\n                    <option [ngValue]=\"null\" disabled>Choose your Account</option>\r\n                    <option *ngFor=\"let accountA of accountDetails\" [ngValue]=\"accountA.accountId\">\r\n                        {{ accountA.accountname }} [ {{ accountA.amount }} ]\r\n                    </option>\r\n                 </select>\r\n\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"accto\">To Account</label>\r\n                  <select name=\"profile\" class=\"form-control\" [(ngModel)]=\"accountTransaction.toAccount\">\r\n                    <option [ngValue]=\"null\" disabled>Choose your Account</option>\r\n                    <option *ngFor=\"let accountB of accountDetails\" [ngValue]=\"accountB.accountId\">\r\n                        {{ accountB.accountname }} [ {{ accountB.amount }} ]\r\n                    </option>\r\n                 </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                  <label for=\"accquantity\">Quantity</label>\r\n                  <input type=\"text\" id=\"accquantity\" class=\"form-control\" name=\"amount\" [(ngModel)]=\"accountTransaction.quantity\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-footer text-right\">\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"transfer()\"\r\n             data-message=\"Transferring\">Transfer</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ./Transaction tokens -->\r\n\r\n      <!-- Manage admin -->\r\n      <div class=\"card mb-2\">\r\n        <div class=\"card-header collapsed\" (click) = \"getAdminNodeInfo()\" id=\"header-nodeinfo\" data-toggle=\"collapse\" data-target=\"#body-nodeinfo\" aria-expanded=\"false\" aria-controls=\"body-manage\">\r\n          <h6 class=\"mb-0 py-2\">\r\n            <i class=\"icon-info\"></i> Admin Node Info\r\n          </h6>\r\n        </div>\r\n        <div id=\"body-nodeinfo\" class=\"collapse\" aria-labelledby=\"header-nodeinfo\" data-parent=\"#account-wizard\">\r\n          <div class=\"card-body\" *ngIf=\"nodeInfo != undefined\">\r\n            <div class=\"table-responsive-md\">\r\n              <table class=\"table\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td class=\"overflow-wrap-hack\"><strong>eNode</strong> :\r\n                       <span class=\"node-info\">{{ nodeInfo.enode.replace('[::]', privateIp.privateIp) }}</span></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><strong>Genesis</strong> : {{ nodeInfo.protocols.eth.genesis }}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><strong>Head</strong> : {{ nodeInfo.protocols.eth.head }} </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><strong>Network</strong> : {{ nodeInfo.protocols.eth.network }} </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ./Manage admin -->\r\n\r\n      <!-- Transaction tokens -->\r\n      <div class=\"card mb-2\">\r\n          <div class=\"card-header collapsed\" id=\"header-peer\" data-toggle=\"collapse\" data-target=\"#body-peer\" aria-expanded=\"false\" aria-controls=\"body-transaction\">\r\n            <h6 class=\"mb-0 py-2\">\r\n              <i class=\"icon-plus\"></i> Add Peers</h6>\r\n          </div>\r\n          <div id=\"body-peer\" class=\"collapse\" aria-labelledby=\"header-peer\" data-parent=\"#account-wizard\">\r\n            <div class=\"card-body\">\r\n              <div class=\"w-100\">\r\n                <div class=\"form-row\">\r\n                  <div class=\"form-group col-md-8\">\r\n                    <label for=\"enode\">eNode</label>\r\n                    <input type=\"text\" id=\"enode\" [(ngModel)] = \"peerInfo.enode\" class=\"form-control\" name=\"enode\">\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"addPeerInfo()\" data-message=\"Peering\">Add as Peer</button>\r\n            </div>\r\n            <div class=\"card-footer text-right\">\r\n                             </div>\r\n          </div>\r\n        </div>\r\n        <!-- ./Transaction tokens -->\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/account/manageuser/manageuser.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/manageuser/manageuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manageuser_service__ = __webpack_require__("./src/app/account/manageuser/manageuser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageuserComponent = /** @class */ (function () {
    function ManageuserComponent(platformLocation, manageuserService) {
        this.platformLocation = platformLocation;
        this.manageuserService = manageuserService;
        this.showModal = false;
        this.accCreated = false;
        this.account = {};
        this.accountTransaction = {};
        this.transactionDone = false;
        this.newAccountInfo = {};
        this.updatedAccountInfo = [];
        this.passwordMatcher = false;
        this.accountInfo = [];
        this.updateAccountDetail = [];
        this.defaultAccount = [];
        this.peerInfo = {};
        this.peerAdded = false;
        this.isMining = false;
        this.hostname = platformLocation.location.host;
    }
    /*Add account start*/
    ManageuserComponent.prototype.addAccount = function () {
        var _this = this;
        this.showModal = true;
        if (this.passwordMatcher == true) {
            var accountNo_1 = this.manageuserService.addAccountService(this.account);
            if (accountNo_1 != '') {
                //this.accCreated = true;
            }
            this.error = "";
            this.getUserAccountInfo().subscribe(function (res) {
                try {
                    _this.accountDetailss = JSON.parse(res[0][1]);
                    _this.parseError = false;
                }
                catch (ex) {
                    _this.parseError = true;
                    _this.accCreateFail = true;
                    _this.error = ex;
                    _this.hideFlashMessage("this.accCreateFail");
                }
                _this.storeAccountInformation(_this.accountDetailss, accountNo_1, _this.parseError);
                _this.showModal = false;
                _this.accCreated = true;
            });
            this.hideFlashMessage("this.accCreated");
        }
        this.getAccount();
    };
    ManageuserComponent.prototype.storeAccountInformation = function (accountDetails, accountNo, parseError) {
        var _this = this;
        this.updatedAccountInfo = [];
        this.manageuserService.updateAccountInfo(accountNo, this.account.accpwd, "active");
        this.newAccountInfo = {
            "accountname": this.account.accname,
            "accountId": accountNo,
            "amount": this.getUserBalance(accountNo),
            "password": this.account.accpwd,
            "status": "active"
        };
        if (this.parseError === false) {
            if (accountDetails.length > 0) {
                for (var i = 0; i < accountDetails.length; i++) {
                    this.updatedAccountInfo.push(accountDetails[i]);
                }
            }
            else {
                this.updatedAccountInfo.push(this.manageuserService.getDefaultAccount());
            }
        }
        else {
            this.updatedAccountInfo.push(this.manageuserService.getDefaultAccount());
        }
        this.updatedAccountInfo.push(this.newAccountInfo);
        this.accountInfo = {
            "itemkey": this.hostname,
            "itemvalue": JSON.stringify(this.updatedAccountInfo),
            "itemstatus": "Inactive"
        };
        this.manageuserService.saveAccountDetails(this.accountInfo).subscribe(function (data) {
            _this.getAccount();
        });
        this.account.accname = ' ';
        this.account.accpwd = '';
        this.account.confirmpwd = ' ';
    };
    ManageuserComponent.prototype.passwordMatch = function () {
        if (this.account.accpwd == this.account.confirmpwd) {
            this.passwordMatcher = true;
        }
        else {
            this.passwordMatcher = false;
        }
    };
    ManageuserComponent.prototype.cbAccountCreation = function (err, res) {
        if (!err) {
            this.lastTransactionID = res;
            console.log('res', res);
        }
        else {
            this.lastTransactionID = "Error";
        }
        console.log('trans id', this.lastTransactionID);
    };
    /*get All account details start */
    ManageuserComponent.prototype.getAccount = function () {
        var _this = this;
        this.getUserAccountInfo().subscribe(function (response) {
            try {
                _this.accountDetails = JSON.parse(response[0][1]);
                _this.parseError = false;
            }
            catch (ex) {
                _this.parseError = true;
            }
            if ((_this.parseError == false && _this.accountDetails.length == 0) || _this.parseError == true) {
                _this.defaultAccount = [];
                _this.defaultAccount.push(_this.manageuserService.getDefaultAccount());
                _this.accountInfo = {
                    "itemkey": _this.hostname,
                    "itemvalue": JSON.stringify(_this.defaultAccount),
                    "itemstatus": "active"
                };
                _this.manageuserService.saveAccountDetails(_this.accountInfo).subscribe(function (data) {
                });
            }
            _this.isMining = _this.manageuserService.getMiningStatus();
        });
    };
    // get transfer
    ManageuserComponent.prototype.transfer = function () {
        this.showModal = true;
        var fromAcc = this.accountTransaction.deployFrom;
        var toAcc = this.accountTransaction.deployTo;
        var amount = this.accountTransaction.amount;
        try {
            var transRes = this.manageuserService.transferService(this.accountTransaction);
            if (transRes != '') {
                this.transactionDone = true;
                this.updateAccountInfo(null, this.accountTransaction.toAccount);
                this.getAccount();
                this.transactionFail = false;
            }
            this.hideFlashMessage("this.transactionDone");
            this.showModal = false;
        }
        catch (e) {
            this.transactionFail = true;
            this.error = e;
            this.hideFlashMessage("this.transactionFail");
            //this.showModal = false;
        }
    };
    ManageuserComponent.prototype.getUserBalance = function (accountId) {
        return this.manageuserService.getUserBalance(accountId);
    };
    ManageuserComponent.prototype.getUserAccountInfo = function () {
        return this.manageuserService.getAccountDetails();
    };
    ManageuserComponent.prototype.updateAccountStaus = function (accountId, password, status) {
        // tslint:disable-next-line:triple-equals
        if (status == 'active') {
            status = 'inactive';
        }
        else {
            status = 'active';
        }
        var accountStatus = this.manageuserService.updateAccountInfo(accountId, password, status);
        if (accountStatus === true) {
            this.updateAccountInfo(status, accountId);
        }
        this.getAccount();
    };
    ManageuserComponent.prototype.updateMineService = function (status) {
        var mineState = this.manageuserService.updateMineService(status);
        this.getAccount();
    };
    ManageuserComponent.prototype.updateAccountInfo = function (status, accountId) {
        var _this = this;
        if (status === void 0) { status = null; }
        if (status != null) {
            this.statusInfo = status;
        }
        this.getUserAccountInfo().subscribe(function (response) {
            var accountUpdatedInfo;
            try {
                accountUpdatedInfo = JSON.parse(response[0][1]);
                _this.parseError = false;
            }
            catch (ex) {
                accountUpdatedInfo = [];
                _this.parseError = true;
            }
            _this.updatedAccountInfo = [];
            if (accountUpdatedInfo.length > 0) {
                for (var i = 0; i < accountUpdatedInfo.length; i++) {
                    if (accountUpdatedInfo[i].accountId == accountId) {
                        _this.newAccountInfo = {
                            "accountname": accountUpdatedInfo[i].accountname,
                            "accountId": accountUpdatedInfo[i].accountId,
                            "password": accountUpdatedInfo[i].password,
                            "amount": _this.getUserBalance(accountUpdatedInfo[i].accountId),
                            "status": _this.statusInfo
                        };
                        _this.updatedAccountInfo.push(_this.newAccountInfo);
                    }
                    else {
                        _this.updatedAccountInfo.push(accountUpdatedInfo[i]);
                    }
                }
            }
            _this.updateAccountDetail = {
                "itemkey": _this.hostname,
                "itemvalue": JSON.stringify(_this.updatedAccountInfo),
                "itemstatus": "active"
            };
            _this.manageuserService.saveAccountDetails(_this.updateAccountDetail).subscribe(function (data) {
            });
        });
        this.getAccount();
    };
    ManageuserComponent.prototype.getAdminNodeInfo = function () {
        var _this = this;
        this.manageuserService.getURL().subscribe(function (response) {
            _this.nodeInfo = _this.manageuserService.getAdminNodeInfo();
            _this.privateIp = response;
        });
    };
    ManageuserComponent.prototype.addPeerInfo = function () {
        this.error = "";
        try {
            this.peerAdded = this.manageuserService.addPeerInfo(this.peerInfo.enode);
            this.peerFail = false;
        }
        catch (e) {
            this.peerFail = true;
            this.error = e;
            this.hideFlashMessage("this.peerFail");
        }
        this.hideFlashMessage("this.peerAdded");
    };
    ManageuserComponent.prototype.getMiningStatus = function () {
        this.isMining = this.manageuserService.getMiningStatus();
        console.log("this.isMining", this.isMining);
    };
    ManageuserComponent.prototype.updateUserBalanace = function () {
        var _this = this;
        this.getUserAccountInfo().subscribe(function (response) {
            var accountUpdatedInfo;
            try {
                accountUpdatedInfo = JSON.parse(response[0][1]);
                _this.parseError = false;
            }
            catch (ex) {
                accountUpdatedInfo = [];
                _this.parseError = true;
            }
            _this.updatedAccountInfo = [];
            if (accountUpdatedInfo.length > 0) {
                for (var i = 0; i < accountUpdatedInfo.length; i++) {
                    _this.updateUserAmount = {
                        "accountname": accountUpdatedInfo[i].accountname,
                        "accountId": accountUpdatedInfo[i].accountId,
                        "password": accountUpdatedInfo[i].password,
                        "amount": _this.getUserBalance(accountUpdatedInfo[i].accountId),
                        "status": accountUpdatedInfo[i].status,
                    };
                    _this.updatedAccountInfo.push(_this.updateUserAmount);
                }
            }
            _this.updateAccountDetail = {
                "itemkey": _this.hostname,
                "itemvalue": JSON.stringify(_this.updatedAccountInfo),
                "itemstatus": "active"
            };
            _this.manageuserService.saveAccountDetails(_this.updateAccountDetail).subscribe(function (data) {
            });
        });
        //this.getAccount();
    };
    // listenEvents() {
    //   this.manageuserService.mining.subscribe(data => {
    //       console.log("Welcome data", data);
    //   });
    // }
    ManageuserComponent.prototype.hideFlashMessage = function (data) {
        setTimeout(function () {
            if (data == "this.accCreated") {
                this.accCreated = false;
            }
            else if (data == "this.transactionDone") {
                this.transactionDone = false;
            }
            else if (data == "this.peerAdded") {
                this.peerAdded = false;
            }
            else if (data == "this.transactionFail") {
                this.transactionFail = false;
            }
            else if (data == "this.accCreateFail") {
                this.accCreateFail = false;
            }
            else if (data == "this.peerFail") {
                this.peerFail = false;
            }
        }.bind(this), 5000);
    };
    ManageuserComponent.prototype.ngOnInit = function () {
        this.updateUserBalanace();
        this.getAccount();
        //this.listenEvents();
    };
    ManageuserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manageuser',
            template: __webpack_require__("./src/app/account/manageuser/manageuser.component.html"),
            styles: [__webpack_require__("./src/app/account/manageuser/manageuser.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* PlatformLocation */], __WEBPACK_IMPORTED_MODULE_1__manageuser_service__["a" /* ManageuserService */]])
    ], ManageuserComponent);
    return ManageuserComponent;
}());



/***/ }),

/***/ "./src/app/account/manageuser/manageuser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageuserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3__ = __webpack_require__("./node_modules/web3/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import * as miner from '../../../../node_modules/web3/lib/web3/methods/';
var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ManageuserService = /** @class */ (function () {
    function ManageuserService(http, platformLocation) {
        var _this = this;
        this.http = http;
        this.platformLocation = platformLocation;
        this.blocks = [];
        this.blockurlArray = [];
        this.accountDetails = {};
        this.contractInfo = [];
        this.contractInfoEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.miningStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mining = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.nodebaseUrl = platformLocation.location.origin;
        this.hostname = platformLocation.location.host;
        if (this.nodebaseUrl.indexOf('http://localhost') == 0) {
            this.nodebaseUrl = 'http://localhost:5000';
        }
        // this.http.get(this.nodebaseUrl + '/blockchainurl').subscribe((res) => {
        //     this.blockchain =  res;
        //     console.log("BCNURL", this.blockchain);
        //     //this.web3 = new Web3(new Web3.providers.HttpProvider(this.blockchain));
        // });
        // this.http.get(this.nodebaseUrl + '/blockchainurl').subscribe((res)=>{
        //   this.blockchain =  res;
        //   this.blockurlArray.push(this.blockchain);
        // });
        this.getURL().subscribe(function (res) {
            _this.blockchain = res;
            _this.web3 = new __WEBPACK_IMPORTED_MODULE_2_web3__(new __WEBPACK_IMPORTED_MODULE_2_web3__["providers"].HttpProvider(_this.blockchain.blockchainurl));
            _this.web3._extend({
                property: 'admin',
                methods: [new _this.web3._extend.Method({
                        name: 'addPeer',
                        call: 'admin_addPeer',
                        params: 1,
                    })],
                properties: [new _this.web3._extend.Property({
                        name: 'nodeInfo',
                        getter: 'admin_nodeInfo'
                    })]
            });
            _this.web3._extend({
                property: 'miner',
                methods: [new _this.web3._extend.Method({
                        name: 'mineStart',
                        call: 'miner_start',
                        params: 1,
                    })],
                properties: [new _this.web3._extend.Property({
                        name: 'mineStop',
                        getter: 'miner_stop'
                    })]
            });
        });
    }
    ManageuserService.prototype.getURL = function () {
        return this.http.get(this.nodebaseUrl + '/bcurl');
    };
    /*-------------Add Account Service -------------------------*/
    /*Add Account Service */
    ManageuserService.prototype.addAccountService = function (account) {
        this.accountDetails = account;
        console.log(this.accountDetails);
        console.log("Admin", this.web3.admin);
        return this.web3.personal.newAccount(account.accpwd);
    };
    ManageuserService.prototype.saveAccountDetails = function (accountInfo) {
        console.log("accountInf sd o", accountInfo);
        return this.http.post(this.nodebaseUrl + '/create/account', accountInfo, httpOptions);
    };
    ManageuserService.prototype.getAccountInfo = function () {
        var allAccountObj = [];
        var accountsdetails = this.web3.personal.listAccounts;
        //for (let i = 0; i < accountsdetails.length; i++) {
        var account = {
            'accountname': 'Default Account',
            'accountId': accountsdetails[0],
            'amount': this.getUserBalance(accountsdetails[0]),
        };
        allAccountObj.push(account);
        //}
        return allAccountObj;
    };
    ManageuserService.prototype.getDefaultAccount = function () {
        var allAccountObj = [];
        var accountsdetails = this.web3.personal.listAccounts;
        var account = {
            'accountname': 'Default Account',
            'accountId': accountsdetails[0],
            'amount': this.getUserBalance(accountsdetails[0]),
            'status': 'active'
        };
        //llAccountObj.push(account);
        return account;
    };
    ManageuserService.prototype.getAccountDetails = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
        params = params.append('host', this.hostname);
        console.log("NODe", this.nodebaseUrl + '/accounts');
        return this.http.get(this.nodebaseUrl + '/accounts', { params: params });
    };
    ManageuserService.prototype.isUnlocked = function (address) {
        try {
            this.web3.eth.sign("", address);
        }
        catch (e) {
            return false;
        }
        return true;
    };
    ManageuserService.prototype.transferService = function (accountTransaction) {
        console.log("accountTransaction", accountTransaction);
        var fromAccount = accountTransaction.fromAccount;
        var toAccount = accountTransaction.toAccount;
        var amount = accountTransaction.quantity;
        var message = { from: fromAccount, to: toAccount, value: this.web3.toWei(amount, 'ether') };
        return this.web3.eth.sendTransaction(message);
    };
    /*----------------------------Block Explorer Service ------------------------------*/
    //get All block number
    ManageuserService.prototype.getBlockNumberService = function () {
        var maxBlocks = 50; // TODO: into setting file or user select
        var blocknumberNew = this.web3.eth.blockNumber;
        var blockNum = this.blockNum = parseInt(blocknumberNew, 10);
        console.log(this.web3.eth.blockNumber);
        if (maxBlocks > blockNum) {
            maxBlocks = blockNum + 1;
        }
        // get latest 10 blocks
        this.blocks = [];
        for (var i = 0; i < maxBlocks; ++i) {
            this.blocks.push(this.web3.eth.getBlock(blockNum - i));
        }
        return this.blocks;
    };
    //get block details
    ManageuserService.prototype.getBlockInfoService = function (blocknumber) {
        return this.web3.eth.getBlock(blocknumber);
    };
    //from block explorer mining service
    ManageuserService.prototype.mineService = function (miner) {
        var mineRes = [];
        this.web3.eth.getBalance(miner, function (error, result) {
            var mineVal = {
                'e': result.e,
                's': result.s
            };
            mineRes.push(mineVal);
        });
        return mineRes;
    };
    /*--------------------Smart contracts Service ------------------------ */
    ManageuserService.prototype.compileContractService = function (solfile) {
        var body = {
            "source": solfile
        };
        return this.http.post(this.nodebaseUrl + '/solstring', body, httpOptions);
    };
    //mine start and stop service
    ManageuserService.prototype.updateMineService = function (service) {
        if (service == 'start') {
            return this.web3.miner.mineStart(1);
        }
        else if (service == 'stop') {
            return this.web3.miner.mineStop;
        }
    };
    //deploy contract
    ManageuserService.prototype.deployContractService = function (deploy, compileResults) {
        var _this = this;
        this.contractInfo = [];
        var contractName = deploy.deployFrom;
        var newContract = compileResults.contracts[contractName], abi = JSON.parse(newContract.interface), bytecode = '0x' + newContract.bytecode, myContract = this.web3.eth.contract(abi);
        var gasEstimate = this.web3.eth.estimateGas({ data: bytecode });
        var MyContract = this.web3.eth.contract(abi);
        var myContractReturned = MyContract.new({
            from: deploy.deployTo,
            data: bytecode,
            gas: gasEstimate
        }, function (error, newContract) {
            if (!error) {
                var byteAbi = newContract;
                _this.contractInfo.push(byteAbi);
                _this.contractInfoEmitter.emit(_this.contractInfo);
            }
        });
        return this.contractInfo;
    };
    ManageuserService.prototype.getTransactionInfo = function (transactionHash) {
        return this.web3.eth.getTransaction(transactionHash);
    };
    ManageuserService.prototype.getGasPrice = function (Bignumber) {
        console.log(Bignumber);
        return this.web3.fromWei(Bignumber, "ether").toNumber();
    };
    ManageuserService.prototype.getUserBalance = function (accountId) {
        return this.web3.fromWei(this.web3.eth.getBalance(accountId), "ether").toNumber();
    };
    ManageuserService.prototype.updateAccountInfo = function (accountId, password, status) {
        console.log("status service", status);
        if (status === 'active') {
            console.log("unlock");
            return this.web3.personal.unlockAccount(accountId, password);
        }
        else {
            console.log("lock");
            return this.web3.personal.lockAccount(accountId);
        }
    };
    ManageuserService.prototype.getAdminNodeInfo = function () {
        console.log("enode Info", this.web3.admin.nodeInfo);
        return this.web3.admin.nodeInfo;
    };
    ManageuserService.prototype.addPeerInfo = function (enode) {
        console.log(enode);
        return this.web3.admin.addPeer(enode);
    };
    ManageuserService.prototype.getMiningStatus = function () {
        return this.web3.eth.mining;
    };
    ManageuserService.prototype.getTotalBlocks = function () {
        return this.web3.eth.blockNumber;
    };
    ManageuserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* PlatformLocation */]])
    ], ManageuserService);
    return ManageuserService;
}());



/***/ }),

/***/ "./src/app/analytics/analytics.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mt-3\">\n    <img src=\"assets/img/analytics.png\" alt=\"\" class=\"d-block mx-auto\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/analytics/analytics.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/analytics/analytics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-analytics',
            template: __webpack_require__("./src/app/analytics/analytics.component.html"),
            styles: [__webpack_require__("./src/app/analytics/analytics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark py-2 py-lg-0\" role=\"navigation\">\r\n    <div class=\"container-fluid\">\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"./assets/img/logo.png\" alt=\"\" class=\"float-left\"> &nbsp; Private Blockchain Admin</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\" aria-controls=\"navbarSupportedContent\"\r\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\r\n        <ul class=\"navbar-nav mt-2 mx-lg-4 my-lg-0\">\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n            <a class=\"nav-link p-2 p-lg-3\" routerLink=\"accountmanage\">\r\n              Network Administration\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n            <a class=\"nav-link p-2 p-lg-3\" routerLink=\"deploy\">\r\n              Smart Contracts\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item hide\" [routerLinkActive]=\"['active']\">\r\n            <a class=\"nav-link p-2 p-lg-3\" routerLink=\"analytics\">\r\n              Analytics\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item hide\" [routerLinkActive]=\"['active']\">\r\n            <a class=\"nav-link p-2 p-lg-3\" routerLink=\"scheduling\">\r\n              Scheduling\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\r\n            <a class=\"nav-link p-2 p-lg-3\" routerLink=\"blockexplorer\">\r\n              Block Explorer\r\n            </a>\r\n          </li>\r\n\r\n        </ul>\r\n\r\n      </div>\r\n      <div>\r\n        <button class=\"btn btn-info btn-sm\" type=\"submit\">\r\n          <a class=\"nav-link\" href=\"{{ loanAppUrl }}\" target=\"_blank\">\r\n           <span> <b style=\"font-size: 14px; font-weight: 500; color: #FFFFFF\">Deploy Loan DApp</b></span>\r\n          </a>\r\n        </button>\r\n      </div>\r\n      <!-- /.navbar-collapse -->\r\n    </div>\r\n    <!-- /.container-fluid -->\r\n  </nav>\r\n</header>\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http, platformLocation) {
        var _this = this;
        this.http = http;
        this.platformLocation = platformLocation;
        this.title = 'app';
        this.nodebaseUrl = platformLocation.location.origin;
        if (this.nodebaseUrl.indexOf('http://localhost') == 0) {
            this.nodebaseUrl = 'http://localhost:5000';
        }
        this.http.get(this.nodebaseUrl + '/loanappurl').subscribe(function (response) {
            _this.loanAppUrl = response.url;
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["i" /* PlatformLocation */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_route__ = __webpack_require__("./src/app/app.route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_account_module__ = __webpack_require__("./src/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__deploy_deploy_module__ = __webpack_require__("./src/app/deploy/deploy.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_manageuser_manageuser_service__ = __webpack_require__("./src/app/account/manageuser/manageuser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__blockexplorer_blockexplorer_component__ = __webpack_require__("./src/app/blockexplorer/blockexplorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__analytics_analytics_component__ = __webpack_require__("./src/app/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scheduling_scheduling_component__ = __webpack_require__("./src/app/scheduling/scheduling.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_object_iterate_pipe__ = __webpack_require__("./src/app/pipes/object-iterate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__blockexplorer_blockexplorer_component__["a" /* BlockexplorerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__analytics_analytics_component__["a" /* AnalyticsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__scheduling_scheduling_component__["a" /* SchedulingComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pipes_object_iterate_pipe__["a" /* ObjectIteratePipe */],
                __WEBPACK_IMPORTED_MODULE_14__filter_pipe__["a" /* FilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_route__["a" /* Approute */]),
                __WEBPACK_IMPORTED_MODULE_7__account_account_module__["a" /* AccountModule */],
                __WEBPACK_IMPORTED_MODULE_8__deploy_deploy_module__["a" /* DeployModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__account_manageuser_manageuser_service__["a" /* ManageuserService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Approute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__account_account_component__ = __webpack_require__("./src/app/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deploy_deploy_component__ = __webpack_require__("./src/app/deploy/deploy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blockexplorer_blockexplorer_component__ = __webpack_require__("./src/app/blockexplorer/blockexplorer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analytics_analytics_component__ = __webpack_require__("./src/app/analytics/analytics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scheduling_scheduling_component__ = __webpack_require__("./src/app/scheduling/scheduling.component.ts");





var Approute = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__account_account_component__["a" /* AccountComponent */]
    },
    {
        path: 'account',
        component: __WEBPACK_IMPORTED_MODULE_0__account_account_component__["a" /* AccountComponent */]
    },
    {
        path: 'deploy',
        component: __WEBPACK_IMPORTED_MODULE_1__deploy_deploy_component__["a" /* DeployComponent */]
    },
    {
        path: 'blockexplorer',
        component: __WEBPACK_IMPORTED_MODULE_2__blockexplorer_blockexplorer_component__["a" /* BlockexplorerComponent */]
    },
    {
        path: 'analytics',
        component: __WEBPACK_IMPORTED_MODULE_3__analytics_analytics_component__["a" /* AnalyticsComponent */]
    },
    {
        path: 'scheduling',
        component: __WEBPACK_IMPORTED_MODULE_4__scheduling_scheduling_component__["a" /* SchedulingComponent */]
    }
];


/***/ }),

/***/ "./src/app/blockexplorer/blockexplorer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n  <strong>Compilation</strong> done successfully.\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n  <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div> -->\r\n<div class=\"modal-backdrop fade in\" [style.display]=\"showModal ? 'block' : 'none'\"></div>\r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" style=\"display: block\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-popup\">\r\n        <div class=\"popup-title\">\r\n          <img src=\"assets/img/loader.gif\" alt=\"\" class=\"mx-auto d-block\">\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"modal fade\" id=\"loader\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"loader\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-body\">\r\n        <h5 class=\"text-center\"></h5>\r\n        <img src=\"assets/img/loader.gif\" alt=\"\" class=\"mx-auto d-block\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"container mt-5\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-4\">\r\n      <!-- Block list -->\r\n      <div class=\"card mb-2\">\r\n        <div class=\"card-header\" id=\"header-blocklist\" data-toggle=\"collapse\" data-target=\"#body-blocklist\" aria-expanded=\"true\" aria-controls=\"body-blocklist\">\r\n          <h6 class=\"mb-0 py-2\">\r\n            <i class=\"icon-stack\"></i> Block List</h6>\r\n        </div>\r\n        <div id=\"body-blocklist\" class=\"collapse show\" aria-labelledby=\"header-blocklist\" data-parent=\"#block-wizard\">\r\n          <div class=\"card-body\">\r\n            <div class=\"custom-input-group mb-3\">\r\n              <i class=\"icon-search\" id=\"icon-search\"></i>\r\n              <input class=\"form-control is-rounded\" type=\"search\"\r\n              placeholder=\"Search\" aria-label=\"Search\" aria-describedby=\"icon-search\">\r\n            </div>\r\n            <div class=\"custom-input-group mb-3\">\r\n                <input type=\"checkbox\" (click)=\"getBlockInfoWithTransaction(isTransaction)\" /> Show blocks with transactions only\r\n            </div>\r\n            <div *ngIf=\"isTransaction;then transactionBlock else allBlocks\">here is ignored</div>\r\n            <ul class=\"list-unstyled\">\r\n            <ng-template #transactionBlock>\r\n                <span *ngFor=\"let getBlockNumberList of getBlockNumberLists | filter : searchText\">\r\n                <li class=\"media my-3\" *ngIf=\"getBlockNumberList.transactions.length\" (click)=\"getBlockinfo(getBlockNumberList.number)\" style=\"cursor: pointer;\">\r\n                        <img class=\"img-fluid mr-3\" src=\"assets/img/stack.png\" alt=\"Block\" style=\"width: 50px;\">\r\n                        <div class=\"media-body\">\r\n                          <h5 class=\"mt-0 mb-1\">Block # <strong>{{getBlockNumberList.number}}</strong></h5>\r\n                          <div class=\"d-flex justify-content-md-between\">\r\n                            <small class=\"mr-2\">TX#: {{getBlockNumberList.transactions.length}}</small>\r\n                            <small class=\"mr-2\">Size: {{getBlockNumberList.size}}</small>\r\n                            <small>Timestamp: {{getBlockNumberList.timestamp}}</small>\r\n                          </div>\r\n                        </div>\r\n                  </li>\r\n                </span>\r\n            </ng-template>\r\n            <ng-template #allBlocks>\r\n                <li class=\"media my-3\" *ngFor=\"let getBlockNumberList of getBlockNumberLists | filter : searchText\"  (click)=\"getBlockinfo(getBlockNumberList.number)\" style=\"cursor: pointer;\">\r\n                        <img class=\"img-fluid mr-3\" src=\"assets/img/stack.png\" alt=\"Block\" style=\"width: 50px;\">\r\n                        <div class=\"media-body\">\r\n                          <h5 class=\"mt-0 mb-1\">Block # <strong>{{getBlockNumberList.number}}</strong></h5>\r\n                          <div class=\"d-flex justify-content-md-between\">\r\n                            <small class=\"mr-2\">TX#: {{getBlockNumberList.transactions.length}}</small>\r\n                            <small class=\"mr-2\">Size: {{getBlockNumberList.size}}</small>\r\n                            <small>Timestamp: {{getBlockNumberList.timestamp}}</small>\r\n                          </div>\r\n                        </div>\r\n                  </li>\r\n            </ng-template>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ./Block list -->\r\n\r\n    </div>\r\n\r\n    <div class=\"col-lg-8\">\r\n      <!-- Block Description -->\r\n      <div class=\"card mb-2\">\r\n        <div class=\"card-header\" id=\"header-blockdetails\" data-toggle=\"collapse\" data-target=\"#body-blockdetails\" aria-expanded=\"true\" aria-controls=\"body-blockdetails\">\r\n          <h6 class=\"mb-0 py-2\">\r\n            <i class=\"icon-info\"></i> View Information about an Etherium block</h6>\r\n        </div>\r\n        <div id=\"body-blockdetails\" class=\"collapse show\" aria-labelledby=\"header-blockdetails\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"mb-2\">Block# <strong>  {{getBlockinfoDetails.number}} </strong></h4>\r\n            <span class=\"block-hash\">{{getBlockinfoDetails.hash}}</span>\r\n            <div class=\"d-flex justify-content-end my-2\">\r\n              <button class=\"btn btn-primary mr-3\">{{ getBlockinfoDetails.conf }}</button>\r\n              <button class=\"btn btn-success\"> {{ getBlockinfoDetails.gasUsed }} Gas Used</button>\r\n            </div>\r\n\r\n            <h5 class=\"text-uppercase font-weight-bold mt-4\">Summary</h5>\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-8\">\r\n                <div class=\"d-flex\">\r\n                  <label class=\"col w-50 text-right\">Block Number</label>\r\n                  <span class=\"col w-50 font-weight-bold\">{{getBlockinfoDetails.number}}</span>\r\n                </div>\r\n\r\n                <div class=\"d-flex\">\r\n                  <label class=\"col w-50 text-right\">Received Time</label>\r\n                  <span class=\"col w-50 font-weight-bold\">{{getBlockinfoDetails.timestamp}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <label class=\"col w-50 text-right\">Difficulty</label>\r\n                  <span class=\"col w-50 font-weight-bold\">{{getBlockinfoDetails.difficulty}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <label class=\"col w-50 text-right\">Nonce</label>\r\n                  <span class=\"col w-50 font-weight-bold\">{{getBlockinfoDetails.nonce}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <label class=\"col w-50 text-right\">Size</label>\r\n                  <span class=\"col w-50 font-weight-bold\">{{getBlockinfoDetails.size}}</span>\r\n                </div>\r\n                <div class=\"d-flex\">\r\n                  <label class=\"col w-50 text-right\">Miner</label>\r\n                  <span class=\"col w-50  miner-anchor\"\r\n                    (click)=\"miner(getBlockinfoDetails.miner)\">\r\n                       {{getBlockinfoDetails.miner}}\r\n                  </span>\r\n                </div>\r\n                <div *ngIf = \"mineShow\">\r\n                  <div *ngFor = 'let minerRe of minerRes'>\r\n                     <div class=\"d-flex\">\r\n                        <label class=\"col w-50 text-right\">Balance (Wei)</label>\r\n                        <span class=\"col w-50 font-weight-bold\">{{minerRe.s}}</span>\r\n                      </div>\r\n                      <div class=\"d-flex\">\r\n                          <label class=\"col w-50 text-right\">Balance (Ether)</label>\r\n                          <span class=\"col w-50 font-weight-bold\">{{minerRe.e}}</span>\r\n                      </div>\r\n                     </div>\r\n                  </div>\r\n                <div class=\"d-flex\">\r\n                  <label class=\"col w-50 text-right\">Gas Limit</label>\r\n                  <span class=\"col w-50 font-weight-bold\">{{getBlockinfoDetails.gasLimit}}</span>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <h5 class=\"text-uppercase font-weight-bold mt-4\">Transactions </h5>\r\n              <div id=\"deploy-wizard\" class=\"mt-3\"  *ngFor =\"let transaction of getBlockinfoDetails.transactions; let i=index\">\r\n                <div class=\"card\">\r\n                  <div (click)=\"getTransactionDetails(transaction)\" class=\"card-header collapsed\" id=\"header-abi\" data-toggle=\"collapse\" attr.data-target=\"#{{transaction}}\" aria-expanded=\"false\" aria-controls=\"body-abi\">\r\n                      <i class=\"icon-embed2\"></i> {{ transaction }}\r\n                  </div>\r\n                  <div id=\"{{transaction}}\" class=\"collapse\" aria-labelledby=\"header-abi\" data-parent=\"#deploy-wizard\">\r\n                    <div class=\"card-body\">\r\n                     <p class=\"\">  <strong>Input: </strong> {{ transactionInfo.input }}</p>\r\n                     <p class=\"\">  <strong>Gas Price: </strong> {{ transactionInfo.price }}</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ./Block Description -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/blockexplorer/blockexplorer.component.scss":
/***/ (function(module, exports) {

module.exports = ".miner-anchor {\n  color: #0056b3;\n  cursor: pointer; }\n\n.block-hash {\n  color: #0056b3; }\n\nul.list-unstyled li {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/blockexplorer/blockexplorer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlockexplorerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_manageuser_manageuser_service__ = __webpack_require__("./src/app/account/manageuser/manageuser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockexplorerComponent = /** @class */ (function () {
    function BlockexplorerComponent(manageuserService) {
        this.manageuserService = manageuserService;
        this.isTransaction = false;
        this.getBlockinfoDetails = {};
        this.mineShow = false;
        //get Block info
        this.transaction = [];
        this.transactionInfo = [];
    }
    //get block number
    BlockexplorerComponent.prototype.getBlockNumber = function () {
        this.showModal = true;
        try {
            this.getBlockNumberLists = this.manageuserService.getBlockNumberService();
            this.getBlockinfo(this.getBlockNumberLists[0].number);
            this.showModal = false;
        }
        catch (e) {
            this.showModal = true;
            setTimeout(function () {
                this.getBlockNumberLists = this.manageuserService.getBlockNumberService();
                this.getBlockinfo(this.getBlockNumberLists[0].number);
                this.showModal = false;
            }.bind(this), 3000);
        }
    };
    ;
    BlockexplorerComponent.prototype.getBlockinfo = function (blocknumber) {
        this.totalBlocks = this.manageuserService.getTotalBlocks();
        this.transactionInfo = [];
        this.getBlockinfoDetails = this.manageuserService.getBlockInfoService(blocknumber);
        console.log("totalBlock", this.totalBlocks);
        console.log("blocknumber", blocknumber);
        if (this.getBlockinfoDetails.number !== undefined) {
            this.getBlockinfoDetails.conf = this.totalBlocks - blocknumber + " Confirmations";
        }
        console.log("getBlockinfoDetails ", this.getBlockinfoDetails);
        // for (let i = 0; i < this.getBlockinfoDetails.transactions.length; i++) {
        //   this.transaction = this.manageuserService.getTransactionInfo(this.getBlockinfoDetails.transactions[i]);
        //   this.transaction.price = this.manageuserService.getGasPrice(this.transaction.value);
        //   this.transactionInfo.push(this.transaction);
        // }
        // console.log("Transaction Info", this.transactionInfo);
    };
    //minier
    BlockexplorerComponent.prototype.miner = function (miner) {
        this.minerRes = this.manageuserService.mineService(miner);
        console.log('component', this.minerRes);
        this.mineShow = true;
    };
    BlockexplorerComponent.prototype.getTransactionDetails = function (transactionHash) {
        this.transactionInfo = this.manageuserService.getTransactionInfo(transactionHash);
        this.transactionInfo.price = this.manageuserService.getGasPrice(this.transactionInfo.value);
        console.log("Transaction Info", this.transactionInfo);
    };
    BlockexplorerComponent.prototype.getBlockInfoWithTransaction = function (transctionReq) {
        if (transctionReq == false) {
            this.isTransaction = true;
        }
        else {
            this.isTransaction = false;
        }
    };
    BlockexplorerComponent.prototype.ngOnInit = function () {
        this.getBlockNumber();
    };
    BlockexplorerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blockexplorer',
            template: __webpack_require__("./src/app/blockexplorer/blockexplorer.component.html"),
            styles: [__webpack_require__("./src/app/blockexplorer/blockexplorer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__account_manageuser_manageuser_service__["a" /* ManageuserService */]])
    ], BlockexplorerComponent);
    return BlockexplorerComponent;
}());



/***/ }),

/***/ "./src/app/deploy/deploy.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/deploy/deploy.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/deploy/deploy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeployComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeployComponent = /** @class */ (function () {
    function DeployComponent() {
    }
    DeployComponent.prototype.ngOnInit = function () {
    };
    DeployComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-deploy',
            template: __webpack_require__("./src/app/deploy/deploy.component.html"),
            styles: [__webpack_require__("./src/app/deploy/deploy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DeployComponent);
    return DeployComponent;
}());



/***/ }),

/***/ "./src/app/deploy/deploy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeployModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__deploy_component__ = __webpack_require__("./src/app/deploy/deploy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__deploycontract_deploycontract_component__ = __webpack_require__("./src/app/deploy/deploycontract/deploycontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__deploy_routes__ = __webpack_require__("./src/app/deploy/deploy.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DeployModule = /** @class */ (function () {
    function DeployModule() {
    }
    DeployModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__deploy_routes__["a" /* deployRoute */]),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__deploy_component__["a" /* DeployComponent */], __WEBPACK_IMPORTED_MODULE_4__deploycontract_deploycontract_component__["a" /* DeploycontractComponent */]]
        })
    ], DeployModule);
    return DeployModule;
}());



/***/ }),

/***/ "./src/app/deploy/deploy.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deployRoute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deploy_component__ = __webpack_require__("./src/app/deploy/deploy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__deploycontract_deploycontract_component__ = __webpack_require__("./src/app/deploy/deploycontract/deploycontract.component.ts");


var deployRoute = [
    {
        path: 'deploy',
        component: __WEBPACK_IMPORTED_MODULE_0__deploy_component__["a" /* DeployComponent */],
        children: [
            {
                path: '',
                redirectTo: 'deploycontract',
                pathMatch: 'full'
            },
            {
                path: 'deploycontract',
                component: __WEBPACK_IMPORTED_MODULE_1__deploycontract_deploycontract_component__["a" /* DeploycontractComponent */]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/deploy/deploycontract/deploycontract.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"compileShow\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n  <strong>Compiled</strong> successfully.\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n  <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n\r\n<div *ngIf=\"deployShow\" class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n    <strong>Deployed</strong> successfully.\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"compileFail\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n  <strong>Compile : </strong> {{ error }}\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n  <span aria-hidden=\"true\">&times;</span>\r\n</button>\r\n</div>\r\n\r\n<div *ngIf=\"deployFail\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\r\n    <strong>Deploy : </strong> {{ error }}\r\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n\r\n<div class=\"modal-backdrop fade in\" [style.display]=\"showModal ? 'block' : 'none'\"></div>\r\n  <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" style=\"display: block\" [style.display]=\"showModal ? 'block' : 'none'\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-popup\">\r\n        <div class=\"popup-title\">\r\n          <img src=\"assets/img/loader.gif\" alt=\"\" class=\"mx-auto d-block\">\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"container\">\r\n  <div id=\"deploy-wizard\" class=\"mt-3\">\r\n\r\n    <!-- Upload file -->\r\n    <div class=\"card mb-2\">\r\n      <div class=\"card-header\" id=\"header-upload\" data-target=\"#body-upload\" data-toggle=\"collapse\" aria-expanded=\"true\" aria-controls=\"body-upload\">\r\n        <h6 class=\"mb-0 py-2\">\r\n          <i class=\"icon-folder-upload\"></i> Upload your Solidity file here</h6>\r\n      </div>\r\n      <div id=\"body-upload\" class=\"collapse show\" aria-labelledby=\"header-upload\" data-parent=\"#deploy-wizard\">\r\n        <div class=\"card-body\">\r\n          <div class=\"w-50\">\r\n            <div class=\"input-group\">\r\n              <div class=\"custom-file\">\r\n                <input type=\"file\" class=\"custom-file-input\" id=\"file-upload\" (change)=\"getContractsFromFile($event)\">\r\n                <label class=\"custom-file-label\" for=\"file-upload\">Upload .sol file</label>\r\n              </div>\r\n              <div class=\"input-group-append\">\r\n                <span class=\"input-group-text\" id=\"\">Upload</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- ./Upload file -->\r\n\r\n    <!-- Copy paste code -->\r\n    <div class=\"card mb-2\">\r\n      <div class=\"card-header\"  id=\"header-copy\" data-toggle=\"collapse\" data-target=\"#body-copy\" aria-expanded=\"false\" aria-controls=\"body-copy\">\r\n        <h6 class=\"mb-0 py-2\">\r\n          <i class=\"icon-copy\"></i> Copy Paste your Smart Contract</h6>\r\n      </div>\r\n      <div id=\"body-copy\" class=\"collapse show\" aria-labelledby=\"header-copy\" data-parent=\"#deploy-wizard\">\r\n        <div class=\"card-body\">\r\n          <textarea #contractText contenteditable=\"false\" [(ngModel)]=\"sol.file\"  id=\"field-copy\"   contenteditable=\"false\" class=\"form-control form-control-lg\">\r\n          </textarea>\r\n        </div>\r\n        <div class=\"card-footer text-right\">\r\n          <button type=\"button\" class=\"btn btn-success\"\r\n          data-toggle=\"modal\" data-target=\"#loader\" (click)=\"getContractsFromText(contractText)\" data-message=\"Compiling Contract\">Compile</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n      <!-- Deploy contract -->\r\n    <div class=\"card mb-2\">\r\n      <div class=\"card-header collapsed\" id=\"header-deploy\" data-toggle=\"collapse\" data-target=\"#body-deploy\" aria-expanded=\"false\" aria-controls=\"body-deploy\">\r\n        <h6 class=\"mb-0 py-2\">\r\n          <i class=\"icon-rocket\"></i> Deploy Contract</h6>\r\n      </div>\r\n      <div id=\"body-deploy\" class=\"collapse\" aria-labelledby=\"header-deploy\" data-parent=\"#deploy-wizard\">\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n                <label class=\"control-label\">Contracts</label>\r\n\r\n              <select name=\"profile\" class=\"custom-select\" required [(ngModel)]=\"deploy.deployFrom\">\r\n                  <option *ngFor=\"let contractsList of contractsList\" [ngValue]=\"contractsList.key\">\r\n                      {{ contractsList.key }}\r\n                  </option>\r\n              </select>\r\n             </div>\r\n            <div class=\"col\">\r\n              <label class=\"control-label\">Deploy As</label>\r\n              <select name=\"profile\" required class=\"form-control\" [(ngModel)]=\"deploy.deployTo\">\r\n                    <option *ngFor=\"let account of accounts\" [ngValue]=\"account.accountId\">\r\n                        {{ account.accountname }} [ {{ account.amount  }} ]\r\n                    </option>\r\n                 </select>\r\n            </div>\r\n        </div>\r\n        </div>\r\n        <div class=\"card-footer text-right\">\r\n          <button type=\"button\" (click)=\"deployContract()\" class=\"btn btn-success\"\r\n          >Deploy</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- ./Deploy contract -->\r\n\r\n    <div class=\"card mb-2\">\r\n      <div class=\"card-header collapsed\" id=\"header-abi\" data-toggle=\"collapse\" data-target=\"#body-abi\" aria-expanded=\"false\" aria-controls=\"body-abi\">\r\n        <h6 class=\"mb-0 py-2\">\r\n          <i class=\"icon-embed2\"></i> Result ( <strong>A</strong>pplication <strong>B</strong>inary <strong>I</strong>nterface )</h6>\r\n      </div>\r\n      <div id=\"body-abi\" class=\"collapse\" aria-labelledby=\"header-abi\" data-parent=\"#deploy-wizard\">\r\n        <div class=\"card-body\">\r\n         <p class=\"\">\r\n           <span style=\"font-weight: 600\">\r\n              Contract ID:\r\n           </span>{{address}}\r\n        </p>\r\n          <div>\r\n            <textarea id=\"field-copy\" class=\"form-control form-control-lg\">{{deployresults[0]?.abi | json}}</textarea>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- ./#deploy-wizard -->\r\n</div>\r\n<!-- ./.container -->\r\n"

/***/ }),

/***/ "./src/app/deploy/deploycontract/deploycontract.component.scss":
/***/ (function(module, exports) {

module.exports = ".deploy-loader {\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top: 150px; }\n\n.deploy-loader .modal-content {\n  width: 150px;\n  height: 80px; }\n\n.deploy-loader .modal-body img {\n  width: 50px; }\n"

/***/ }),

/***/ "./src/app/deploy/deploycontract/deploycontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeploycontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_manageuser_manageuser_service__ = __webpack_require__("./src/app/account/manageuser/manageuser.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeploycontractComponent = /** @class */ (function () {
    function DeploycontractComponent(manageuserService) {
        this.manageuserService = manageuserService;
        this.defaultAccount = [];
        this.deploy = {};
        this.compileShow = false;
        this.deployShow = false;
        this.deployresults = {};
        this.showModal = false;
        //Ugly hack to get going
        this.sol = { "file": "pragma solidity 0.4.21;\r\n\r\n\r\ncontract Applicant {\r\n\r\n    struct  ApplicantAddress {\r\n        string  street1;\r\n        string  street2;\r\n        string  city;\r\n        string  zip;\r\n        string  state;\r\n        string  country;\r\n    }\r\n\r\n    struct Application {\r\n        string lenderName;\r\n        address lenderAddress;\r\n        bool active;\r\n        uint appliedDate;\r\n    }\r\n\r\n    string private applicantName;\r\n    string private applicantSex;\r\n    string  private applicantDOB;\r\n    ApplicantAddress private homeAdd;\r\n    int private ssn;\r\n    int private applicantIncome;\r\n    address private signedBy;\r\n    mapping (address => Application) public applicationDetails;\r\n    event ApplicationAcknowledged(address from);\r\n    event PersonalInfoRead(address from);\r\n    address[] public myApplications;\r\n\r\n    modifier lenderCallOnly() {\r\n        if (!applicationDetails[msg.sender].active) {\r\n            revert();\r\n        } else {\r\n            _;\r\n        }\r\n    }\r\n\r\n    function Applicant(string _applicantName,\r\n                        string _applicantSex,\r\n                        string _applicantDOB,\r\n                        string _street1,\r\n                        string _street2,\r\n                        string _city,\r\n                        string _zip,\r\n                        string _state,\r\n                        string _country,\r\n                        int _ssn,\r\n                        int _applicantIncome) public {\r\n\r\n        applicantName = _applicantName;\r\n        applicantSex = _applicantSex;\r\n        applicantDOB = _applicantDOB;\r\n        homeAdd = ApplicantAddress(_street1, _street2, _city, _zip, _state, _country);\r\n        ssn = _ssn;\r\n        applicantIncome = _applicantIncome;\r\n        signedBy = msg.sender;\r\n    }\r\n\r\n    function findBySSN(int _ssn) public view returns (bool) {\r\n        if (ssn == _ssn) {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    function ackApplication(string _name, address _lenderAddress) public {\r\n\r\n        applicationDetails[msg.sender] = Application(_name, _lenderAddress, true, now);\r\n        ApplicationAcknowledged(msg.sender);\r\n        myApplications.push(msg.sender);\r\n    }\r\n\r\n       \/\/add modified lenderCallOnly to restrict access ONLY to lender\r\n    function getApplicantDetails() public view  returns(string, string, string, int, int, address) {\r\n        return (applicantName, applicantSex, applicantDOB, ssn, applicantIncome, signedBy);\r\n    }\r\n\r\n       \/\/add modified lenderCallOnly to restrict access ONLY to lender\r\n    function getApplicantAddress() public  view  returns(string, string, string, string, string, string) {\r\n        return(homeAdd.street1, homeAdd.street2, homeAdd.city, homeAdd.zip, homeAdd.state, homeAdd.country);\r\n    }\r\n}\r\n\r\n\r\ncontract LoanProgram {\r\n\r\n    event ApplicationCreated(address contractAddress);\r\n    string public name;\r\n\r\n    function LoanProgram(string _name) public {\r\n\r\n        name = \"Add-On Demo Loan Program\";\r\n    }\r\n\r\n    function apply(address _applicant, string _loanType, int _loanAmount, int _loanPeriodInYears) public {\r\n\r\n        address newContract = new Loan(name, _applicant, _loanType, _loanAmount, _loanPeriodInYears);\r\n        ApplicationCreated(newContract);\r\n    }\r\n}\r\n\r\n\r\ncontract Loan {\r\n\r\n    address public applicantContractAddress;\r\n    string public loanType;\r\n    int public loanAmount;\r\n    address public loanProgramAddress = msg.sender;\r\n    bool public received;\r\n    bool public goodCredit;\r\n    bool public approved;\r\n    event UpdatingCreditStatusFor(int ssn);\r\n    event DisclosuresUpdated(int estimatedIntrestRate, int estimatedEMI);\r\n    event LoanAmountTxfed(uint amount);\r\n    int private ssn;\r\n    int private applicantIncome;\r\n    address private signedBy;\r\n    int public estimatedIntrestRate;\r\n    int public estimatedEMI;\r\n    int public loanPeriodInYears;\r\n\r\n    function Loan(string _name, address _applicantContract, string _type, int _amount, int _periodInYears) public {\r\n        Applicant applicant =  Applicant(_applicantContract);\r\n        applicant.ackApplication(_name, loanProgramAddress);\r\n        (, , , ssn, applicantIncome, signedBy) = applicant.getApplicantDetails();\r\n        applicantContractAddress = _applicantContract;\r\n        loanType = _type;\r\n        loanAmount = _amount;\r\n        received = true;\r\n        loanPeriodInYears = _periodInYears;\r\n    }\r\n\r\n    function updateCreditStatus(bool _creditStatus) public {\r\n        UpdatingCreditStatusFor(ssn);\r\n        goodCredit = _creditStatus;\r\n    }\r\n\r\n    function addDisclosure(int _estimatedIntrestRate, int _estimatedEMI) public {\r\n        estimatedIntrestRate = _estimatedIntrestRate;\r\n        estimatedEMI = _estimatedEMI;\r\n        DisclosuresUpdated(_estimatedIntrestRate, _estimatedEMI);\r\n\r\n    }\r\n\r\n    function approveLoan() public payable {\r\n        if (goodCredit) {\r\n            signedBy.transfer(msg.value);\r\n            approved = true;\r\n            LoanAmountTxfed(msg.value);\r\n        } else {\r\n            revert();\r\n        }\r\n    }\r\n}\r\n" };
        this.contractsList = [];
        this.showSMTextarea = 0;
    }
    //get account details
    // getAccountInfo() {
    //   this.accounts = this.manageuserService.getAccountInfo();
    // }
    DeploycontractComponent.prototype.getAccountInfo = function () {
        var _this = this;
        this.manageuserService.getAccountDetails().subscribe(function (rest) {
            try {
                _this.accounts = JSON.parse(rest[0][1]);
                _this.parseError = false;
            }
            catch (ex) {
                _this.parseError = true;
            }
        });
    };
    //compile contract
    DeploycontractComponent.prototype.getContractsFromText = function () {
        this.contractsList = [];
        var file = this.sol.file;
        this.showModal = true;
        this.compileContract(file);
    };
    DeploycontractComponent.prototype.getContractsFromFile = function (e) {
        var _this = this;
        this.file = e.target.files[0];
        var fileReader = new FileReader();
        this.contractsList = [];
        this.showModal = true;
        this.showSMTextarea = 0;
        fileReader.onload = function (e) {
            _this.sol.file = fileReader.result;
            _this.showModal = false;
            //this.compileContract(this.sol.file);
            _this.showSMTextarea = 1;
        };
        fileReader.readAsText(this.file);
    };
    DeploycontractComponent.prototype.compileContract = function (file) {
        var _this = this;
        this.manageuserService.compileContractService(this.sol.file).subscribe(function (data) {
            _this.compileResults = data;
            console.log('compileResults length', _this.compileResults.contracts);
            for (var key in _this.compileResults.contracts) {
                var contractKey = {
                    "key": key
                };
                _this.contractsList.push(contractKey);
            }
            if (_this.contractsList.length > 0) {
                _this.compileShow = true;
                _this.showModal = false;
                _this.hideFlashMessage("this.compileShow");
            }
            else {
                _this.compileFail = true;
                _this.error = _this.compileResults.errors[0];
                _this.showModal = false;
                _this.hideFlashMessage("this.compileFail");
            }
        }, function (err) {
            console.error("test", err);
            _this.compileFail = true;
            _this.error = err;
            _this.hideFlashMessage("this.compileFail");
        }, function () { return console.log('loading compileContractInfo is done'); });
    };
    //deploy contract
    DeploycontractComponent.prototype.deployContract = function () {
        this.error = "";
        this.showModal = true;
        try {
            this.deployresults = this.manageuserService.deployContractService(this.deploy, this.compileResults);
            this.deployFail = false;
            this.showModal = false;
            this.deployShow = true;
            this.hideFlashMessage("this.deployShow");
        }
        catch (e) {
            this.deployFail = true;
            this.error = e;
            this.showModal = false;
            console.log("error", e);
            this.hideFlashMessage("this.deployFail");
        }
    };
    DeploycontractComponent.prototype.listenEvents = function () {
        var _this = this;
        this.manageuserService.contractInfoEmitter.subscribe(function (data) {
            _this.address = _this.deployresults[0].address;
        });
    };
    DeploycontractComponent.prototype.getUserBalance = function (accountId) {
        return this.manageuserService.getUserBalance(accountId);
    };
    DeploycontractComponent.prototype.hideFlashMessage = function (data) {
        setTimeout(function () {
            if (data == "this.compileShow") {
                this.compileShow = false;
            }
            else if (data == "this.deployShow") {
                this.deployShow = false;
            }
            else if (data == "this.deployFail") {
                this.deployFail = false;
            }
            else if (data == "this.compileFail") {
                this.compileFail = false;
            }
        }.bind(this), 6000);
    };
    DeploycontractComponent.prototype.ngOnInit = function () {
        this.getAccountInfo();
        // tslint:disable-next-line:no-unused-expression
        this.sol;
        this.listenEvents();
    };
    DeploycontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-deploycontract',
            template: __webpack_require__("./src/app/deploy/deploycontract/deploycontract.component.html"),
            styles: [__webpack_require__("./src/app/deploy/deploycontract/deploycontract.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__account_manageuser_manageuser_service__["a" /* ManageuserService */]])
    ], DeploycontractComponent);
    return DeploycontractComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, args) {
        if (!args) {
            return items;
        }
        else {
            return items
                .filter(function (item) {
                return item.number;
            });
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/object-iterate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectIteratePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ObjectIteratePipe = /** @class */ (function () {
    function ObjectIteratePipe() {
    }
    ObjectIteratePipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value); //.map(key => value[key]);
    };
    ObjectIteratePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'ObjectIterate'
        })
    ], ObjectIteratePipe);
    return ObjectIteratePipe;
}());



/***/ }),

/***/ "./src/app/scheduling/scheduling.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mt-3\">\n    <img src=\"assets/img/Schedule.png\" alt=\"\" class=\"d-block mx-auto\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/scheduling/scheduling.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scheduling/scheduling.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SchedulingComponent = /** @class */ (function () {
    function SchedulingComponent() {
    }
    SchedulingComponent.prototype.ngOnInit = function () {
    };
    SchedulingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-scheduling',
            template: __webpack_require__("./src/app/scheduling/scheduling.component.html"),
            styles: [__webpack_require__("./src/app/scheduling/scheduling.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SchedulingComponent);
    return SchedulingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map