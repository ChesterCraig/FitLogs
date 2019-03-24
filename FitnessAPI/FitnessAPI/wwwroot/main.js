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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'fit-logs';
    }
    AppComponent.prototype.ngOnInit = function () {
        // Trigger parsing of login token if we have one saved in local storage
        this.authService.parseLocalToken();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _entrylist_entrylist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entrylist/entrylist.component */ "./src/app/entrylist/entrylist.component.ts");
/* harmony import */ var _entry_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entry/entry.component */ "./src/app/entry/entry.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _usersummary_usersummary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./usersummary/usersummary.component */ "./src/app/usersummary/usersummary.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _profilesettings_profilesettings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profilesettings/profilesettings.component */ "./src/app/profilesettings/profilesettings.component.ts");




















// Bring in services and put them in providers???
function tokenGetter() {
    return localStorage.getItem('token');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _entrylist_entrylist_component__WEBPACK_IMPORTED_MODULE_10__["EntrylistComponent"],
                _entry_entry_component__WEBPACK_IMPORTED_MODULE_11__["EntryComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _usersummary_usersummary_component__WEBPACK_IMPORTED_MODULE_15__["UsersummaryComponent"],
                _profilesettings_profilesettings_component__WEBPACK_IMPORTED_MODULE_18__["ProfilesettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_16__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_7__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:5001'],
                        blacklistedRoutes: ['localhost:5001/Auth'] // Routes without token
                    }
                })
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/entry/entry.component.css":
/*!*******************************************!*\
  !*** ./src/app/entry/entry.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cc-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\nlabel {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnkvZW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5L2VudHJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2MtY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/entry/entry.component.html":
/*!********************************************!*\
  !*** ./src/app/entry/entry.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card w-100 mb-3\">\n  <!-- READ ONLY VIEW -->\n  <div *ngIf=\"!editMode\" (click)=\"enableEdit()\">\n      <div class=\"card-body\">\n          <h3 class=\"card-title\">{{thisEntry?.date | date: 'fullDate'}}</h3>\n        <p>{{thisEntry.summary}}</p>\n        <p>{{thisEntry.activity}}</p>\n    </div>\n  </div>\n\n  <!-- EDITABLE VIEW -->\n  <div *ngIf=\"editMode\" >\n      <button class=\"btn btn-danger cc-close\" (click)=\"removeEntry()\" *ngIf=\"editMode\">Delete</button>\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">{{entryForm.value?.date | date: 'fullDate'}}</h3>\n        <form [formGroup]=\"entryForm\" (ngSubmit)=\"submitEntryChanges()\">\n          <div class=\"form-group\">\n            <label class=\"form-group\">\n            Date\n            </label>\n            <input id=\"date\" type=\"date\" formControlName=\"date\">\n          </div>\n          <div class=\"form-group\">\n            <label>\n            Summary\n            </label>\n            <textarea id =\"summary\" formControlName=\"summary\"></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>\n              Activity\n            </label>\n            <textarea id=\"activity\" formControlName=\"activity\"></textarea>\n          </div>\n        </form>\n      </div>\n      <button class=\"btn btn-success\" (click)=\"submitEntryChanges()\">Save</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/entry/entry.component.ts":
/*!******************************************!*\
  !*** ./src/app/entry/entry.component.ts ***!
  \******************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/entry */ "./src/app/models/entry.ts");
/* harmony import */ var _services_entry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/entry.service */ "./src/app/services/entry.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertifyjs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/alertifyjs.service */ "./src/app/services/alertifyjs.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");








