(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat-board/chat-board.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat-board/chat-board.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content style=\"--background: #FFFFFF !important;\">\n    <ion-item lines=\"none\" class=\"item\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"2\">\n      <ion-avatar class=\"avatar-image1\">\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\n        </ion-img>\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"6\">\n      <ion-label class=\"msg-label\">\n        <h3 class=\"sender-name\">Olivia Smith</h3>\n        <p>Wed, 16 Oct 2019 18:18:43</p>\n        <p>mmmmmmmm</p>\n      </ion-label>\n      </ion-col>\n      <ion-col size=\"4\">\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"item\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"2\">\n      <ion-avatar class=\"avatar-image1\">\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\n        </ion-img>\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"6\">\n      <ion-label class=\"msg-label\">\n        <h3 class=\"sender-name\">Olivia Smith</h3>\n        <p>Wed, 16 Oct 2019 18:18:43</p>\n        <p>mmmmmmmm</p>\n      </ion-label>\n      </ion-col>\n      <ion-col size=\"4\">\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item lines=\"none\" class=\"item\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"2\">\n      <ion-avatar class=\"avatar-image1\">\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\n        </ion-img>\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"6\">\n      <ion-label class=\"msg-label\">\n        <h3 class=\"sender-name\">Olivia Smith</h3>\n        <p>Wed, 16 Oct 2019 18:18:43</p>\n        <p>mmmmmmmm</p>\n      </ion-label>\n      </ion-col>\n      <ion-col size=\"4\">\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <div style=\"position: absolute; background-color: transparent; bottom: 0px; width: 100%\">\n      <div class=\"msg-div\">\n        <ion-textarea class=\"msg-area\"></ion-textarea>\n      </div>\n      <div class=\"row\">\n      <button id=\"footer-btn1\" class=\"col-4 button button-block btn btn-sm btn btn-outline-secondary\">Report to admin</button>\n      <button id=\"footer-btn2\" class=\"col-3 button button-block btn btn-sm ml-auto\">SEND</button>\n      </div>\n  </div> \n  </ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content  style=\"--background: #F5F5F5 !important;\">\n  <ion-item lines=\"full\" style=\"--background: #DDDDDD !important;\">\n    <ion-row style=\"width: 100%;\">\n      <ion-col size=\"5\" class=\"actor\" >\n        <span>Gig Messages</span>\n      </ion-col>\n      <ion-col size=\"5\" class=\"actor selected\">\n        <span>User Messages</span>\n      </ion-col>\n      <ion-col size=\"2\">\n      </ion-col>\n    </ion-row>\n  </ion-item>\n\n  <div>\n    <ion-item lines=\"none\"  style=\"--background: #F5F5F5 !important;\" (click)=\"chatboard()\">\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"2\">\n      <ion-avatar class=\"avatar-image1\">\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\n        </ion-img>\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label class=\"msg-label\">\n        <h3 class=\"sender-name\">Olivia Smith</h3>\n        <p class=\"message\">Last Messages here</p>\n      </ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    <ion-item lines=\"none\"  style=\"--background: #F5F5F5 !important;\" >\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"2\">\n      <ion-avatar class=\"avatar-image1\">\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\n        </ion-img>\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label class=\"msg-label\">\n        <h3 class=\"sender-name\">Olivia Smith</h3>\n        <p class=\"message\">Last Messages here</p>\n      </ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        </ion-col>\n      </ion-row>\n    </ion-item>\n   <ion-card>\n    <ion-item lines=\"none\" style=\"--background: #F8F9FA !important;\"  class=\"shadow-sm\">\n      <ion-row style=\"width: 100%;margin-top: -5px;\">\n        <ion-col size=\"2\">\n      <ion-avatar class=\"avatar-image2\">\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\n        </ion-img>\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label>\n        <h3 class=\"sender-name\">Olivia Smith</h3>\n        <p class=\"message\">Last Messages here</p>\n      </ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        <div>\n         <p class=\"number\">12</p>\n        </div>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n    </ion-card>\n    <ion-item lines=\"none\"  style=\"--background: #F5F5F5 !important;\" >\n      <ion-row style=\"width: 100%;\">\n        <ion-col size=\"2\">\n      <ion-avatar class=\"avatar-image1\">\n        <ion-img src=\"../../assets/images/talent1.png\" alt=\"\">\n        </ion-img>\n      </ion-avatar>\n      </ion-col>\n      <ion-col size=\"8\">\n      <ion-label class=\"msg-label\">\n        <h3 class=\"sender-name\">Olivia Smith</h3>\n        <p class=\"message\">Last Messages here</p>\n      </ion-label>\n      </ion-col>\n      <ion-col size=\"2\">\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/messages/chat-board/chat-board.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/messages/chat-board/chat-board.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".avatar-image1 {\n  width: 30px;\n  height: 30px;\n  margin-top: 5px;\n  margin-bottom: auto;\n}\n\n.msg-label {\n  margin-left: -8px;\n}\n\n.sender-name {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 6px;\n  margin-bottom: 2px;\n  font-size: 14px;\n  font-weight: bold;\n}\n\np {\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 2px;\n  font-size: 11px;\n  line-height: 20px;\n  text-overflow: inherit;\n  overflow: inherit;\n  color: #A2A8BC;\n}\n\n.item {\n  margin-top: 6px;\n}\n\n#footer-btn1 {\n  flex-basis: 0;\n  -webkit-box-flex: 1;\n  flex-grow: 1;\n  font-size: 9px;\n  text-transform: none;\n  color: #A1A6AB !important;\n}\n\n#footer-btn2 {\n  background: #012E4D;\n  color: white;\n  font-size: 10px;\n}\n\n.row {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin-right: 15px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n}\n\n.msg-area {\n  border: 1px solid #EEEEEE;\n}\n\n.msg-div {\n  margin: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hhbnNhcmthci9Eb2N1bWVudHMvVmlzaGFsL0xpdmVBcHBzL0dNT1MvZ21vcyBjb3B5L3NyYy9hcHAvbWVzc2FnZXMvY2hhdC1ib2FyZC9jaGF0LWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZXNzYWdlcy9jaGF0LWJvYXJkL2NoYXQtYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRElDO0VBQ0csaUJBQUE7QUNESjs7QURHQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNHSjs7QURERTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNJSDs7QURGRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIRTtFQUNJLHlCQUFBO0FDTU47O0FESkU7RUFDRixZQUFBO0FDT0EiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlcy9jaGF0LWJvYXJkL2NoYXQtYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEBpbXBvcnQgJy4uLy4uL2Fzc2V0cy9jc3MvbWFpbi10aGVtZS5jc3MnO1xuLy8gQGltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9zdHlsZS5jc3MnO1xuLmF2YXRhci1pbWFnZTF7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuIH1cbiAubXNnLWxhYmVse1xuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xufVxuLnNlbmRlci1uYW1le1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbnB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICAgIG92ZXJmbG93OiBpbmhlcml0O1xuICAgIGNvbG9yOiAjQTJBOEJDO1xufVxuLml0ZW17XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuI2Zvb3Rlci1idG4xIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGNvbG9yOiAjQTFBNkFCICFpbXBvcnRhbnQ7XG4gIH1cbiAgI2Zvb3Rlci1idG4yIHtcbiAgIGJhY2tncm91bmQ6ICMwMTJFNEQ7XG4gICBjb2xvcjogd2hpdGU7XG4gICBmb250LXNpemU6MTBweFxuICB9XG4gIC5yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cbiAgLm1zZy1hcmVhe1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VFRUVFRTtcbiAgfVxuICAubXNnLWRpdntcbm1hcmdpbjogMTVweDtcbiAgfSIsIi5hdmF0YXItaW1hZ2UxIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4ubXNnLWxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XG59XG5cbi5zZW5kZXItbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5wIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LW92ZXJmbG93OiBpbmhlcml0O1xuICBvdmVyZmxvdzogaW5oZXJpdDtcbiAgY29sb3I6ICNBMkE4QkM7XG59XG5cbi5pdGVtIHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4jZm9vdGVyLWJ0bjEge1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY29sb3I6ICNBMUE2QUIgIWltcG9ydGFudDtcbn1cblxuI2Zvb3Rlci1idG4yIHtcbiAgYmFja2dyb3VuZDogIzAxMkU0RDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5tc2ctYXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFRUVFRUU7XG59XG5cbi5tc2ctZGl2IHtcbiAgbWFyZ2luOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/messages/chat-board/chat-board.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/messages/chat-board/chat-board.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatBoardComponent", function() { return ChatBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatBoardComponent = class ChatBoardComponent {
    constructor() { }
    ngOnInit() { }
};
ChatBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/chat-board/chat-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-board.component.scss */ "./src/app/messages/chat-board/chat-board.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ChatBoardComponent);



/***/ }),

