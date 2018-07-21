(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Directives/dropdown.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/Directives/dropdown.directive.ts ***!
  \**************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/Models/book.model.ts":
/*!**************************************!*\
  !*** ./src/app/Models/book.model.ts ***!
  \**************************************/
/*! exports provided: book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "book", function() { return book; });
var book = /** @class */ (function () {
    function book(isbn, title, subtitle, author, published, publisher, pages, description, image, genre, quantity) {
        this.isbn = isbn;
        this.title = title;
        this.subtitle = subtitle;
        this.author = author;
        this.published = published;
        this.publisher = publisher;
        this.pages = pages;
        this.description = description;
        this.image = image;
        this.genre = genre;
        this.quantity = quantity;
    }
    return book;
}());



/***/ }),

/***/ "./src/app/Pipes/filterbook.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/Pipes/filterbook.pipe.ts ***!
  \******************************************/
/*! exports provided: FilterbookPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterbookPipe", function() { return FilterbookPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterbookPipe = /** @class */ (function () {
    function FilterbookPipe() {
    }
    FilterbookPipe.prototype.transform = function (value, filterString) {
        var resultArray = [];
        //filter logic
        console.log("filterresult--", filterString);
        if (filterString == undefined || filterString === '') {
            return value;
        }
        else {
            for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                var item = value_1[_i];
                //string logic
                //test.indexOf('World') >= 0
                var title = item.title;
                console.log("searching for title", title);
                if (title.indexOf(filterString) >= 0) {
                    resultArray.push(item);
                }
            }
        }
        return resultArray;
    };
    FilterbookPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterbook'
        })
    ], FilterbookPipe);
    return FilterbookPipe;
}());



/***/ }),

/***/ "./src/app/Services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.LoginvalidateRegister = function (user) {
        if (user.email == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/backend-auth.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Services/backend-auth.service.ts ***!
  \**************************************************/
/*! exports provided: BackendAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendAuthService", function() { return BackendAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs/add/operator/map';

var BackendAuthService = /** @class */ (function () {
    function BackendAuthService(http) {
        this.http = http;
    }
    BackendAuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BackendAuthService.prototype.authenticateUsers = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BackendAuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToekn();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BackendAuthService.prototype.loadToekn = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    BackendAuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    BackendAuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    BackendAuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    BackendAuthService.prototype.getUserData = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/users/allusers', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    BackendAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], BackendAuthService);
    return BackendAuthService;
}());



/***/ }),

/***/ "./src/app/Services/boodata.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/boodata.service.ts ***!
  \*********************************************/
/*! exports provided: bookList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookList", function() { return bookList; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var bookList = /** @class */ (function () {
    function bookList(http, router) {
        this.http = http;
        this.router = router;
    }
    bookList.prototype.getBookData = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('http://localhost:3000/books/booklist', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    bookList.prototype.deleteBook = function (id) {
        console.log(id);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/deleteBook', id, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    bookList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], bookList);
    return bookList;
}());



/***/ }),

/***/ "./src/app/admin-header/admin-header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-header/admin-header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\" (click)=\"toggleCollapse()\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n         <a class=\"navbar-brand\" ><img src=\"../../assets/icon.png\" alt=\"Icon\" width=\"60\" height=\"30\"></a>\n         <a class=\"navbar-brand\" [routerLink]=\"['/admin']\">Any Time Library(ADMIN VIEW) </a>\n         <a class=\"navbar-brand\" [routerLink]=\"['/admin']\"> </a>\n         <a class=\"navbar-brand btn btn-warning\" [routerLink]=\"['/admin']\"> HOME </a>\n        </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\" [class.collapse]=\"collapse\">\n        \n        <ul class=\"nav navbar-nav navbar-right\">\n           <li class=\"nav-item\"> <a (click)=\"onLogout()\">\n            <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n          </a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/admin-header/admin-header.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin-header/admin-header.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-custom {\n  color: #FFFFFF;\n  background-color: #CC3333; }\n\n.navbar-default {\n  background-color: #e74c3c;\n  border-color: #d49088; }\n\n.navbar-default .navbar-brand {\n    color: #ecf0f1; }\n\n.navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #ffbbbc; }\n\n.navbar-default .navbar-text {\n    color: #ecf0f1; }\n\n.navbar-default .navbar-nav > li > a {\n    color: #ecf0f1; }\n\n.navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #ffbbbc; }\n\n.navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #ffbbbc;\n    background-color: #d49088; }\n\n.navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    color: #ffbbbc;\n    background-color: #d49088; }\n\n.navbar-default .navbar-toggle {\n    border-color: #d49088; }\n\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #d49088; }\n\n.navbar-default .navbar-toggle .icon-bar {\n      background-color: #ecf0f1; }\n\n.navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #ecf0f1; }\n\n.navbar-default .navbar-link {\n    color: #ecf0f1; }\n\n.navbar-default .navbar-link:hover {\n      color: #ffbbbc; }\n\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #ecf0f1; }\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n      color: #ffbbbc; }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #ffbbbc;\n    background-color: #d49088; } }\n"