var EntryComponent = /** @class */ (function () {
    function EntryComponent(entryService, authService, alertify, formBuilder) {
        this.entryService = entryService;
        this.authService = authService;
        this.alertify = alertify;
        this.formBuilder = formBuilder;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    EntryComponent.prototype.ngOnInit = function () {
        this.disableEdit();
        this.entryForm = this.formBuilder.group({
            // date: [this.thisEntry.date, Validators.required],
            date: [new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-gb').transform(this.thisEntry.date, 'y-MM-dd'), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            summary: [this.thisEntry.summary],
            activity: [this.thisEntry.activity]
        });
    };
    EntryComponent.prototype.submitEntryChanges = function () {
        var _this = this;
        // On submit of the form
        if (!this.entryForm.dirty) {
            this.disableEdit();
            return;
        }
        var entryToSubmit = {
            id: this.thisEntry.id,
            userId: this.thisEntry.userId,
            date: this.entryForm.value.date,
            summary: this.entryForm.value.summary,
            activity: this.entryForm.value.activity
        };
        this.entryService.updateEntry(this.authService.decodedToken.nameId, entryToSubmit).subscribe(function (newEntry) {
            _this.thisEntry = entryToSubmit;
            _this.alertify.success('Changes Saved');
            _this.disableEdit();
        }, function (error) {
            _this.alertify.error('Failed to update!');
        });
    };
    EntryComponent.prototype.removeEntry = function () {
        var _this = this;
        this.alertify.confirm('Are you sure?', function () {
            _this.entryService.removeEntry(_this.authService.decodedToken.nameId, _this.thisEntry).subscribe(function (success) {
                _this.alertify.success('Removed');
                _this.delete.emit(_this.thisEntry);
            }, function (failed) {
                _this.alertify.error('Failed to remove entry');
            });
        });
    };
    EntryComponent.prototype.enableEdit = function () {
        this.editMode = true;
    };
    EntryComponent.prototype.disableEdit = function () {
        this.editMode = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_entry__WEBPACK_IMPORTED_MODULE_2__["Entry"])
    ], EntryComponent.prototype, "thisEntry", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], EntryComponent.prototype, "delete", void 0);
    EntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entry',
            template: __webpack_require__(/*! ./entry.component.html */ "./src/app/entry/entry.component.html"),
            styles: [__webpack_require__(/*! ./entry.component.css */ "./src/app/entry/entry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_entry_service__WEBPACK_IMPORTED_MODULE_3__["EntryService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_alertifyjs_service__WEBPACK_IMPORTED_MODULE_5__["AlertifyjsService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], EntryComponent);
    return EntryComponent;
}());



/***/ }),

/***/ "./src/app/entrylist/entrylist.component.css":
/*!***************************************************!*\
  !*** ./src/app/entrylist/entrylist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5bGlzdC9lbnRyeWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/entrylist/entrylist.component.html":
/*!****************************************************!*\
  !*** ./src/app/entrylist/entrylist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-6\">\n      <div class=\"jumbotron jumbotron-fluid\">\n          <div class=\"container\">\n            <h1 class=\"display-4\">Workout Log</h1>\n            <button class=\"btn-success\" (click)=\"addEntry()\">Log a new workout</button>\n            </div>\n          </div>\n        </div>\n    <div class=\"col-6\">\n      <app-usersummary></app-usersummary>\n  </div>\n</div>\n<div class=\"pt-3 pb-3\">\n  <app-entry *ngFor=\"let e of entries\" [thisEntry]=\"e\" (delete)=\"deleteEntry($event)\"></app-entry>\n</div>\n"

/***/ }),

/***/ "./src/app/entrylist/entrylist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/entrylist/entrylist.component.ts ***!
  \**************************************************/