/***/ "./src/app/messages/messages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/messages/messages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: MessagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageRoutingModule", function() { return MessagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages.page */ "./src/app/messages/messages.page.ts");
/* harmony import */ var _chat_board_chat_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat-board/chat-board.component */ "./src/app/messages/chat-board/chat-board.component.ts");





const routes = [
    {
        path: '',
        component: _messages_page__WEBPACK_IMPORTED_MODULE_3__["MessagesPage"]
    },
    {
        path: 'chat-board',
        component: _chat_board_chat_board_component__WEBPACK_IMPORTED_MODULE_4__["ChatBoardComponent"]
    }
];
let MessagesPageRoutingModule = class MessagesPageRoutingModule {
};
MessagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MessagesPageRoutingModule);



/***/ }),

/***/ "./src/app/messages/messages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages-routing.module */ "./src/app/messages/messages-routing.module.ts");
/* harmony import */ var _messages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages.page */ "./src/app/messages/messages.page.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _chat_board_chat_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-board/chat-board.component */ "./src/app/messages/chat-board/chat-board.component.ts");









let MessagesPageModule = class MessagesPageModule {
};
MessagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _messages_routing_module__WEBPACK_IMPORTED_MODULE_5__["MessagesPageRoutingModule"]
        ],
        declarations: [_messages_page__WEBPACK_IMPORTED_MODULE_6__["MessagesPage"], _chat_board_chat_board_component__WEBPACK_IMPORTED_MODULE_8__["ChatBoardComponent"]]
    })
], MessagesPageModule);



