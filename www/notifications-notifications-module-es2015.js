(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n\t<ion-toolbar style=\"--background: #000000;\">\n\t  <ion-buttons slot=\"end\">\n\t\t<ion-menu-button style=\"--color:#ffffff\"></ion-menu-button>\n\t  </ion-buttons>\n\t  <ion-img class=\"logoIcon\" src=\"assets/images/logo.png\" slot=\"start\"></ion-img>\n\t</ion-toolbar>\n</ion-header> -->\n<app-header></app-header>\n<ion-content style=\"--background: #F5F5F5 !important;\">\n  <div>\n    <p class=\"heading bold-font\">Notifications</p>\n  </div>\n  <ion-card>\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"5\">\n          <ion-label>\n            <p class=\"title size-font\">Notification Title</p>\n            <p class=\"details size-font\">Notification Details</p>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-label>\n            <p class=\"time size-font\">02:00 AM,03/10/20</p>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"5\">\n          <ion-label>\n            <p class=\"title size-font\">Notification Title</p>\n            <p class=\"details size-font\">Notification Details</p>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-label>\n            <p class=\"time size-font\">02:00 AM,03/10/20</p>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"5\">\n          <ion-label>\n            <p class=\"title size-font\">Notification Title</p>\n            <p class=\"details size-font\">Notification Details</p>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-label>\n            <p class=\"time size-font\">02:00 AM,03/10/20</p>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/notifications/notifications-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/notifications/notifications-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NotificationsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function() { return NotificationsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ "./src/app/notifications/notifications.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.module.ts ***!
  \*******************************************************/
/*! exports provided: NotificationsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notifications-routing.module */ "./src/app/notifications/notifications-routing.module.ts");
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notifications.page */ "./src/app/notifications/notifications.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })
], NotificationsPageModule);



/***/ }),

/***/ "./src/app/notifications/notifications.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/notifications/notifications.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n  font-weight: bold;\n  color: black;\n}\n\n.details {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 5px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.time {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  font-size: 10px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.heading {\n  margin-top: 12px;\n  margin-bottom: 0;\n  margin-left: 16px;\n  font-size: 15px;\n  margin-right: auto;\n}\n\nion-card {\n  border-radius: 0px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hhbnNhcmthci9Eb2N1bWVudHMvVmlzaGFsL0xpdmVBcHBzL0dNT1MvZ21vc2dpdC9zcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5kZXRhaWxze1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cbi50aW1le1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBpbmhlcml0O1xufVxuLmhlYWRpbmd7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5pb24tY2FyZHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSIsIi50aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5kZXRhaWxzIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4uaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/notifications/notifications.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/notifications/notifications.page.ts ***!
  \*****************************************************/
/*! exports provided: NotificationsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPage", function() { return NotificationsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationsPage = class NotificationsPage {
    constructor() { }
    ngOnInit() {
    }
};
NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.page.scss */ "./src/app/notifications/notifications.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotificationsPage);



/***/ })

}]);
//# sourceMappingURL=notifications-notifications-module-es2015.js.map