(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat-board/chat-board.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat-board/chat-board.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesChatBoardChatBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-back-header></app-back-header>\r\n<ion-content style=\"--background: #FFFFFF !important;\">\r\n    <ion-item lines=\"none\" class=\"item\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"2\">\r\n      <ion-avatar class=\"avatar-image1\">\r\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\r\n        </ion-img>\r\n      </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n      <ion-label class=\"msg-label\">\r\n        <h3 class=\"sender-name\">Olivia Smith</h3>\r\n        <p class=\"size-font\">Wed, 08/16/2019 18:18:43</p>\r\n        <p class=\"size-font\">mmmmmmmm</p>\r\n      </ion-label>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"2\">\r\n      <ion-avatar class=\"avatar-image1\">\r\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\r\n        </ion-img>\r\n      </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n      <ion-label class=\"msg-label\">\r\n        <h3 class=\"sender-name\">Olivia Smith</h3>\r\n        <p class=\"size-font\">Wed, 08/16/2019 18:18:43</p>\r\n        <p class=\"size-font\">mmmmmmmm</p>\r\n      </ion-label>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"2\">\r\n      <ion-avatar class=\"avatar-image1\">\r\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\r\n        </ion-img>\r\n      </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n      <ion-label class=\"msg-label\">\r\n        <h3 class=\"sender-name\">Olivia Smith</h3>\r\n        <p class=\"size-font\">Wed, 08/16/2019 18:18:43</p>\r\n        <p class=\"size-font\">mmmmmmmm</p>\r\n      </ion-label>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" class=\"item\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"2\">\r\n      <ion-avatar class=\"avatar-image1\">\r\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\r\n        </ion-img>\r\n      </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"10\">\r\n      <ion-label class=\"msg-label\">\r\n        <h3 class=\"sender-name\">Olivia Smith</h3>\r\n        <p class=\"size-font\">Wed, 08/16/2019 18:18:43</p>\r\n        <p class=\"size-font\">mmmmmmmm</p>\r\n      </ion-label>\r\n      </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n    <div style=\"position: absolute; background-color: transparent; bottom: 0px; width: 100%\">\r\n      <div class=\"msg-div\">\r\n        <ion-textarea class=\"msg-area\"></ion-textarea>\r\n      </div>\r\n      <div class=\"row\">\r\n      <button id=\"footer-btn1\" class=\"col-4 button button-block btn btn-sm btn btn-outline-secondary\">Report to admin</button>\r\n      <button id=\"footer-btn2\" class=\"col-3 button button-block btn btn-sm ml-auto\">SEND</button>\r\n      </div>\r\n  </div> \r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessagesMessagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n\r\n<ion-content  style=\"--background: #F5F5F5 !important;\">\r\n  <ion-item lines=\"full\" class=\"fixed-heading\">\r\n    <ion-row style=\"width: 100%;\">\r\n      <ion-col size=\"5\" class=\"actor\" >\r\n        <span>Gig Messages</span>\r\n      </ion-col>\r\n      <ion-col size=\"5\" class=\"actor selected\">\r\n        <span>User Messages</span>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-item>\r\n\r\n  <div style=\"margin-top: 50px;\">\r\n    <ion-item lines=\"none\"  style=\"--background: #F5F5F5 !important; margin-left: -12px;\" (click)=\"chatboard()\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"2\">\r\n      <ion-avatar class=\"avatar-image1\">\r\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\r\n        </ion-img>\r\n      </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"msg-label\">\r\n        <h3 class=\"sender-name\">Olivia Smith</h3>\r\n        <p class=\"size-font\">Last Messages here</p>\r\n      </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n    <ion-item lines=\"none\"  style=\"--background: #F5F5F5 !important; margin-left: -12px;\" (click)=\"chatboard()\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"2\">\r\n      <ion-avatar class=\"avatar-image1\">\r\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\r\n        </ion-img>\r\n      </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"msg-label\">\r\n        <h3 class=\"sender-name\">Olivia Smith</h3>\r\n        <p class=\"size-font\">Last Messages here</p>\r\n      </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n   <ion-card>\r\n    <ion-item lines=\"none\" style=\"--background: #F8F9FA !important; margin-left: -12px;\"  class=\"shadow-sm\">\r\n      <ion-row style=\"width: 100%;margin-top: -5px;\">\r\n        <ion-col size=\"2\">\r\n      <ion-avatar class=\"avatar-image2\">\r\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\r\n        </ion-img>\r\n      </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n      <ion-label>\r\n        <h3 class=\"sender-name\">Olivia Smith</h3>\r\n        <p class=\"size-font\">Last Messages here</p>\r\n      </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        <div>\r\n         <p class=\"number\">12</p>\r\n        </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n    </ion-card>\r\n    <ion-item lines=\"none\"  style=\"--background: #F5F5F5 !important; margin-left: -12px;\" (click)=\"chatboard()\">\r\n      <ion-row style=\"width: 100%;\">\r\n        <ion-col size=\"2\">\r\n      <ion-avatar class=\"avatar-image1\">\r\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\r\n        </ion-img>\r\n      </ion-avatar>\r\n      </ion-col>\r\n      <ion-col size=\"8\">\r\n      <ion-label class=\"msg-label\">\r\n        <h3 class=\"sender-name\">Olivia Smith</h3>\r\n        <p class=\"size-font\">Last Messages here</p>\r\n      </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"2\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/messages/chat-board/chat-board.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/messages/chat-board/chat-board.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesChatBoardChatBoardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar-image1 {\n  width: 30px;\n  height: 30px;\n  margin-top: 5px;\n  margin-bottom: auto;\n}\n\n.msg-label {\n  margin-left: -8px;\n}\n\n.sender-name {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 6px;\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\np {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n}\n\n.item {\n  margin-top: 6px;\n}\n\n#footer-btn1 {\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  font-size: 11px;\n  text-transform: none;\n  color: black !important;\n}\n\n#footer-btn2 {\n  background: #012E4D;\n  color: white;\n  font-size: 11px;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 15px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.msg-area {\n  border: 1px solid #EEEEEE;\n}\n\n.msg-div {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvY2hhdC1ib2FyZC9GOlxcQXZpcnVwSW9uaWNBcHBcXEdtb3NMaXZlQXBwXFxnbW9zZ2l0L3NyY1xcYXBwXFxtZXNzYWdlc1xcY2hhdC1ib2FyZFxcY2hhdC1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVzc2FnZXMvY2hhdC1ib2FyZC9jaGF0LWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURJQztFQUNHLGlCQUFBO0FDREo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0dKOztBRERFO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0lIOztBREZFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0tKOztBREhFO0VBQ0kseUJBQUE7QUNNTjs7QURKRTtFQUNGLFlBQUE7QUNPQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL2NoYXQtYm9hcmQvY2hhdC1ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyBAaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL21haW4tdGhlbWUuY3NzJztcclxuLy8gQGltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG4uYXZhdGFyLWltYWdlMXtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuIH1cclxuIC5tc2ctbGFiZWx7XHJcbiAgICBtYXJnaW4tbGVmdDogLThweDtcclxufVxyXG4uc2VuZGVyLW5hbWV7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGluaGVyaXQ7XHJcbiAgICBvdmVyZmxvdzogaW5oZXJpdDtcclxufVxyXG4uaXRlbXtcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG4jZm9vdGVyLWJ0bjEge1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAjZm9vdGVyLWJ0bjIge1xyXG4gICBiYWNrZ3JvdW5kOiAjMDEyRTREO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgIGZvbnQtc2l6ZToxMXB4XHJcbiAgfVxyXG4gIC5yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAubXNnLWFyZWF7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNFRUVFRUU7XHJcbiAgfVxyXG4gIC5tc2ctZGl2e1xyXG5tYXJnaW46IDE1cHg7XHJcbiAgfSIsIi5hdmF0YXItaW1hZ2UxIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4ubXNnLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG5cbi5zZW5kZXItbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1vdmVyZmxvdzogaW5oZXJpdDtcbiAgb3ZlcmZsb3c6IGluaGVyaXQ7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4jZm9vdGVyLWJ0bjEge1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4jZm9vdGVyLWJ0bjIge1xuICBiYWNrZ3JvdW5kOiAjMDEyRTREO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm1zZy1hcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0VFRUVFRTtcbn1cblxuLm1zZy1kaXYge1xuICBtYXJnaW46IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/messages/chat-board/chat-board.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/messages/chat-board/chat-board.component.ts ***!
    \*************************************************************/

  /*! exports provided: ChatBoardComponent */

  /***/
  function srcAppMessagesChatBoardChatBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatBoardComponent", function () {
      return ChatBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ChatBoardComponent = class ChatBoardComponent {
      constructor() {}

      ngOnInit() {}

    };
    ChatBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat-board/chat-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-board.component.scss */
      "./src/app/messages/chat-board/chat-board.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ChatBoardComponent);
    /***/
  },

  /***/
  "./src/app/messages/messages-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/messages/messages-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: MessagesPageRoutingModule */

  /***/
  function srcAppMessagesMessagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function () {
      return MessagesPageRoutingModule;
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


    var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./messages.page */
    "./src/app/messages/messages.page.ts");
    /* harmony import */


    var _chat_board_chat_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./chat-board/chat-board.component */
    "./src/app/messages/chat-board/chat-board.component.ts");

    const routes = [{
      path: '',
      component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
    }, {
      path: 'chat-board',
      component: _chat_board_chat_board_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoardComponent"]
    }];
    let MessagesPageRoutingModule = class MessagesPageRoutingModule {};
    MessagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MessagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/messages/messages.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/messages/messages.module.ts ***!
    \*********************************************/

  /*! exports provided: MessagesPageModule */

  /***/
  function srcAppMessagesMessagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function () {
      return MessagesPageModule;
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


    var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./messages-routing.module */
    "./src/app/messages/messages-routing.module.ts");
    /* harmony import */


    var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./messages.page */
    "./src/app/messages/messages.page.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _chat_board_chat_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./chat-board/chat-board.component */
    "./src/app/messages/chat-board/chat-board.component.ts");

    let MessagesPageModule = class MessagesPageModule {};
    MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]],
      declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"], _chat_board_chat_board_component__WEBPACK_IMPORTED_MODULE_8__["ChatBoardComponent"]]
    })], MessagesPageModule);
    /***/
  },

  /***/
  "./src/app/messages/messages.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/messages/messages.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessagesMessagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a:link, a:visited {\n  color: #919294;\n  text-decoration: none;\n}\n\na:link:active, a:visited:active {\n  color: black;\n}\n\n.actor {\n  text-align: center;\n  margin-bottom: -14px;\n  margin-top: 0px;\n  font-size: 14px;\n  margin-left: -15px;\n  margin-right: auto;\n}\n\n.fixed-heading {\n  --background: #DDDDDD !important;\n  width: 100%;\n  position: fixed;\n  z-index: 999;\n  padding-top: 11px;\n  padding-bottom: 11px;\n  margin-top: -12px;\n  padding-left: 0px;\n  padding-right: 0px;\n}\n\n.selected {\n  border-bottom: 2px solid #C1270B;\n}\n\n.sender-name {\n  color: #77B7F0;\n  font-weight: bold;\n  margin-top: 5px;\n  padding-top: 10px;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n.avatar-image1 {\n  width: 40px;\n  height: 40px;\n  margin-top: 5px;\n  margin-bottom: auto;\n  margin-left: 10px;\n}\n\n.avatar-image2 {\n  width: 40px;\n  height: 40px;\n  margin-top: 5px;\n  margin-bottom: auto;\n  margin-left: -3px;\n  margin-right: auto;\n}\n\n.msg-label {\n  margin-left: 10px;\n}\n\n.number {\n  padding: 0px;\n  border: 1px solid;\n  background: #999999;\n  border: none;\n  margin-top: 16px;\n  margin-bottom: auto;\n  margin-right: 4px;\n  margin-left: 4px;\n  text-align: center;\n  color: white;\n  font-size: 14px;\n}\n\nion-card {\n  border-radius: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvRjpcXEF2aXJ1cElvbmljQXBwXFxHbW9zTGl2ZUFwcFxcZ21vc2dpdC9zcmNcXGFwcFxcbWVzc2FnZXNcXG1lc3NhZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0FDREo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FER0U7RUFDRSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLGdDQUFBO0FDQUo7O0FERUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUM7RUFDRyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQztFQUNJLGlCQUFBO0FDSUw7O0FERkM7RUFDRyxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNLSjs7QURIQztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL21haW4tdGhlbWUuY3NzJztcclxuLy8gQGltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xyXG5hOmxpbmssIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogIzkxOTI5NDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgYTpsaW5rOmFjdGl2ZSwgYTp2aXNpdGVkOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcclxuICB9XHJcbiAgLmFjdG9yIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuZml4ZWQtaGVhZGluZ3tcclxuICAgIC0tYmFja2dyb3VuZDogI0RERERERCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwYWRkaW5nLXRvcDogMTFweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzEyNzBCO1xyXG4gIH1cclxuICAuc2VuZGVyLW5hbWV7XHJcbiAgICBjb2xvcjogIzc3QjdGMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIH1cclxuICAuYXZhdGFyLWltYWdlMXtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gfVxyXG4gLmF2YXRhci1pbWFnZTJ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuIH1cclxuIC5tc2ctbGFiZWx7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiB9XHJcbiAubnVtYmVye1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOTk5OTk5O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiB9XHJcbiBpb24tY2FyZHtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuIH1cclxuLy8gIC5tZXNzYWdle1xyXG4vLyAgICBmb250LXNpemU6IDE0cHg7XHJcbi8vICAgIGNvbG9yOiBibGFjaztcclxuLy8gIH0iLCJhOmxpbmssIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjOTE5Mjk0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6bGluazphY3RpdmUsIGE6dmlzaXRlZDphY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5hY3RvciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogLTE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZpeGVkLWhlYWRpbmcge1xuICAtLWJhY2tncm91bmQ6ICNEREREREQgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgcGFkZGluZy1ib3R0b206IDExcHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuXG4uc2VsZWN0ZWQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0MxMjcwQjtcbn1cblxuLnNlbmRlci1uYW1lIHtcbiAgY29sb3I6ICM3N0I3RjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5hdmF0YXItaW1hZ2UxIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmF2YXRhci1pbWFnZTIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5tc2ctbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm51bWJlciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG4gIGJhY2tncm91bmQ6ICM5OTk5OTk7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/messages/messages.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/messages/messages.page.ts ***!
    \*******************************************/

  /*! exports provided: MessagesPage */

  /***/
  function srcAppMessagesMessagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesPage", function () {
      return MessagesPage;
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

    let MessagesPage = class MessagesPage {
      constructor(router) {
        this.router = router;
      }

      ngOnInit() {}

      chatboard() {
        this.router.navigateByUrl('/messages/chat-board');
      }

    };

    MessagesPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.page.scss */
      "./src/app/messages/messages.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], MessagesPage);
    /***/
  }
}]);
//# sourceMappingURL=messages-messages-module-es5.js.map