/***/ }),

/***/ "./src/app/messages/messages.page.scss":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a:link, a:visited {\n  color: #919294;\n  text-decoration: none;\n}\n\na:link:active, a:visited:active {\n  color: black;\n}\n\n.actor {\n  text-align: center;\n  margin-bottom: -10px;\n  margin-top: auto;\n  font-size: 14px;\n  margin-left: -7px;\n  margin-right: auto;\n}\n\n.selected {\n  border-bottom: 2px solid #C1270B;\n}\n\n.sender-name {\n  color: #77B7F0;\n  font-weight: bold;\n  margin-top: 5px;\n  padding-top: 10px;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n.avatar-image1 {\n  width: 40px;\n  height: 40px;\n  margin-top: 5px;\n  margin-bottom: auto;\n  margin-left: 10px;\n}\n\n.avatar-image2 {\n  width: 40px;\n  height: 40px;\n  margin-top: 5px;\n  margin-bottom: auto;\n  margin-left: -5px;\n  margin-right: auto;\n}\n\n.msg-label {\n  margin-left: 10px;\n}\n\n.number {\n  padding: 0px;\n  border: 1px solid;\n  background: #999999;\n  border: none;\n  margin-top: 16px;\n  margin-bottom: auto;\n  margin-right: 4px;\n  margin-left: 4px;\n  text-align: center;\n  color: white;\n  font-size: 14px;\n}\n\nion-card {\n  border-radius: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.message {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2hhbnNhcmthci9Eb2N1bWVudHMvVmlzaGFsL0xpdmVBcHBzL0dNT1MvZ21vcyBjb3B5L3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic3JjL2FwcC9tZXNzYWdlcy9tZXNzYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJRTtFQUNFLFlBQUE7QUNESjs7QURJRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFDRSxnQ0FBQTtBQ0RKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENDO0VBQ0csV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUM7RUFDSSxpQkFBQTtBQ0dMOztBRERDO0VBQ0csWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSUo7O0FERkM7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhDO0VBQ0UsZUFBQTtBQ01IIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGltcG9ydCAnLi4vLi4vYXNzZXRzL2Nzcy9tYWluLXRoZW1lLmNzcyc7XG4vLyBAaW1wb3J0ICcuLi8uLi9hc3NldHMvY3NzL3N0eWxlLmNzcyc7XG5hOmxpbmssIGE6dmlzaXRlZCB7XG4gICAgY29sb3I6ICM5MTkyOTQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG4gIFxuICBhOmxpbms6YWN0aXZlLCBhOnZpc2l0ZWQ6YWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAvLyBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gIH1cbiAgLmFjdG9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IC03cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG5cbiAgLnNlbGVjdGVke1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzEyNzBCO1xuICB9XG4gIC5zZW5kZXItbmFtZXtcbiAgICBjb2xvcjogIzc3QjdGMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIH1cbiAgLmF2YXRhci1pbWFnZTF7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuIH1cbiAuYXZhdGFyLWltYWdlMntcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuIH1cbiAubXNnLWxhYmVse1xuICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiB9XG4gLm51bWJlcntcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYmFja2dyb3VuZDogIzk5OTk5OTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gfVxuIGlvbi1jYXJke1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuIH1cbiAubWVzc2FnZXtcbiAgIGZvbnQtc2l6ZTogMTNweDtcbiB9IiwiYTpsaW5rLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogIzkxOTI5NDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmxpbms6YWN0aXZlLCBhOnZpc2l0ZWQ6YWN0aXZlIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYWN0b3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zZWxlY3RlZCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQzEyNzBCO1xufVxuXG4uc2VuZGVyLW5hbWUge1xuICBjb2xvcjogIzc3QjdGMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmF2YXRhci1pbWFnZTEge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYXZhdGFyLWltYWdlMiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLm1zZy1sYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubnVtYmVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYmFja2dyb3VuZDogIzk5OTk5OTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW9uLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/messages/messages.page.ts":
/*!*******************************************!*\
  !*** ./src/app/messages/messages.page.ts ***!
  \*******************************************/
/*! exports provided: MessagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPage", function() { return MessagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MessagesPage = class MessagesPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    chatboard() {
        this.router.navigateByUrl('/messages/chat-board');
    }
};
MessagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MessagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages.page.scss */ "./src/app/messages/messages.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MessagesPage);



/***/ })

}]);
//# sourceMappingURL=messages-messages-module-es2015.js.map