/*! exports provided: EntrylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrylistComponent", function() { return EntrylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_entry_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/entry.service */ "./src/app/services/entry.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var EntrylistComponent = /** @class */ (function () {
    function EntrylistComponent(entryService, authService) {
        this.entryService = entryService;
        this.authService = authService;
    }
    EntrylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entryService.getAllEntries(this.authService.decodedToken.nameId)
            .subscribe(function (data) {
            _this.entries = data;
        });
    };
    EntrylistComponent.prototype.addEntry = function () {
        var _this = this;
        this.entryService.createEntry(this.authService.decodedToken.nameId)
            .subscribe(function (data) {
            _this.entries.push(data);
        });
    };
    // Triggered by output emitter on child Entry component
    EntrylistComponent.prototype.deleteEntry = function (entryToDelete) {
        this.entries = this.entries.filter(function (entry) { return entry.id !== entryToDelete.id; });
    };
    EntrylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-entrylist',
            template: __webpack_require__(/*! ./entrylist.component.html */ "./src/app/entrylist/entrylist.component.html"),
            styles: [__webpack_require__(/*! ./entrylist.component.css */ "./src/app/entrylist/entrylist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_entry_service__WEBPACK_IMPORTED_MODULE_2__["EntryService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], EntrylistComponent);
    return EntrylistComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            // perhaps add some alert of notification stuff here.
            this.router.navigate(['./']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n  <div *ngIf=\"!registerMode\" style=\"text-align: center\">\n    <h1>Fit Logs - Track, Measure, Grow</h1>\n    <p class=\"lead\">Track your fitness and journal your progress on your fitness and welbeing journey.</p>\n    <div *ngIf=\"!authService.loggedIn()\" class=\"btn btn-primary btn-lg\" (click)=\"registerModeToggle()\">Register</div>\n  </div>\n\n  <div *ngIf=\"registerMode\" class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-4\">\n        <app-register (cancelRegister)=\"cancelRegisterMode()\"></app-register>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.registerMode = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerModeToggle = function () {
        this.registerMode = !this.registerMode;
    };
    HomeComponent.prototype.cancelRegisterMode = function () {
        this.registerMode = false;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLXRvZ2dsZSwgLmRyb3Bkb3duLWl0ZW0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"loggedIn()\" class=\"dropdown\" dropdown>\n  <a class=\"dropdown-toggle text-light\" dropdownToggle>\n    Welcome {{authService.decodedToken?.unique_name | titlecase}}\n  </a>\n\n  <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n    <a class=\"dropdown-item\" [routerLink]=\"['/profile-settings']\"><i class=\"fa fa-user\"></i>Profile Settings</a>\n    <div class=\"dropdown-divider\"></div>\n    <a class=\"dropdown-item\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\n  </div>\n</div>\n\n<form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" class=\"form-inline my-2 my-lg-0\" (ngSubmit)=\"login()\">\n    <input class=\"form-control mr-sm-2\" type=\"text\" name=\"username\" placeholder=\"Username\" [(ngModel)]=\"model.username\" required>\n    <input class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" placeholder=\"Password\" [(ngModel)]=\"model.password\" required>\n    <button class=\"btn btn-success my-2 my-sm-0\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n  </form>\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertifyjs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alertifyjs.service */ "./src/app/services/alertifyjs.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            console.log('Login successful');
            _this.alertify.success('Login successful');
        }, function (error) {
            _this.alertify.warning('Login failed');
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logOut();
        this.alertify.message('Logged out');
    };
    LoginComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertifyjs_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyjsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/entry.ts":
/*!*********************************!*\
  !*** ./src/app/models/entry.ts ***!
  \*********************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
// Entry Model
var Entry = /** @class */ (function () {
    function Entry() {
    }
    return Entry;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">FitLogs</a>\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/entries']\" routerLinkActive=\"router-link-active\">Entries</a>\r\n      </li>\r\n    </ul>\r\n    <app-login></app-login>\r\n  </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profilesettings/profilesettings.component.css":
/*!***************************************************************!*\
  !*** ./src/app/profilesettings/profilesettings.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzZXR0aW5ncy9wcm9maWxlc2V0dGluZ3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/profilesettings/profilesettings.component.html":
/*!****************************************************************!*\
  !*** ./src/app/profilesettings/profilesettings.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Profile Settings</h2>\n<p>Nothing here yet...<br>\n  From here you will be able to update your program that is displayed on the entries screen, change your password etc.\n</p>\n"

/***/ }),

/***/ "./src/app/profilesettings/profilesettings.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/profilesettings/profilesettings.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfilesettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesettingsComponent", function() { return ProfilesettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var ProfilesettingsComponent = /** @class */ (function () {
    function ProfilesettingsComponent(authService) {
        this.authService = authService;
    }
    ProfilesettingsComponent.prototype.ngOnInit = function () {
    };
    ProfilesettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profilesettings',
            template: __webpack_require__(/*! ./profilesettings.component.html */ "./src/app/profilesettings/profilesettings.component.html"),
            styles: [__webpack_require__(/*! ./profilesettings.component.css */ "./src/app/profilesettings/profilesettings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ProfilesettingsComponent);
    return ProfilesettingsComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #registerForm=\"ngForm\" (ngSubmit)=\"register()\" style=\"text-align: center\">\n  <h2 class=\"text-center text-primary\">Sign-up</h2>\n\n  <div class=\"form-group\">\n      <input type=\"text\" class=\"form-conrol\" placeholder=\"Username\" required name=\"username\" [(ngModel)]=\"model.username\">\n  </div>\n\n  <div class=\"form-group\">\n      <input type=\"password\" class=\"form-conrol\" placeholder=\"Password\" required name=\"password\" [(ngModel)]=\"model.password\">\n  </div>\n\n  <div class=\"form-group text-center\">\n      <button class=\"btn btn-success\" type=\"submit\">Register</button>\n      <button class=\"btn btn-default\" type=\"submit\" (click)=\"cancel()\">Cancel</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertifyjs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/alertifyjs.service */ "./src/app/services/alertifyjs.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.model = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.authService.register(this.model).subscribe(function (next) {
            _this.alertify.success('Registration successfull');
            _this.cancelRegister.emit();
        }, function (error) {
            _this.alertify.error('Registration failed');
        });
    };
    RegisterComponent.prototype.cancel = function () {
        this.cancelRegister.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterComponent.prototype, "cancelRegister", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertifyjs_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyjsService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _entrylist_entrylist_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entrylist/entrylist.component */ "./src/app/entrylist/entrylist.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _profilesettings_profilesettings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profilesettings/profilesettings.component */ "./src/app/profilesettings/profilesettings.component.ts");





// Works on first match wins..
var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'entries', component: _entrylist_entrylist_component__WEBPACK_IMPORTED_MODULE_1__["EntrylistComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'profile-settings', component: _profilesettings_profilesettings_component__WEBPACK_IMPORTED_MODULE_4__["ProfilesettingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] }
];


/***/ }),