/***/ }),

/***/ "./src/app/admin-header/admin-header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin-header/admin-header.component.ts ***!
  \********************************************************/
/*! exports provided: AdminHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHeaderComponent", function() { return AdminHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminHeaderComponent = /** @class */ (function () {
    function AdminHeaderComponent(router, flashMessage, authservice) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authservice = authservice;
        this.collapse = true;
    }
    AdminHeaderComponent.prototype.toggleCollapse = function () {
        this.collapse = !this.collapse;
    };
    AdminHeaderComponent.prototype.ngOnInit = function () {
    };
    AdminHeaderComponent.prototype.onLogout = function () {
        this.authservice.logout();
        this.flashMessage.show("Logout Successful", { cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['signin']);
    };
    AdminHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-header',
            template: __webpack_require__(/*! ./admin-header.component.html */ "./src/app/admin-header/admin-header.component.html"),
            styles: [__webpack_require__(/*! ./admin-header.component.scss */ "./src/app/admin-header/admin-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__["BackendAuthService"]])
    ], AdminHeaderComponent);
    return AdminHeaderComponent;
}());



/***/ }),

/***/ "./src/app/admin/add-book/add-book.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/add-book/add-book.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<div class=\"container\">\n    <h2>Add New Book</h2>\n    <p>Fill all the details</p>\n    <form class=\"form-inline\" (ngSubmit)=\"onAddBook(f)\" #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"isbn\">ISBN :</label>\n            <input type=\"text\" class=\"form-control\" id=\"isbn\" [(ngModel)]=\"isbn\" name=\"isbn\" placeholder=\"ISBN\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"title\">Title :</label>\n            <input type=\"text\" class=\"form-control\" id=\"title\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"title\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"subtitle\">Subtitle :</label>\n            <input type=\"text\" class=\"form-control\" id=\"subtitle\" [(ngModel)]=\"subtitle\" name=\"subtitle\" placeholder=\"subtitle\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"author\">Author :</label>\n            <input type=\"text\" class=\"form-control\" id=\"author\" [(ngModel)]=\"author\" name=\"author\" placeholder=\"author\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"published\">Published :</label>\n            <input type=\"text\" class=\"form-control\" id=\"published\" [(ngModel)]=\"published\" name=\"published\" placeholder=\"published\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"publisher\">Publisher :</label>\n            <input type=\"text\" class=\"form-control\" id=\"publisher\" [(ngModel)]=\"publisher\" name=\"publisher\" placeholder=\"publisher\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"pages\">Pages :</label>\n            <input type=\"text\" class=\"form-control\" id=\"pages\" [(ngModel)]=\"pages\" name=\"pages\" placeholder=\"pages\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"description\">Description :</label>\n            <input type=\"text\" class=\"form-control input-lg\" id=\"description\" [(ngModel)]=\"description\" name=\"description\" placeholder=\"description\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"genre\">Genre :</label>\n            <input type=\"text\" class=\"form-control\" id=\"genre\" [(ngModel)]=\"genre\" name=\"genre\" placeholder=\"genre\" required=\"required\">\n      </div><br><br>\n      <div class=\"form-group\">\n      <label for=\"image\">Image URL :</label>\n            <input type=\"text\" class=\"form-control\" id=\"image\" [(ngModel)]=\"image\" name=\"image\" placeholder=\"image\">\n      </div><br><br>\n\n\n      <button type=\"submit\" class=\"btn btn-info\">Submit</button>\n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/add-book/add-book.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/add-book/add-book.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/add-book/add-book.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/add-book/add-book.component.ts ***!
  \******************************************************/
