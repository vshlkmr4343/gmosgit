(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notifications-notifications-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotificationsNotificationsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content style=\"--background: #F5F5F5 !important;\">\n  <div>\n    <p class=\"heading\">Notifications</p>\n  </div>\n  <ion-card>\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"5\">\n          <ion-label>\n            <p class=\"title\">Notification Title</p>\n            <p class=\"details\">Notification Details</p>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-label>\n            <p class=\"time\">02:00 AM,03/10/20</p>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"5\">\n          <ion-label>\n            <p class=\"title\">Notification Title</p>\n            <p class=\"details\">Notification Details</p>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-label>\n            <p class=\"time\">02:00 AM,03/10/20</p>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n  <ion-card>\n    <ion-item lines=\"none\" style=\"--background: #FFFFFF !important;\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"5\">\n          <ion-label>\n            <p class=\"title\">Notification Title</p>\n            <p class=\"details\">Notification Details</p>\n          </ion-label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <ion-label>\n            <p class=\"time\">02:00 AM,03/10/20</p>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-card>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/notifications/notifications-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/notifications/notifications-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: NotificationsPageRoutingModule */

  /***/
  function srcAppNotificationsNotificationsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageRoutingModule", function () {
      return NotificationsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/notifications/notifications.page.ts");

    const routes = [{
      path: '',
      component: _notifications_page__WEBPACK_IMPORTED_MODULE_3__["NotificationsPage"]
    }];
    let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {};
    NotificationsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NotificationsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.module.ts ***!
    \*******************************************************/

  /*! exports provided: NotificationsPageModule */

  /***/
  function srcAppNotificationsNotificationsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function () {
      return NotificationsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./notifications-routing.module */
    "./src/app/notifications/notifications-routing.module.ts");
    /* harmony import */


    var _notifications_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./notifications.page */
    "./src/app/notifications/notifications.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    let NotificationsPageModule = class NotificationsPageModule {};
    NotificationsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notifications_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationsPageRoutingModule"]],
      declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_6__["NotificationsPage"]]
    })], NotificationsPageModule);
    /***/
  },

  /***/
  "./src/app/notifications/notifications.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/notifications/notifications.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotificationsNotificationsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 5px;\n  font-size: 13px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n  font-weight: bold;\n  color: black;\n}\n\n.details {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 5px;\n  font-size: 13px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.time {\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 5px;\n  font-size: 10px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.heading {\n  margin-bottom: 0;\n  margin-left: 10px;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hhbnNhcmthci9Eb2N1bWVudHMvVmlzaGFsL0xpdmVBcHBzL0dNT1MvZ21vcyBjb3B5L3NyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFFQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUVJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgIC8vIG1hcmdpbi10b3A6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmRldGFpbHN7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgLy8gbWFyZ2luLXRvcDogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcbn1cbi50aW1le1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgIC8vIG1hcmdpbi10b3A6IDZweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gICAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG4uaGVhZGluZ3tcbiAgIC8vIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59IiwiLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmRldGFpbHMge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XG4gIG92ZXJmbG93OiBpbmhlcml0O1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/notifications/notifications.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/notifications/notifications.page.ts ***!
    \*****************************************************/

  /*! exports provided: NotificationsPage */

  /***/
  function srcAppNotificationsNotificationsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsPage", function () {
      return NotificationsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NotificationsPage = class NotificationsPage {
      constructor() {}

      ngOnInit() {}

    };
    NotificationsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notifications',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.page.scss */
      "./src/app/notifications/notifications.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], NotificationsPage);
    /***/
  }
}]);
//# sourceMappingURL=notifications-notifications-module-es5.js.map