/***/ "./src/app/services/alertifyjs.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/alertifyjs.service.ts ***!
  \************************************************/
/*! exports provided: AlertifyjsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyjsService", function() { return AlertifyjsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyjsService = /** @class */ (function () {
    function AlertifyjsService() {
    }
    AlertifyjsService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyjsService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyjsService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyjsService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyjsService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyjsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyjsService);
    return AlertifyjsService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'Auth';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"];
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + '/login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
            }
        }));
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseUrl + '/register', model);
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem('token');
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    // if there is already a token stored, parse it
    AuthService.prototype.parseLocalToken = function () {
        var token = localStorage.getItem('token');
        if (!this.jwtHelper.isTokenExpired(token)) {
            this.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/entry.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/entry.service.ts ***!
  \*******************************************/
/*! exports provided: EntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryService", function() { return EntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




// // Eventually this will need to consume API
// const httpOptions = {
//      Headers = new HttpHeaders({
//        'Authorization': 'Bearer: ' + localStorage.getItem('token');
//      })
// };
// Would pass httpOptions with http.xxx function
var EntryService = /** @class */ (function () {
    function EntryService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Users/Entry/';
    }
    EntryService.prototype.getAllEntries = function (userId) {
        return this.http.get(this.baseUrl);
    };
    EntryService.prototype.updateEntry = function (userId, updatedEntry) {
        return this.http.put(this.baseUrl + updatedEntry.id, updatedEntry);
    };
    EntryService.prototype.removeEntry = function (userId, remEntry) {
        return this.http.delete(this.baseUrl + remEntry.id);
    };
    EntryService.prototype.createEntry = function (userId) {
        var newEntry = {
            'date': new Date(Date.now()),
            'userId': userId
        };
        return this.http.post(this.baseUrl, newEntry);
    };
    EntryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EntryService);
    return EntryService;
}());



/***/ }),

/***/ "./src/app/usersummary/usersummary.component.css":
/*!*******************************************************!*\
  !*** ./src/app/usersummary/usersummary.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzdW1tYXJ5L3VzZXJzdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/usersummary/usersummary.component.html":
/*!********************************************************!*\
  !*** ./src/app/usersummary/usersummary.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Summary Stats</h2>\n<ul>\n  <li>Bench 80 x5</li>\n  <li>Chins 20 x5</li>\n</ul>\n<br>\n<p>\n  Days worked out: 65<br>\n  Favoutite exercise: Bench x100 times\n</p>\n"

/***/ }),

/***/ "./src/app/usersummary/usersummary.component.ts":
/*!******************************************************!*\
  !*** ./src/app/usersummary/usersummary.component.ts ***!
  \******************************************************/
/*! exports provided: UsersummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersummaryComponent", function() { return UsersummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UsersummaryComponent = /** @class */ (function () {
    function UsersummaryComponent() {
    }
    UsersummaryComponent.prototype.ngOnInit = function () {
    };
    UsersummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usersummary',
            template: __webpack_require__(/*! ./usersummary.component.html */ "./src/app/usersummary/usersummary.component.html"),
            styles: [__webpack_require__(/*! ./usersummary.component.css */ "./src/app/usersummary/usersummary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsersummaryComponent);
    return UsersummaryComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'https://localhost:5001/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chestercraig/Documents/Dev/fit-logs/FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map