/*! exports provided: AddBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(router, validate, flashMessage) {
        this.router = router;
        this.validate = validate;
        this.flashMessage = flashMessage;
    }
    AddBookComponent.prototype.ngOnInit = function () {
    };
    AddBookComponent.prototype.onAddBook = function (form) {
        var book = {
            isbn: form.value.isbn,
            title: form.value.title,
            subtitle: form.value.subtitle,
            author: form.value.author,
            published: form.value.published,
            publisher: form.value.publisher,
            pages: form.value.pages,
            description: form.value.description,
            image: form.value.image,
            genre: form.value.genre,
            quantity: "5"
        };
        console.log("new book to add", book);
        this.flashMessage.show(" New book added ", { cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['admin']);
        //API TO add BOOK PENDING
    };
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/admin/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.scss */ "./src/app/admin/add-book/add-book.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], AddBookComponent);
    return AddBookComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<br>\n<div class=\"col-lg-4\">\n<div class=\"card\" style=\"width: 20rem;\">\n    <img class=\"card-img-top\" src=\"../../assets/userlist.jpg\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\"><b>User-List</b></h5>\n      <p class=\"card-text\">Select to see user List</p>\n      <a class=\"btn btn-primary btn-lg\" [routerLink]=\"['/admin','userList']\">Go to User-List</a>\n    </div>\n  </div></div>\n \n    <div class=\"col-lg-4\">\n    <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top\" src=\"../../assets/book_blue_delete.png\" alt=\"Card image cap\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\"><b>Delete Book</b></h5>\n          <p class=\"card-text\">Select to delete old book</p>\n          <a href=\"#\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/admin','deletebook']\">Go to delete book</a>\n        </div>\n      </div></div>\n\n      <div class=\"col-lg-4\">\n          <div class=\"card\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\"../../assets/book_blue_add.png\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\"><b>Add Book</b></h5>\n                <p class=\"card-text\">Select to add new book</p>\n                <a href=\"#\" class=\"btn btn-primary btn-lg\" [routerLink]=\"['/admin','addBook']\">Go to add book</a>\n              </div>\n            </div></div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, authservice) {
        this.router = router;
        this.authservice = authservice;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__["BackendAuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/delete-book/delete-book.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/delete-book/delete-book.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<div class=\"container\">\n    <h2>Book-List</h2>            \n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>ISBN</th>\n          <th>Title</th>\n          <th>Author</th>\n          <th>Genre</th>\n        </tr>\n      </thead>\n\n      <tbody *ngFor=\"let book of booksList\">\n        <tr>\n          <td>{{book.isbn}}</td>\n          <td>{{book.title}}</td>\n          <td>{{book.author}}</td>\n          <td>{{book.genre}}</td>\n          <button class=\"btn btn-danger\" (click)=\"onDelClick(book)\">Delete</button>\n        </tr>\n       </tbody>\n    </table>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/delete-book/delete-book.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/delete-book/delete-book.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/delete-book/delete-book.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/delete-book/delete-book.component.ts ***!
  \************************************************************/
/*! exports provided: DeleteBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBookComponent", function() { return DeleteBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_boodata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/boodata.service */ "./src/app/Services/boodata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteBookComponent = /** @class */ (function () {
    function DeleteBookComponent(bookdata, router, flashMessage) {
        var _this = this;
        this.bookdata = bookdata;
        this.router = router;
        this.flashMessage = flashMessage;
        bookdata.getBookData().subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.booksList = data.msg;
            }
            else {
                _this.router.navigate(['not-found']);
            }
        });
    }
    DeleteBookComponent.prototype.onDelClick = function (title) {
        console.log(title.isbn);
        this.flashMessage.show(" Book " + title.isbn + " --- " + title.title + " has been deleted", { cssClass: 'alert-danger', timeout: 4000
        });
        var id = {
            "id": title._id
        };
        this.bookdata.deleteBook(id).subscribe(function (data) {
            if (data.success) {
                console.log("success");
            }
            else {
                console.log("fail");
            }
        });
    };
    DeleteBookComponent.prototype.ngOnInit = function () {
    };
    DeleteBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-book',
            template: __webpack_require__(/*! ./delete-book.component.html */ "./src/app/admin/delete-book/delete-book.component.html"),
            styles: [__webpack_require__(/*! ./delete-book.component.scss */ "./src/app/admin/delete-book/delete-book.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_boodata_service__WEBPACK_IMPORTED_MODULE_1__["bookList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], DeleteBookComponent);
    return DeleteBookComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-header></app-admin-header>\n<div class=\"container\">\n    <h2>User List</h2>            \n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Role</th>\n        </tr>\n      </thead>\n\n      <tbody *ngFor=\"let user of UsersList\">\n        <tr>\n          <td>{{user.name}}</td>\n          <td>{{user.email}}</td>\n          <td>{{user.role}}</td>\n        </tr>\n       </tbody>\n    </table>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserListComponent = /** @class */ (function () {
    function UserListComponent(authservice, router) {
        var _this = this;
        this.authservice = authservice;
        this.router = router;
        authservice.getUserData().subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.UsersList = data.msg;
            }
            else {
                _this.router.navigate(['not-found']);
            }
        });
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/admin/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/user-list/user-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__["BackendAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _user_history_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/history/history.component */ "./src/app/user/history/history.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/add-book/add-book.component */ "./src/app/admin/add-book/add-book.component.ts");
/* harmony import */ var _admin_delete_book_delete_book_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/delete-book/delete-book.component */ "./src/app/admin/delete-book/delete-book.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _user_return_renew_return_renew_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/return-renew/return-renew.component */ "./src/app/user/return-renew/return-renew.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: "", redirectTo: "signin", pathMatch: 'full' },
    { path: "", component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: "user", component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/profile", component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/history", component: _user_history_history_component__WEBPACK_IMPORTED_MODULE_5__["HistoryComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "user/returnRenew", component: _user_return_renew_return_renew_component__WEBPACK_IMPORTED_MODULE_11__["ReturnRenewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "admin/addBook", component: _admin_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_7__["AddBookComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "admin/deletebook", component: _admin_delete_book_delete_book_component__WEBPACK_IMPORTED_MODULE_8__["DeleteBookComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "admin/userList", component: _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_14__["UserListComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "signin", component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"] },
    { path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"] },
    { path: "not-found", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: "**", redirectTo: "not-found" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/add-book/add-book.component */ "./src/app/admin/add-book/add-book.component.ts");
/* harmony import */ var _admin_delete_book_delete_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/delete-book/delete-book.component */ "./src/app/admin/delete-book/delete-book.component.ts");
/* harmony import */ var _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _books_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./books/book-detail/book-detail.component */ "./src/app/books/book-detail/book-detail.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_history_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/history/history.component */ "./src/app/user/history/history.component.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _user_return_renew_return_renew_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./user/return-renew/return-renew.component */ "./src/app/user/return-renew/return-renew.component.ts");
/* harmony import */ var _Directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Directives/dropdown.directive */ "./src/app/Directives/dropdown.directive.ts");
/* harmony import */ var _drop_for_header_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./drop-for-header.directive */ "./src/app/drop-for-header.directive.ts");
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-header/admin-header.component */ "./src/app/admin-header/admin-header.component.ts");
/* harmony import */ var _Services_boodata_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Services/boodata.service */ "./src/app/Services/boodata.service.ts");
/* harmony import */ var _Pipes_filterbook_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Pipes/filterbook.pipe */ "./src/app/Pipes/filterbook.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_8__["SigninComponent"],
                _Directives_dropdown_directive__WEBPACK_IMPORTED_MODULE_23__["DropdownDirective"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _admin_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_11__["AddBookComponent"],
                _admin_delete_book_delete_book_component__WEBPACK_IMPORTED_MODULE_12__["DeleteBookComponent"],
                _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_14__["BooksComponent"],
                _books_book_detail_book_detail_component__WEBPACK_IMPORTED_MODULE_15__["BookDetailComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_18__["NotFoundComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                _user_history_history_component__WEBPACK_IMPORTED_MODULE_20__["HistoryComponent"],
                _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _user_return_renew_return_renew_component__WEBPACK_IMPORTED_MODULE_22__["ReturnRenewComponent"],
                _drop_for_header_directive__WEBPACK_IMPORTED_MODULE_24__["DropForHeaderDirective"],
                _admin_header_admin_header_component__WEBPACK_IMPORTED_MODULE_27__["AdminHeaderComponent"],
                _Pipes_filterbook_pipe__WEBPACK_IMPORTED_MODULE_29__["FilterbookPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesModule"].forRoot(),
            ],
            providers: [_Services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_25__["BackendAuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], _Services_boodata_service__WEBPACK_IMPORTED_MODULE_28__["bookList"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n  <div class=\"avatar\">\n    <img src=\"../../../assets/login.png\" alt=\"Avatar\">\n  </div>\n      <h2 class=\"text-center\">Member Login</h2>   \n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\" required=\"required\">\n      </div>\n  <div class=\"form-group\">\n          <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" required=\"required\">\n      </div>        \n      <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Sign in</button>\n      </div>\n  <div class=\"clearfix\">\n             <a [routerLink]=\"['/signup']\" class=\"pull-right\">Register(new user)</a>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  color: #fff;\n  background: #d47677; }\n\n.form-control {\n  min-height: 41px;\n  background: #fff;\n  box-shadow: none !important;\n  border-color: #e3e3e3; }\n\n.form-control:focus {\n  border-color: #70c5c0; }\n\n.form-control, .btn {\n  border-radius: 2px; }\n\n.login-form {\n  width: 350px;\n  margin: 0 auto;\n  padding: 100px 0 30px; }\n\n.login-form form {\n  color: #7a7a7a;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  font-size: 13px;\n  background: #ececec;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n  position: relative; }\n\n.login-form h2 {\n  font-size: 22px;\n  margin: 35px 0 25px; }\n\n.login-form .avatar {\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -50px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #70c5c0;\n  padding: 15px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); }\n\n.login-form .avatar img {\n  width: 100%; }\n\n.login-form input[type=\"checkbox\"] {\n  margin-top: 2px; }\n\n.login-form .btn {\n  font-size: 16px;\n  font-weight: bold;\n  background: #70c5c0;\n  border: none;\n  margin-bottom: 20px; }\n\n.login-form .btn:hover, .login-form .btn:focus {\n  background: #50b8b3;\n  outline: none !important; }\n\n.login-form a {\n  color: #fff;\n  text-decoration: underline; }\n\n.login-form a:hover {\n  text-decoration: none; }\n\n.login-form form a {\n  color: #7a7a7a;\n  text-decoration: none; }\n\n.login-form form a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(router, validate, flashMessage, authservice) {
        this.router = router;
        this.validate = validate;
        this.flashMessage = flashMessage;
        this.authservice = authservice;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        var user = {
            email: form.value.email,
            password: form.value.password
        };
        if (!this.validate.LoginvalidateRegister(user)) {
            this.flashMessage.show(" ------  PLEASE FILL IN ALL THE FIELDS", { cssClass: 'alert-danger', timeout: 4000
            });
            return false;
        }
        if (!this.validate.validateEmail(user.email)) {
            this.flashMessage.show(" ------  PLEASE ENTER A VALID EMAIL ID/USER NAME", { cssClass: 'alert-danger', timeout: 4000
            });
            return false;
        }
        //this.router.navigate(['user'])
        this.authservice.authenticateUsers(user).subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.authservice.storeUserData(data.token, data.user);
                _this.flashMessage.show(" Login SUCCESSFULLY", { cssClass: 'alert-success', timeout: 2000
                });
                if (data.user.role == 'admin') {
                    _this.router.navigate(['admin']);
                }
                else {
                    _this.router.navigate(['user']);
                }
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 4000
                });
                _this.router.navigate(['signin']);
            }
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/auth/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_4__["BackendAuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-form\">\n  <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\n  <div class=\"avatar\">\n    <img src=\"../../../assets/signUp.jpg\" alt=\"Avatar\">\n  </div>\n      <h2 class=\"text-center\">Registration</h2>   \n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" id=\"fullname\" [(ngModel)]=\"fullname\" name=\"fullname\" placeholder=\"Fullname\"  required=\"required\">\n      </div>\n  <div class=\"form-group\">\n          <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"email\"  required=\"required\">\n      </div>    \n      <div class=\"form-group\">\n        <input type=\"password\" class=\"form-control\" id=\"password\" [(ngModel)]=\"password\" name=\"password\" placeholder=\"Password\" required=\"required\">\n    </div>      \n      <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Register</button>\n      </div>\n  <div class=\"clearfix\">\n             <a [routerLink]=\"['/signin']\" class=\"pull-right\">Sign in</a>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.scss":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  color: #fff;\n  background: #d47677; }\n\n.form-control {\n  min-height: 41px;\n  background: #fff;\n  box-shadow: none !important;\n  border-color: #e3e3e3; }\n\n.form-control:focus {\n  border-color: #70c5c0; }\n\n.form-control, .btn {\n  border-radius: 2px; }\n\n.login-form {\n  width: 350px;\n  margin: 0 auto;\n  padding: 100px 0 30px; }\n\n.login-form form {\n  color: #7a7a7a;\n  border-radius: 2px;\n  margin-bottom: 15px;\n  font-size: 13px;\n  background: #ececec;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px;\n  position: relative; }\n\n.login-form h2 {\n  font-size: 22px;\n  margin: 35px 0 25px; }\n\n.login-form .avatar {\n  position: absolute;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  top: -50px;\n  width: 95px;\n  height: 95px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #70c5c0;\n  padding: 15px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); }\n\n.login-form .avatar img {\n  width: 100%; }\n\n.login-form input[type=\"checkbox\"] {\n  margin-top: 2px; }\n\n.login-form .btn {\n  font-size: 16px;\n  font-weight: bold;\n  background: #70c5c0;\n  border: none;\n  margin-bottom: 20px; }\n\n.login-form .btn:hover, .login-form .btn:focus {\n  background: #50b8b3;\n  outline: none !important; }\n\n.login-form a {\n  color: #fff;\n  text-decoration: underline; }\n\n.login-form a:hover {\n  text-decoration: none; }\n\n.login-form form a {\n  color: #7a7a7a;\n  text-decoration: none; }\n\n.login-form form a:hover {\n  text-decoration: underline; }\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/auth.service */ "./src/app/Services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, validate, flashMessage, authservice) {
        this.router = router;
        this.validate = validate;
        this.flashMessage = flashMessage;
        this.authservice = authservice;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var _this = this;
        var user = {
            name: form.value.fullname,
            email: form.value.email,
            password: form.value.password
        };
        var name = form.value.fullname;
        var email = form.value.email;
        var password = form.value.password;
        console.log(name, email, password);
        //required field
        if (!this.validate.validateRegister(user)) {
            this.flashMessage.show(" ------  PLEASE FILL IN ALL THE FIELDS", { cssClass: 'alert-danger', timeout: 4000
            });
            return false;
        }
        if (!this.validate.validateEmail(user.email)) {
            this.flashMessage.show(" ------  PLEASE ENTER A VALID EMAIL ID", { cssClass: 'alert-danger', timeout: 4000
            });
            return false;
        }
        //this.router.navigate(['user'])
        this.authservice.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show(" REGISTERED SUCCESSFULLY --- Now Please LOGIN with your new account", { cssClass: 'alert-success', timeout: 2000
                });
                _this.router.navigate(['signin']);
            }
            else {
                _this.flashMessage.show(" ------ SOMETHING WENT WRONG TRY AGAIN", { cssClass: 'alert-danger', timeout: 4000
                });
            }
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/auth/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_4__["BackendAuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/books/book-detail/book-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/books/book-detail/book-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4 col-sm-4\">\n        <img src={{bookData.image}} onerror=\"this.src='https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'\" alt=\"no image available\" height=\"360\" width=\"300\">\n    \n    </div>\n    <div class=\"col-lg-8 col-sm-8\">\n    <h3>Book Details</h3>\n    <br>\n    <p><b>Title:</b> {{bookData.title}} </p>\n    <p><b>ISBN:</b> {{bookData.isbn}}</p>\n    <p><b>Subtitle:</b> {{bookData.subtitle}}</p>\n    <p><b>Author:</b> {{bookData.author}}</p>\n    <p><b>Publisher:</b> {{bookData.publisher}}</p>\n    <p><b>Genre:</b> {{bookData.genre}}</p>\n    <p><b>Pages:</b> {{bookData.pages}}</p>\n    <p><b>Description:</b> {{bookData.description}}</p>\n    <br>\n    \n    </div>"

/***/ }),

