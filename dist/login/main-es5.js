var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/friends-list/friends-list.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friends-list/friends-list.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile\">\n    \n    {{user.name}}\n    <div *ngIf=\"isFriend; then unfriendButton; else friendButton\">\n        button renders here\n    </div>\n  </div>\n  \n  <ng-template #friendButton>\n    <button class=\"btn btn-purple btn-info btn-md m-1\" (click)=\"toggleFriend()\">Add Friend</button>\n  </ng-template>\n  \n  <ng-template #unfriendButton>\n    <button class=\"btn btn-purple btn-info btn-md m-1\" (click)=\"toggleFriend()\">Unfriend</button>\n  </ng-template>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"auth.user$ | async as user\">\n\n    <div class=\"col-md-10 mx-auto\">\n\n        <div class=\"card-header text-center border-yellow\">\n            <h4>Friends</h4>\n\n        </div>\n\n        <div id=\"friends-main\" class=\"card mx-auto ml-4 mr-4 border-yellow text-center p-4\">\n            <div class=\"card-body\">\n                <h3>Here are your friends, {{ user.name }} </h3>\n                <div class=\"\" id=\"friends-info\">\n                    <br>\n                    <p>UID: {{ user.uid }}</p>\n                </div>\n                <app-user-friend-list></app-user-friend-list>\n                <!-- <br>\n                <div id=\"add-friends\">\n\n                    <h3>Add Friends</h3>\n                    <div class=\"search\">\n                        <form action=\"\">\n                            <input type=\"text\" placeholder=\"Search..\" name=\"search\">\n                            <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n                        </form>\n                    </div>\n\n                    <ul>\n                        <li *ngFor=\"let user of users | async\">\n                            <b> {{ user.name }} </b> is {{ user.uid }} <button *ngIf=\"this.notAdded\"\n                                (click)=\"addFriend(user.uid)\" class=\"btn btn-purple btn-info btn-md m-1\"> Add</button>\n                            <button *ngIf=\"this.remove\" (click)=\"removeFriend(user.uid)\"\n                                class=\"btn btn-purple btn-info btn-md m-1\"> Remove</button>\n\n                        </li>\n                    </ul>\n                </div> -->\n                <div *ngFor=\"let user of users | async\">\n                    <app-friends-list [(user)]= \"user\" [(currentUser)]= \"currentUser\"> </app-friends-list>\n                  </div>\n\n\n            </div>\n\n        </div>\n    </div>\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"auth.user$ | async; then authenticated else guest\"></div>\n\n    <ng-template #guest>\n        <div class=\"col-md-10 mx-auto\">\n            <div class=\"card mx-auto ml-4 mr-4 border-yellow text-center p-5\">\n                <h3>Welcome to Study App</h3>\n                <h5 class=\"mb-5 mt-4\">Login to get started...</h5>\n                <div class=\"justify-content\">\n                    <button class=\"btn btn-info btn-purple btn-lg\" (click)=\"auth.googleSignin()\">\n                        Login with Google\n                    </button>\n                </div>\n            </div>\n        </div>\n    </ng-template>\n\n    <ng-template #authenticated>\n        </ng-template>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/meetings/meetings.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/meetings/meetings.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"auth.user$ | async as user\">\n\n    <div class=\"col-md-10 mx-auto\">\n\n        <div class=\"card-header text-center border-yellow\">\n            <h4>Meetings</h4>\n\n        </div>\n\n        <div id=\"friends-main\" class=\"card mx-auto ml-4 mr-4 border-yellow text-center p-4\">\n            <div class=\"card-body\">\n                <h3>Here are your meetings, {{ user.name }} </h3>\n\n                <!-- <ul>\n                        <li *ngFor=\"let meeting of meetings?.meetings\">\n                          Name: {{ meeting?.meetingName }} <br>\n                          Notes: {{ meeting?.notes }}<br>\n                          Location: {{ meeting?.location }}<br>\n                          Date: {{ meeting?.date }} <br>\n                          Friends: {{ meeting?.friends }}<br>\n                          \n                        </li>\n                      </ul> -->\n                <app-user-meeting-list></app-user-meeting-list>\n\n                <div class=\"\" id=\"friends-info\">\n                    <button *ngIf=\"!flag\" class=\"btn btn-purple btn-info btn-md m-1\" (click)=\"newMeeting()\"\n                        type=\"submit\">New Meeting</button>\n\n                    <div *ngIf=\"flag\" class=\"row\">\n                        <div class=\"col-md-4\"></div>\n                        <div class=\"col-md-5\">\n                            <form [formGroup]=\"meetingForm\" (ngSubmit)=\"onSubmit()\">\n\n                                <label>\n                                    Name:\n                                    <input type=\"text\" formControlName=\"meetingName\">\n                                </label>\n\n                                <label>\n                                    Notes:\n                                    <input type=\"text\" formControlName=\"notes\">\n                                </label>\n                                <label>\n                                    Location:\n                                    <input type=\"text\" formControlName=\"location\">\n                                </label>\n                                <label>\n                                    Friends:\n                                    <!-- <input type=\"text\" formControlName=\"friends\"> -->\n                                    <select class=\"custom-select\" formControlName=\"friends\">\n                                        <option value=\"\" disabled>Choose your friend</option>\n                                        <option *ngFor=\"let friend of friends?.friendsList\" [value]=\"friend?.name\">\n                                            {{ friend?.name }}</option>\n                                    </select>\n                                </label>\n\n                                <label>\n                                    Date:\n                                    <input type=\"text\" formControlName=\"date\">\n                                </label>\n                                <br>\n                                <div style=\"text-align: left\">\n                                    <button class=\"btn btn-purple btn-info btn-md m-1\" type=\"submit\">Add\n                                        Meeting</button>\n                                </div>\n                            </form>\n                        </div>\n\n                    </div>\n\n\n\n\n\n                </div>\n\n            </div>\n            <div class=\"accordion\" id=\"accordionExample\">\n                <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingOne\">\n                    <h5 class=\"mb-0\">\n                      <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                        Collapsible Group Item #1\n                      </button>\n                    </h5>\n                  </div>\n              \n                  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n                    <div class=\"card-body\">\n                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingTwo\">\n                    <h5 class=\"mb-0\">\n                      <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                        Collapsible Group Item #2\n                      </button>\n                    </h5>\n                  </div>\n                  <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n                    <div class=\"card-body\">\n                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingThree\">\n                    <h5 class=\"mb-0\">\n                      <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                        Collapsible Group Item #3\n                      </button>\n                    </h5>\n                  </div>\n                  <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n                    <div class=\"card-body\">\n                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n        </div>\n    </div>\n\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-pink fixed-top border-bottom-yellow\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand text-purple\" (click)=\"auth.scheduleRedirect()\">\n        Study App\n      </a>\n      <button *ngIf=\"user\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleNavbar()\">\n        <span *ngIf=\"user\" class=\"navbar-toggler-icon\"></span>\n      </button>\n      \n      <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\" [ngClass]=\"{ 'show': navOpen }\">\n        <ul class=\"navbar-nav ml-auto\">\n          <li *ngIf=\"!auth.user$ | async\" class=\"nav-item\">\n            <a class=\"nav-link text-purple text-right\" (click)=\"auth.homeRedirect(); toggleNavbar();\">Login</a>\n          </li>\n          <li *ngIf=\"auth.user$ | async\" class=\"nav-item\">\n              <a class=\"nav-link text-purple text-right\" (click)=\"auth.scheduleRedirect(); toggleNavbar();\">My Schedule</a>\n            </li> \n          <li *ngIf=\"auth.user$ | async\" class=\"nav-item\">\n            <a class=\"nav-link text-purple text-right\" (click)=\"auth.meetingsRedirect(); toggleNavbar();\">Meetings</a>\n          </li> \n          <li *ngIf=\"auth.user$ | async\" class=\"nav-item\">\n            <a class=\"nav-link text-purple text-right\" (click)=\"auth.friendsRedirect(); toggleNavbar();\">Friends</a>\n          </li> \n          <li *ngIf=\"auth.user$ | async\" class=\"nav-item\">\n            <a class=\"nav-link text-purple text-right\" (click)=\"auth.accountRedirect(); collapse() ;toggleNavbar();\">Account</a>\n          </li>\n          <li *ngIf=\"auth.user$ | async\">\n            <button class=\"btn btn-purple btn-info btn-sm m-1 float-right\" (click)=\"auth.signOut(); toggleNavbar();\">Logout</button>\n          </li>\n          \n        </ul>\n      </div>\n    </div>\n  </nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 mx-auto\">\n\n            <div *ngIf=\"auth.user$ | async as user\" class=\"card-header text-center border-yellow\">\n                <h4>{{ user.name }}'s Schedule</h4>\n\n            </div>\n\n            <div id=\"card-body\" *ngIf=\"isCollapsed\" class=\"card mx-auto ml-4 mr-4 border-yellow p-5\">\n\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <div id=\"schedule\" class=\"d-flex justify-content-left\">\n                            <ejs-schedule width='100%' height='550px'> </ejs-schedule>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n\n                        <div id=\"friends-list\" class=\"card\" style=\"width: 18rem; height: 200px\">\n                            <div class=\"card-header\">Friends</div>\n                            <div class=\"card-body scroll\">\n                                <app-user-friend-list></app-user-friend-list>\n                            </div>\n\n                        </div>\n                        <!-- FIX THIS -->\n                        <br>\n                        <br>\n                        <br>\n\n\n                        <div id=\"meetings-list\" class=\"card\" style=\"width: 18rem;height: 280px;\">\n\n                            <div class=\"card-header\">Meetings</div>\n                            <div class=\"card-body scroll\">\n                                <app-user-meeting-list></app-user-meeting-list>\n                            </div>\n\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-friend-list/user-friend-list.component.html": 
        /*!********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-friend-list/user-friend-list.component.html ***!
          \********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ul>\n        <li *ngFor=\"let friend of friends?.friendsList\">\n          {{ friend?.name }} <br>\n          <br>\n          \n        </li>\n      </ul>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-meeting-list/user-meeting-list.component.html": 
        /*!**********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-meeting-list/user-meeting-list.component.html ***!
          \**********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ul>\n    <li *ngFor=\"let meeting of meetings?.meetings\">\n      Name: {{ meeting?.meetingName }} <br>\n      Notes: {{ meeting?.notes }}<br>\n      Location: {{ meeting?.location }}<br>\n      Date: {{ meeting?.date }} <br>\n      Friends: {{ meeting?.friends }}<br>\n      <br>\n    </li>\n    <br>\n  </ul>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"auth.user$ | async; then authenticated else guest\"></div>\n\n<!-- logged out -->\n<!-- <ng-template #guest>\n    <div class=\"col-md-10 mx-auto\">\n        <div class=\"card mx-auto ml-4 mr-4 border-yellow text-center p-5\">\n            <h3>Welcome to Study App</h3>\n            <h5 class=\"mb-5 mt-4\">Login to get started...</h5>\n            <div class=\"justify-content\">\n                <button class=\"btn btn-info btn-purple btn-lg\" (click)=\"auth.googleSignin()\">\n                    Login with Google\n                </button>\n            </div>\n        </div>\n    </div>\n    \n</ng-template> -->\n\n\n<!-- logged in -->\n\n<div *ngIf=\"auth.user$ | async as user\">\n\n    <div class=\"col-md-10 mx-auto\">\n\n        <div class=\"card-header text-center border-yellow\">\n            <h4>Account Information</h4>\n\n        </div>\n\n        <div id=\"account-info\" *ngIf=\"isCollapsed\" class=\"card mx-auto ml-4 mr-4 border-yellow text-center p-5\">\n\n            <h3>Welcome, {{ user.name }} </h3>\n\n            <img class=\"user-img-smaller rounded-circle card-img-top mx-auto mt-4\" [src]=\"user.photoURL\">\n            <div class=\"\" id=\"account-info\">\n                <br>\n\n\n                <p>UID: {{ user.uid }}</p>\n                <p>email: {{ user.email }}</p>\n                <p>school: {{ user.school }} </p>\n                <input value=\"{{ user.uid }}\"  >\n                <!-- <i (click)=\"edit($event, user)\" class=\"fa fa-pencil\"></i> -->\n                <form>\n                    Change School: \n                    <input [(ngModel)]=\"cSchool\" name=\"school\"><br>\n                    <button class=\"btn btn-purple btn-info btn-md m-1\"\n                        (click)=\"updateVal()\">Change School to KSTATE</button>\n                </form>\n\n                <!-- <div *ngIf=\"editUser\">\n\n                    <form (ngSubmit)=\"updateUser(user)\">\n                        <div class=\"row\">\n                            <div class=\"input-field col s6\">\n                                <input type=\"text\" [(ngModel)=\"user.school\" ] name=\"school\">\n                            </div>\n                            <input type=\"submit\" value=\"save\" class=\"btn\">\n                        </div>\n                    </form>\n                </div> -->\n\n                <button class=\"btn btn-purple btn-info btn-md m-1\">Change School</button>\n                <button class=\"btn btn-purple btn-info btn-md m-1\" (click)=\"auth.signOut()\">Logout</button>\n                <br>\n            </div>\n        </div>\n    </div>\n    <!-- schedule -->\n\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
            /* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
            /* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/friends/friends.component.ts");
            /* harmony import */ var _meetings_meetings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./meetings/meetings.component */ "./src/app/meetings/meetings.component.ts");
            /* harmony import */ var _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./friends-list/friends-list.component */ "./src/app/friends-list/friends-list.component.ts");
            var routes = [{ path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
                { path: 'login', redirectTo: '', pathMatch: 'full' },
                { path: 'schedule', component: _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'account', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_3__["UserProfileComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'friends', component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_7__["FriendsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'friendsList', component: _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_9__["FriendsListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
                { path: 'meetings', component: _meetings_meetings_component__WEBPACK_IMPORTED_MODULE_8__["MeetingsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'login';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_2__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_2__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_2__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_2__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_2__["AgendaService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
            /* harmony import */ var _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./schedule/schedule.component */ "./src/app/schedule/schedule.component.ts");
            /* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
            /* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _meetings_meetings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./meetings/meetings.component */ "./src/app/meetings/meetings.component.ts");
            /* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/friends/friends.component.ts");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./friends-list/friends-list.component */ "./src/app/friends-list/friends-list.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _meetings_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./meetings.service */ "./src/app/meetings.service.ts");
            /* harmony import */ var _user_friend_list_user_friend_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user-friend-list/user-friend-list.component */ "./src/app/user-friend-list/user-friend-list.component.ts");
            /* harmony import */ var _user_meeting_list_user_meeting_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user-meeting-list/user-meeting-list.component */ "./src/app/user-meeting-list/user-meeting-list.component.ts");
            var config = {
                apiKey: 'AIzaSyCDBbEVUQ33nE_aUE8oNtIuhTLxob5KWmE',
                authDomain: 'test-studyapp-1.firebaseapp.com',
                databaseURL: 'https://test-studyapp-1.firebaseio.com',
                projectId: 'test-studyapp-1',
                storageBucket: 'test-studyapp-1.appspot.com',
                messagingSenderId: '977554826482',
                appId: '1:977554826482:web:540530aba25fa5da475c6b',
                measurementId: 'G-CPE1ZEEKFY'
            };
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
                        _schedule_schedule_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleComponent"],
                        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                        _meetings_meetings_component__WEBPACK_IMPORTED_MODULE_13__["MeetingsComponent"],
                        _friends_friends_component__WEBPACK_IMPORTED_MODULE_14__["FriendsComponent"],
                        _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_17__["FriendsListComponent"],
                        _user_friend_list_user_friend_list_component__WEBPACK_IMPORTED_MODULE_21__["UserFriendListComponent"],
                        _user_meeting_list_user_meeting_list_component__WEBPACK_IMPORTED_MODULE_22__["UserMeetingListComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(config),
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"],
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                        _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_11__["ScheduleModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"]
                    ],
                    exports: [
                        _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"]
                    ],
                    providers: [_angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabase"], _meetings_service__WEBPACK_IMPORTED_MODULE_20__["MeetingsService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/auth.guard.ts": 
        /*!*******************************!*\
          !*** ./src/app/auth.guard.ts ***!
          \*******************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(auth, router) {
                    this.auth = auth;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    var _this = this;
                    return this.auth.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) { return !!user; }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
                        if (!loggedIn) {
                            console.log('access denied');
                            _this.router.navigate(['/login']);
                        }
                    })));
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/auth.service.ts": 
        /*!*********************************!*\
          !*** ./src/app/auth.service.ts ***!
          \*********************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
            var AuthService = /** @class */ (function () {
                function AuthService(afAuth, afs, router, ngzone) {
                    var _this = this;
                    this.afAuth = afAuth;
                    this.afs = afs;
                    this.router = router;
                    this.ngzone = ngzone;
                    this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (user) {
                        if (user) {
                            return _this.afs.doc("users/" + user.uid).valueChanges();
                        }
                        else {
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
                        }
                    }));
                }
                AuthService.prototype.googleSignin = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var provider, credential;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    provider = new firebase__WEBPACK_IMPORTED_MODULE_7__["auth"].GoogleAuthProvider();
                                    return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                                case 1:
                                    credential = _a.sent();
                                    return [2 /*return*/, this.updateUserDataGoogle(credential.user).then(function () { _this.ngzone.run(function () { return _this.scheduleRedirect(); }); })];
                            }
                        });
                    });
                };
                AuthService.prototype.updateUserDataGoogle = function (user) {
                    var userRef = this.afs.doc("users/" + user.uid);
                    this.cUid = user.uid;
                    var data = {
                        uid: user.uid,
                        name: user.displayName,
                        email: user.email,
                        photoURL: user.photoURL,
                    };
                    return userRef.set(data, { merge: true });
                };
                AuthService.prototype.signOut = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.afAuth.auth.signOut()];
                                case 1:
                                    _a.sent();
                                    this.router.navigate(['/']);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                AuthService.prototype.homeRedirect = function () {
                    this.router.navigate(['/']);
                };
                AuthService.prototype.meetingsRedirect = function () {
                    this.router.navigate(['/meetings']);
                };
                AuthService.prototype.friendsRedirect = function () {
                    this.router.navigate(['/friends']);
                };
                AuthService.prototype.accountRedirect = function () {
                    this.router.navigate(['/account']);
                };
                AuthService.prototype.scheduleRedirect = function () {
                    this.router.navigate(['/schedule']);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/friends-list/friends-list.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/friends-list/friends-list.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMtbGlzdC9mcmllbmRzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/friends-list/friends-list.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/friends-list/friends-list.component.ts ***!
          \********************************************************/
        /*! exports provided: FriendsListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsListComponent", function () { return FriendsListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../friends.service */ "./src/app/friends.service.ts");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
            var FriendsListComponent = /** @class */ (function () {
                function FriendsListComponent(friendServ) {
                    this.friendServ = friendServ;
                    this.isFriend = false;
                }
                FriendsListComponent.prototype.ngOnInit = function () {
                    var userId = this.user.uid;
                    var currentUserId = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
                    // const test = this.friendServ.areFriends('KDd0VmgQNcMZeC8HI8th0AR7xx12', 'r6mWeas5MMRwlEvu7RBpdwHqm633');
                    // console.log(test);
                    // checks if the currently logged in user is following this.user
                    // this.friendsOfMe = this.friendServ.areFriends(currentUserId, userId).valueChanges()
                    //   .subscribe((friendOfMe: any) => {
                    //     this.isFriend = friendOfMe.$value;
                    //   });
                };
                FriendsListComponent.prototype.countFriends = function (friends) {
                    if (friends.$value === null) {
                        return 0;
                    }
                    else {
                        return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["size"])(friends);
                    }
                };
                FriendsListComponent.prototype.toggleFriend = function () {
                    // current friend id and name
                    var userId = this.user.uid;
                    var name = this.user.name;
                    // this.isFriend = this.friendServ.areFriends(userId);
                    // if you are already friends, remove, else add
                    // TO DO: FIX isFriend method
                    if (this.isFriend) {
                        this.friendServ.removeFriend(userId, name);
                        this.isFriend = false;
                    }
                    else {
                        this.friendServ.addFriend(userId, name);
                        this.isFriend = true;
                    }
                    console.log('toggle friend ' + this.isFriend);
                };
                // tslint:disable-next-line: use-lifecycle-interface
                FriendsListComponent.prototype.ngOnDestroy = function () {
                    if (this.friends) {
                        this.friends.unsubscribe();
                    }
                    if (this.friendsOfMe) {
                        this.friendsOfMe.unsubscribe();
                    }
                };
                return FriendsListComponent;
            }());
            FriendsListComponent.ctorParameters = function () { return [
                { type: _friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FriendsListComponent.prototype, "user", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], FriendsListComponent.prototype, "currentUser", void 0);
            FriendsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-friends-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friends-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/friends-list/friends-list.component.html")).default,
                    providers: [_friends_service__WEBPACK_IMPORTED_MODULE_2__["FriendsService"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friends-list.component.css */ "./src/app/friends-list/friends-list.component.css")).default]
                })
            ], FriendsListComponent);
            /***/ 
        }),
        /***/ "./src/app/friends.service.ts": 
        /*!************************************!*\
          !*** ./src/app/friends.service.ts ***!
          \************************************/
        /*! exports provided: FriendsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsService", function () { return FriendsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var FriendsService = /** @class */ (function () {
                function FriendsService(db, afAuth, afs) {
                    this.db = db;
                    this.afAuth = afAuth;
                    this.afs = afs;
                    this.friends$ = null;
                    this.friend1 = {
                        displayName: 'Joey'
                    };
                    // this.afAuth.authState.subscribe(user => {
                    //   if (user) {
                    //     this.userId = user.uid;
                    //   }
                    // });
                    this.friendFlag = false;
                    this.id = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
                    this.name = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.displayName;
                    this.notAdded = true;
                    this.usersCollection = this.afs.collection('users/');
                    this.friendsDocument = this.afs.doc("friends/" + this.id);
                    // this.user = this.usersCollection.snapshotChanges().map(actions => {
                    //   return actions.map(a => {
                    //     const data = a.payload.doc.data() as User;
                    //     const id = a.payload.doc.id;
                    //     return { id, ...data };
                    //   });;
                    this.users = this.usersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
                        var data = a.payload.doc.data();
                        var id = a.payload.doc.id;
                        return Object.assign({ id: id }, data);
                    }); }));
                }
                FriendsService.prototype.getTotalFriends = function (userId) {
                    // Used to build the follower count
                    return this.db.object("friends/" + userId);
                };
                FriendsService.prototype.areFriends = function (followerId) {
                    var _this = this;
                    // Used to see if UserFoo if following UserBar
                    this.friendsDocument = this.afs.doc("friends/" + this.id);
                    console.log('user friend list' + this.friendsDocument);
                    var getDoc = this.friendsDocument.get()
                        .toPromise().then(function (doc) {
                        var e_1, _a;
                        if (!doc.exists) {
                            console.log('No such document!');
                        }
                        else {
                            _this.test = doc.data();
                            console.log('Document datad:', _this.test.friendsList);
                            try {
                                for (var _b = __values(_this.test.friendsList), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var friend = _c.value;
                                    if (followerId.localeCompare(friend.id)) {
                                        _this.friendFlag = true;
                                    }
                                    else {
                                        _this.friendFlag = false;
                                        console.log('who: ' + friend.id + ' flag: ' + _this.friendFlag + ' with: ' + followerId);
                                        return _this.friendFlag;
                                    }
                                    console.log('friend: ' + friend.id + ' flag: ' + _this.friendFlag + ' compare: ' + followerId);
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                    })
                        .catch(function (err) {
                        console.log('Error getting document', err);
                    });
                    console.log('final flag: ' + this.friendFlag);
                    return this.friendFlag;
                };
                FriendsService.prototype.addFriend = function (friendToAdd, dispName) {
                    console.log(this.id + 'huh');
                    // this.afs.doc(`friends/KDd0VmgQNcMZeC8HI8th0AR7xx12/`).update({['x15LHCKzENdDqnyR5aTobgpOBAl2']: true, name: 'tanner'});
                    this.notAdded = false;
                    this.remove = true;
                    this.friendsDocument.update({ friendsList: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({ id: friendToAdd, name: dispName }) });
                    // adds your id to 'friends' friend list
                    this.yourFriendsDocument = this.afs.doc("friends/" + friendToAdd);
                    this.yourFriendsDocument.update({ friendsList: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion({ id: this.id, name: this.name }) });
                    console.log(friendToAdd);
                };
                FriendsService.prototype.removeFriend = function (friendToRemove, dispName) {
                    this.notAdded = true;
                    this.remove = false;
                    this.friendsDocument.update({ friendsList: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayRemove({ id: friendToRemove, name: dispName }) });
                    // removes you from their friendslist
                    this.yourFriendsDocument = this.afs.doc("friends/" + friendToRemove);
                    this.yourFriendsDocument.update({ friendsList: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayRemove({ id: this.id, name: this.name }) });
                    console.log(friendToRemove + 'removed');
                };
                return FriendsService;
            }());
            FriendsService.ctorParameters = function () { return [
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
            ]; };
            FriendsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FriendsService);
            /***/ 
        }),
        /***/ "./src/app/friends/friends.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/friends/friends.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/friends/friends.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/friends/friends.component.ts ***!
          \**********************************************/
        /*! exports provided: FriendsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function () { return FriendsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @syncfusion/ej2-schedule */ "./node_modules/@syncfusion/ej2-schedule/dist/es6/ej2-schedule.es2015.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _friends_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../friends.service */ "./src/app/friends.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
            /* harmony import */ var _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../friends-list/friends-list.component */ "./src/app/friends-list/friends-list.component.ts");
            /* harmony import */ var _user_friend_list_user_friend_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-friend-list/user-friend-list.component */ "./src/app/user-friend-list/user-friend-list.component.ts");
            _syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__["Schedule"].Inject(_syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__["Day"], _syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__["Week"], _syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__["WorkWeek"], _syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__["Month"], _syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__["Agenda"], _syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__["Resize"], _syncfusion_ej2_schedule__WEBPACK_IMPORTED_MODULE_2__["DragAndDrop"]);
            var FriendsComponent = /** @class */ (function () {
                function FriendsComponent(auth, f, afs) {
                    this.auth = auth;
                    this.f = f;
                    this.afs = afs;
                    this.id = firebase__WEBPACK_IMPORTED_MODULE_7__["auth"]().currentUser.uid;
                    this.notAdded = true;
                    this.usersCollection = this.afs.collection('users/');
                    this.friendsDocument = this.afs.doc("friends/" + this.id);
                    // this.user = this.usersCollection.snapshotChanges().map(actions => {
                    //   return actions.map(a => {
                    //     const data = a.payload.doc.data() as User;
                    //     const id = a.payload.doc.id;
                    //     return { id, ...data };
                    //   });;
                    // const getDoc = this.friendsDocument.get()
                    // .toPromise().then(doc => {
                    //   if (!doc.exists) {
                    //     console.log('No such document!');
                    //   } else {
                    //     this.friends = doc.data();
                    //     console.log('Document data:', this.friends);
                    //   }
                    // })
                    // .catch(err => {
                    //   console.log('Error getting document', err);
                    // });
                    this.users = this.usersCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
                        var data = a.payload.doc.data();
                        var id = a.payload.doc.id;
                        return Object.assign({ id: id }, data);
                    }); }));
                }
                FriendsComponent.prototype.addFriend = function (friendToAdd) {
                    var _a, _b;
                    console.log(this.id + 'this is me');
                    this.notAdded = false;
                    this.remove = true;
                    this.friendsDocument.update({ friendsList: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion((_a = {}, _a[friendToAdd] = true, _a)) });
                    // adds your id to 'friends' friend list
                    this.yourFriendsDocument = this.afs.doc("friends/" + friendToAdd);
                    this.yourFriendsDocument.update({ friendsList: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayUnion((_b = {}, _b[this.id] = true, _b)) });
                    console.log(friendToAdd + 'this is you');
                };
                FriendsComponent.prototype.removeFriend = function (friendToRemove) {
                    var _a, _b;
                    this.notAdded = true;
                    this.remove = false;
                    this.friendsDocument.update({ friendsList: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayRemove((_a = {}, _a[friendToRemove] = true, _a)) });
                    // removes you from their friendslist
                    this.yourFriendsDocument = this.afs.doc("friends/" + friendToRemove);
                    this.yourFriendsDocument.update({ friendsList: firebase__WEBPACK_IMPORTED_MODULE_7__["firestore"].FieldValue.arrayRemove((_b = {}, _b[this.id] = true, _b)) });
                    console.log(friendToRemove + 'meremoved');
                };
                FriendsComponent.prototype.ngOnInit = function () {
                    // this.afs.collection('users/').valueChanges()
                    // .subscribe(val => console.log(val));
                    // this.auth.user$.subscribe(user => {
                    //   this.user = user;
                    //   this.events = this.afs.collection(`schedule/${user.uid}/events`).valueChanges();
                    //   this.events.subscribe(events => {
                    //     console.log(events);
                    //     // let data = <Object[]>extend([], (dataSource as any).zooEventsData, null, true);
                    //     const scheduleObj = new Schedule({
                    //       width: '100%',
                    //       height: '650px',
                    //       selectedDate: new Date(2019, 10, 31),
                    //       eventSettings: { dataSource: events },
                    //       eventRendered: (args: EventRenderedArgs) => {
                    //         const categoryColor: string = args.data.CategoryColor as string;
                    //         if (!args.element || !categoryColor) {
                    //           return;
                    //         }
                    //         if (scheduleObj.currentView === 'Agenda') {
                    //           (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
                    //         } else {
                    //           args.element.style.backgroundColor = categoryColor;
                    //         }
                    //       },
                    //       dataBinding: (e: { [key: string]: any }) => {
                    //         const items: { [key: string]: object }[] = (e.result as { [key: string]: object }).items as { [key: string]: object }[];
                    //         const scheduleData: object[] = [];
                    //         if (items.length > 0) {
                    //             // tslint:disable-next-line: prefer-for-of
                    //             for (let i = 0; i < items.length; i++) {
                    //                 const event: { [key: string]: object } = items[i];
                    //                 let when: string = (event.start as { [key: string]: string }).dateTime as string;
                    //                 let start: string = (event.start as { [key: string]: string }).dateTime as string;
                    //                 let end: string = (event.end as { [key: string]: string }).dateTime as string;
                    //                 if (!when) {
                    //                     when = (event.start as { [key: string]: string }).date as string;
                    //                     start = (event.start as { [key: string]: string }).date as string;
                    //                     end = (event.end as { [key: string]: string }).date as string;
                    //                 }
                    //                 scheduleData.push({
                    //                     Id: event.id,
                    //                     Subject: event.summary,
                    //                     StartTime: new Date(start),
                    //                     EndTime: new Date(end),
                    //                     IsAllDay: !(event.start as { [key: string]: string }).dateTime
                    //                 });
                    //             }
                    //         }
                    //       },
                    //     });
                    //     scheduleObj.appendTo('#Schedule');
                    //    });
                    // });
                };
                return FriendsComponent;
            }());
            FriendsComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _friends_service__WEBPACK_IMPORTED_MODULE_5__["FriendsService"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
            ]; };
            FriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-friends',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friends.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.component.html")).default,
                    providers: [_friends_service__WEBPACK_IMPORTED_MODULE_5__["FriendsService"], _friends_list_friends_list_component__WEBPACK_IMPORTED_MODULE_8__["FriendsListComponent"], _user_friend_list_user_friend_list_component__WEBPACK_IMPORTED_MODULE_9__["UserFriendListComponent"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friends.component.css */ "./src/app/friends/friends.component.css")).default]
                })
            ], FriendsComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(auth) {
                    this.auth = auth;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.auth.scheduleRedirect();
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/meetings.service.ts": 
        /*!*************************************!*\
          !*** ./src/app/meetings.service.ts ***!
          \*************************************/
        /*! exports provided: MeetingsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsService", function () { return MeetingsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var MeetingsService = /** @class */ (function () {
                function MeetingsService(afs, auth) {
                    this.afs = afs;
                    this.auth = auth;
                    this.collectionPath = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
                    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        meetingName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        friends: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        time: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
                    });
                    this.meetingCollection = this.afs.collection('meetings/');
                }
                MeetingsService.prototype.addItem = function (meeting) {
                    this.meetingCollection.add(meeting);
                };
                return MeetingsService;
            }());
            MeetingsService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            MeetingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MeetingsService);
            /***/ 
        }),
        /***/ "./src/app/meetings/meetings.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/meetings/meetings.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("label { float: left; width: 10em; margin-right: 1em; }\n.card-header .fa {\n    transition: .3s transform ease-in-out;\n  }\n.card-header .collapsed .fa {\n    transform: rotate(90deg);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVldGluZ3MvbWVldGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLFdBQVcsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUU7QUFDckQ7SUFDSSxxQ0FBcUM7RUFDdkM7QUFDQTtJQUNFLHdCQUF3QjtFQUMxQiIsImZpbGUiOiJzcmMvYXBwL21lZXRpbmdzL21lZXRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7IGZsb2F0OiBsZWZ0OyB3aWR0aDogMTBlbTsgbWFyZ2luLXJpZ2h0OiAxZW07IH1cbi5jYXJkLWhlYWRlciAuZmEge1xuICAgIHRyYW5zaXRpb246IC4zcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLmNhcmQtaGVhZGVyIC5jb2xsYXBzZWQgLmZhIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/meetings/meetings.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/meetings/meetings.component.ts ***!
          \************************************************/
        /*! exports provided: MeetingsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingsComponent", function () { return MeetingsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _meetings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../meetings.service */ "./src/app/meetings.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _user_meeting_list_user_meeting_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-meeting-list/user-meeting-list.component */ "./src/app/user-meeting-list/user-meeting-list.component.ts");
            var MeetingsComponent = /** @class */ (function () {
                function MeetingsComponent(auth, afs, mting) {
                    var _this = this;
                    this.auth = auth;
                    this.afs = afs;
                    this.mting = mting;
                    // initialize form group
                    this.meetingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        meetingName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        friends: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
                    });
                    this.id = firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid;
                    this.flag = false;
                    this.meetingCollection = afs.collection('meetings');
                    this.friendsDocument = this.afs.doc("friends/" + this.id);
                    console.log('user friend list' + this.friendsDocument);
                    // Binding FriendsList to selector
                    var getDoc2 = this.friendsDocument.get()
                        .toPromise().then(function (doc) {
                        if (!doc.exists) {
                            console.log('No such document!');
                        }
                        else {
                            _this.friends = doc.data();
                            console.log('Document data:', _this.friends);
                        }
                    })
                        .catch(function (err) {
                        console.log('Error getting document', err);
                    });
                    var friendsRef = this.afs.collection("friends/").doc(this.id);
                    this.friends = friendsRef.valueChanges()
                        .subscribe(function (d) {
                        _this.friends = d;
                    });
                    // // show list of meetings
                    // const meetingRef = afs.collection(`meetings/`).doc(this.id);
                    // const getDoc = meetingRef.get()
                    //   .toPromise().then(doc => {
                    //     if (!doc.exists) {
                    //       console.log('No such document!');
                    //     } else {
                    //       this.meetings = doc.data();
                    //       console.log('Document data:', this.meetings);
                    //     }
                    //   })
                    //   .catch(err => {
                    //     console.log('Error getting document', err);
                    //   });
                }
                MeetingsComponent.prototype.ngOnInit = function () {
                };
                // New meeting opens form
                MeetingsComponent.prototype.newMeeting = function () {
                    this.flag = true;
                    console.log(this.flag);
                };
                // add meeting
                MeetingsComponent.prototype.onSubmit = function () {
                    // creates meeting object from form
                    var meetingMeet = {
                        meetingName: this.meetingForm.get('meetingName').value,
                        notes: this.meetingForm.get('notes').value,
                        location: this.meetingForm.get('location').value,
                        friends: this.meetingForm.get('friends').value,
                        date: this.meetingForm.get('date').value
                    };
                    console.warn(this.meetingForm);
                    // adds meetings to database
                    this.afs.doc('meetings/' + this.id).update({ meetings: firebase__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.arrayUnion(meetingMeet) });
                    // updates meetings list
                    // const meetingRef = this.afs.collection(`meetings/`).doc(this.id);
                    // this.meetings = meetingRef.valueChanges()
                    //   .subscribe(d => {
                    //     this.meetings = d;
                    //   });
                    this.flag = false;
                    this.meetingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
                        meetingName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        location: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        friends: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
                        date: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
                    });
                };
                return MeetingsComponent;
            }());
            MeetingsComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
                { type: _meetings_service__WEBPACK_IMPORTED_MODULE_4__["MeetingsService"] }
            ]; };
            MeetingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-meetings',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./meetings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/meetings/meetings.component.html")).default,
                    providers: [_user_meeting_list_user_meeting_list_component__WEBPACK_IMPORTED_MODULE_7__["UserMeetingListComponent"]],
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./meetings.component.css */ "./src/app/meetings/meetings.component.css")).default]
                })
            ], MeetingsComponent);
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/navbar/navbar.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navbar/navbar.component.ts ***!
          \********************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(auth) {
                    var _this = this;
                    this.auth = auth;
                    this.navOpen = false;
                    this.isUserCollapsed = true;
                    this.auth.user$.subscribe(function (user) { return _this.user = user; });
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                NavbarComponent.prototype.toggleNavbar = function () {
                    this.navOpen = !this.navOpen;
                    console.log(this.navOpen);
                };
                NavbarComponent.prototype.collapse = function () {
                    this.isUserCollapsed = !this.isUserCollapsed;
                    // document.getElementById('account-info').style.display = this.isUserCollapsed ? '' : 'none';
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('collapseExample', { static: false })
            ], NavbarComponent.prototype, "el", void 0);
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/schedule/schedule.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/schedule/schedule.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".scroll {\n    max-height: 300px;\n    overflow-y: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zY2hlZHVsZS9zY2hlZHVsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbCB7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/schedule/schedule.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/schedule/schedule.component.ts ***!
          \************************************************/
        /*! exports provided: ScheduleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function () { return ScheduleComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            var ScheduleComponent = /** @class */ (function () {
                function ScheduleComponent(auth) {
                    this.auth = auth;
                    this.isCollapsed = true;
                }
                ScheduleComponent.prototype.ngOnInit = function () {
                };
                ScheduleComponent.prototype.collapse = function () {
                    this.isCollapsed = !this.isCollapsed;
                };
                return ScheduleComponent;
            }());
            ScheduleComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            ScheduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-schedule',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./schedule.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/schedule/schedule.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./schedule.component.css */ "./src/app/schedule/schedule.component.css")).default]
                })
            ], ScheduleComponent);
            /***/ 
        }),
        /***/ "./src/app/user-friend-list/user-friend-list.component.css": 
        /*!*****************************************************************!*\
          !*** ./src/app/user-friend-list/user-friend-list.component.css ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItZnJpZW5kLWxpc3QvdXNlci1mcmllbmQtbGlzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/user-friend-list/user-friend-list.component.ts": 
        /*!****************************************************************!*\
          !*** ./src/app/user-friend-list/user-friend-list.component.ts ***!
          \****************************************************************/
        /*! exports provided: UserFriendListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFriendListComponent", function () { return UserFriendListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
            var UserFriendListComponent = /** @class */ (function () {
                function UserFriendListComponent(auth, afs) {
                    var _this = this;
                    this.auth = auth;
                    this.afs = afs;
                    this.id = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
                    this.friendsDocument = this.afs.doc("friends/" + this.id);
                    console.log('user friend list' + this.friendsDocument);
                    var getDoc = this.friendsDocument.get()
                        .toPromise().then(function (doc) {
                        if (!doc.exists) {
                            console.log('No such document!');
                        }
                        else {
                            _this.friends = doc.data();
                            console.log('Document data:', _this.friends);
                        }
                    })
                        .catch(function (err) {
                        console.log('Error getting document', err);
                    });
                    var friendsRef = this.afs.collection("friends/").doc(this.id);
                    this.friends = friendsRef.valueChanges()
                        .subscribe(function (d) {
                        _this.friends = d;
                    });
                }
                UserFriendListComponent.prototype.ngOnInit = function () {
                };
                return UserFriendListComponent;
            }());
            UserFriendListComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
            ]; };
            UserFriendListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-friend-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-friend-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-friend-list/user-friend-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-friend-list.component.css */ "./src/app/user-friend-list/user-friend-list.component.css")).default]
                })
            ], UserFriendListComponent);
            /***/ 
        }),
        /***/ "./src/app/user-meeting-list/user-meeting-list.component.css": 
        /*!*******************************************************************!*\
          !*** ./src/app/user-meeting-list/user-meeting-list.component.css ***!
          \*******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbWVldGluZy1saXN0L3VzZXItbWVldGluZy1saXN0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/user-meeting-list/user-meeting-list.component.ts": 
        /*!******************************************************************!*\
          !*** ./src/app/user-meeting-list/user-meeting-list.component.ts ***!
          \******************************************************************/
        /*! exports provided: UserMeetingListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMeetingListComponent", function () { return UserMeetingListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
            /* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
            var UserMeetingListComponent = /** @class */ (function () {
                function UserMeetingListComponent(auth, afs) {
                    var _this = this;
                    this.auth = auth;
                    this.afs = afs;
                    this.id = firebase__WEBPACK_IMPORTED_MODULE_4__["auth"]().currentUser.uid;
                    this.meetingRef = afs.collection("meetings/").doc(this.id);
                    var getDoc = this.meetingRef.get()
                        .toPromise().then(function (doc) {
                        if (!doc.exists) {
                            console.log('No such document!');
                        }
                        else {
                            _this.meetings = doc.data();
                            console.log('Document data:', _this.meetings);
                        }
                    })
                        .catch(function (err) {
                        console.log('Error getting document', err);
                    });
                    this.meetingRef = this.afs.collection("meetings/").doc(this.id);
                    this.meetings = this.meetingRef.valueChanges()
                        .subscribe(function (d) {
                        _this.meetings = d;
                    });
                }
                UserMeetingListComponent.prototype.ngOnInit = function () {
                };
                return UserMeetingListComponent;
            }());
            UserMeetingListComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
            ]; };
            UserMeetingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-meeting-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-meeting-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-meeting-list/user-meeting-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-meeting-list.component.css */ "./src/app/user-meeting-list/user-meeting-list.component.css")).default]
                })
            ], UserMeetingListComponent);
            /***/ 
        }),
        /***/ "./src/app/user-profile/user-profile.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/user-profile/user-profile.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".user-img-smaller {\n    width: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXItaW1nLXNtYWxsZXIge1xuICAgIHdpZHRoOiAxMCU7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/user-profile/user-profile.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/user-profile/user-profile.component.ts ***!
          \********************************************************/
        /*! exports provided: UserProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () { return UserProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var UserProfileComponent = /** @class */ (function () {
                function UserProfileComponent(auth, afs) {
                    this.auth = auth;
                    this.afs = afs;
                    this.id = this.auth.cUid;
                    this.isCollapsed = true;
                }
                UserProfileComponent.prototype.ngOnInit = function () {
                    this.user2 = this.afs.doc("users/" + this.id);
                };
                UserProfileComponent.prototype.updateVal = function () {
                    // console.log(this.id + 'huh');
                    this.user2.update({
                        school: this.cSchool
                    });
                };
                UserProfileComponent.prototype.collapse = function () {
                    this.isCollapsed = !this.isCollapsed;
                };
                return UserProfileComponent;
            }());
            UserProfileComponent.ctorParameters = function () { return [
                { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
            ]; };
            UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-user-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")).default]
                })
            ], UserProfileComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/joeymedina/Desktop/StudyApp/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map