/***/ "./src/app/books/book-detail/book-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/books/book-detail/book-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/books/book-detail/book-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/books/book-detail/book-detail.component.ts ***!
  \************************************************************/
/*! exports provided: BookDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailComponent", function() { return BookDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_book_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/book.model */ "./src/app/Models/book.model.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookDetailComponent = /** @class */ (function () {
    function BookDetailComponent(flashMessage, router) {
        this.flashMessage = flashMessage;
        this.router = router;
    }
    BookDetailComponent.prototype.ngOnInit = function () {
    };
    BookDetailComponent.prototype.onClickTake = function () {
        this.flashMessage.show(" Book " + this.bookData.title + " has been to your reading list", { cssClass: 'alert-success', timeout: 4000
        });
        this.show = !this.show;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _Models_book_model__WEBPACK_IMPORTED_MODULE_1__["book"])
    ], BookDetailComponent.prototype, "bookData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], BookDetailComponent.prototype, "show", void 0);
    BookDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__(/*! ./book-detail.component.html */ "./src/app/books/book-detail/book-detail.component.html"),
            styles: [__webpack_require__(/*! ./book-detail.component.scss */ "./src/app/books/book-detail/book-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header \n(searchItem)=\"onBookSearched($event)\"></app-header>\n<div *ngIf=\"show==false\">\n   <div class=\"container fluid\">\n    <div class=\"row\">\n    <div class=\"col-lg-12\">\n    <img id=\"lib\" src=\"../../assets/lIBRARY.jpg\" alt=\"All Library Books\" height=\"200\" width=\"100%\">\n<br>\n<hr>\n</div></div>\n<div class=\"col-lg-4 col-sm-6 col-xs-6\"\n*ngFor=\"let book of booksList | filterbook:searchedBook\"\n><a (click)=\"onClick(book)\">\n<img src={{book.image}} onerror=\"this.src='https://cidco-smartcity.niua.org/wp-content/uploads/2017/08/No-image-found.jpg'\" alt=\"no image available\" height=\"150\" width=\"120\">\n<br>\n{{ book.title }}</a>\n<br>\n<br>\n</div>\n</div></div>\n<div *ngIf=\"show==true\">\n        <br>\n    <button id=\"backButton\" class=\"btn btn-warning\" (click)=\"onClick()\">back to library</button>\n    <br>\n    <br>\n     <app-book-detail [bookData]=\"bookse\"></app-book-detail>\n     <button id=\"backButton1\" class=\"btn btn-primary\" (click)=\"onClickTake(bookse)\">Take this Book</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/books/books.component.scss":
/*!********************************************!*\
  !*** ./src/app/books/books.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#backButton {\n  position: absolute;\n  top: 12%;\n  left: 50%;\n  margin-left: -200px;\n  width: 400px; }\n\n#lib {\n  border: 1px solid #4CAF50; }\n\n#backButton1 {\n  left: 50%;\n  margin-left: 100px;\n  width: 400px; }\n"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_boodata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/boodata.service */ "./src/app/Services/boodata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksComponent = /** @class */ (function () {
    function BooksComponent(bookdata, router, flashMessage) {
        var _this = this;
        this.bookdata = bookdata;
        this.router = router;
        this.flashMessage = flashMessage;
        //@Output() bookSelected = new EventEmitter<book>();
        this.show = false;
        this.searchedBook = '';
        bookdata.getBookData().subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.booksList = data.msg;
            }
            else {
                _this.router.navigate(['not-found']);
            }
        });
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent.prototype.onBookSearched = function (booksearched) {
        console.log("this book name has come to book component -", booksearched);
        this.searchedBook = booksearched;
    };
    BooksComponent.prototype.onClick = function (selectedBook) {
        this.show = !this.show;
        this.bookse = selectedBook;
        console.log("boook \s out put", this.show);
    };
    BooksComponent.prototype.onClickTake = function (bookData) {
        this.flashMessage.show(" Book (" + bookData.title + ") has been to your reading list", { cssClass: 'alert-success', timeout: 4000
        });
        this.show = !this.show;
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.scss */ "./src/app/books/books.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_boodata_service__WEBPACK_IMPORTED_MODULE_1__["bookList"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/drop-for-header.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/drop-for-header.directive.ts ***!
  \**********************************************/
/*! exports provided: DropForHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropForHeaderDirective", function() { return DropForHeaderDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropForHeaderDirective = /** @class */ (function () {
    function DropForHeaderDirective() {
    }
    DropForHeaderDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropForHeader]'
        }),
        __metadata("design:paramtypes", [])
    ], DropForHeaderDirective);
    return DropForHeaderDirective;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            // console.log("is logged in")
            return true;
        }
        else {
            //console.log("is not logged in")
            this.router.navigate(['signin']);
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__["BackendAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\" (click)=\"toggleCollapse()\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>                        \n        </button>\n         <a class=\"navbar-brand\" ><img src=\"../../assets/icon.png\" alt=\"Icon\" width=\"60\" height=\"30\"></a>\n      </div>\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\" [class.collapse]=\"collapse\">\n        <ul class=\"nav navbar-nav\">\n         <li routerLinkActive=\"active\"\n            [routerLinkActiveOptions]=\"{exact: true}\"><a [routerLink]=\"['/user']\">Home</a></li>\n        <li routerLinkActive=\"active\"><a [routerLink]=\"['/home','Info']\">About Us</a></li>\n            <li><form class=\"navbar-form navbar-left\" action=\"\">\n        <div class=\"input-group\">\n         <!-- <input type=\"text\" class=\"form-control\" (input)=\"onSearch($event)\" placeholder=\"Search\"> -->\n         <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterBook\" name=\"filterBook\" placeholder=\"Search\">\n          <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" (click)=\"searchClick(filterBook)\" type=\"submit\">\n              <i class=\"glyphicon glyphicon-search\"></i>\n            </button>\n          </div>\n        </div>\n      </form></li>\n         </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n           <li routerLinkActive=\"active\"  class=\"nav-item dropdown\" appDropdown>\n          <a class=\"nav-link dropdown-toggle\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <b>USER</b>\n          </a>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n           <li> <a class=\"dropdown-item\" [routerLink]=\"['/user','profile']\">Profile</a></li>\n         <!--  <li> <a class=\"dropdown-item\" [routerLink]=\"['/user','returnRenew']\">Return/Renew</a></li>\n            <li><a class=\"dropdown-item\" [routerLink]=\"['/user','history']\">History</a></li> -->\n            <li><a class=\"dropdown-item\" [routerLink]=\"['/user']\">Home</a></li>\n          </ul>\n        </li>\n        <li class=\"nav-item\"> <a (click)=\"onLogout()\">\n            <span class=\"glyphicon glyphicon-log-out\"></span> Log out\n          </a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, flashMessage, authservice) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.authservice = authservice;
        this.searchItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.collapse = true;
    }
    HeaderComponent.prototype.toggleCollapse = function () {
        this.collapse = !this.collapse;
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authservice.logout();
        this.flashMessage.show("Logout Successful", { cssClass: 'alert-success', timeout: 4000
        });
        this.router.navigate(['signin']);
    };
    HeaderComponent.prototype.onSearch = function (event) {
        this.bookSearched = event.target.value;
        console.log(this.bookSearched);
    };
    HeaderComponent.prototype.searchClick = function (filterBook) {
        console.log("this was searched-", filterBook);
        this.bookSearched = filterBook;
        this.searchItem.emit(this.bookSearched);
        //this.router.navigate(['/user/profile']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "searchItem", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_2__["BackendAuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<h1 style=\"text-align: center\">404 Error - This Page is not available</h1> \n<h2 style=\"text-align: center\"> GO TO HOME</h2>\n<h3 style=\"text-align: center\">or</h3>\n<h2 style=\"text-align: center\">LogOut and Login again</h2>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/user/history/history.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/history/history.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<p>\n  history works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/history/history.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/history/history.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/history/history.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/history/history.component.ts ***!
  \***************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history',
            template: __webpack_require__(/*! ./history.component.html */ "./src/app/user/history/history.component.html"),
            styles: [__webpack_require__(/*! ./history.component.scss */ "./src/app/user/history/history.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "./src/app/user/profile/profile.component.html":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/profile.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div *ngIf=\"user\">\n  <h1 style=\"color:rgb(200, 255, 0); text-align: center\"><b><i>WELCOME</i></b></h1>\n<div style=\"color:rgb(47, 50, 255); text-align: center\">\n<h2 class=\"page-header\"><b>NAME: </b>{{ user.name }}</h2>\n<ul class=\"list-group list-group-flush\">\n  <li class=\"list-group-item\"><b>EMAIL: </b>{{ user.email }}</li>\n  <li class=\"list-group-item\"><b>ROLE: </b>{{ user.role }}</li>\n</ul>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/user/profile/profile.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/user/profile/profile.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/backend-auth.service */ "./src/app/Services/backend-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice, router) {
        this.authservice = authservice;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/user/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_Services_backend_auth_service__WEBPACK_IMPORTED_MODULE_1__["BackendAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/return-renew/return-renew.component.html":
/*!***************************************************************!*\
  !*** ./src/app/user/return-renew/return-renew.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<p>\n  return-renew works!\n</p>\n"

/***/ }),

/***/ "./src/app/user/return-renew/return-renew.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/user/return-renew/return-renew.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/return-renew/return-renew.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/return-renew/return-renew.component.ts ***!
  \*************************************************************/
/*! exports provided: ReturnRenewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnRenewComponent", function() { return ReturnRenewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReturnRenewComponent = /** @class */ (function () {
    function ReturnRenewComponent() {
    }
    ReturnRenewComponent.prototype.ngOnInit = function () {
    };
    ReturnRenewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-return-renew',
            template: __webpack_require__(/*! ./return-renew.component.html */ "./src/app/user/return-renew/return-renew.component.html"),
            styles: [__webpack_require__(/*! ./return-renew.component.scss */ "./src/app/user/return-renew/return-renew.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReturnRenewComponent);
    return ReturnRenewComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-books></app-books>\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Html Angular javascript\AngularProject-V03\angularAnyTimeLib\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map