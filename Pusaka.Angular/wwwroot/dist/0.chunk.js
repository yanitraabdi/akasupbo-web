(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./angularApp/app/about/about.module.ts":
/*!**********************************************************!*\
  !*** ./angularApp/app/about/about.module.ts + 2 modules ***!
  \**********************************************************/
/*! exports provided: AboutModule */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/common/fesm5/common.js */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/core/fesm5/core.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/router/fesm5/router.js */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@angular/common/fesm5/common.js
var common = __webpack_require__("./node_modules/@angular/common/fesm5/common.js");

// EXTERNAL MODULE: ./node_modules/@angular/core/fesm5/core.js
var core = __webpack_require__("./node_modules/@angular/core/fesm5/core.js");

// EXTERNAL MODULE: ./node_modules/@angular/router/fesm5/router.js
var router = __webpack_require__("./node_modules/@angular/router/fesm5/router.js");

// CONCATENATED MODULE: ./angularApp/app/about/components/about.component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var about_component_AboutComponent = (function () {
    function AboutComponent() {
        this.message = 'Hello from AboutComponent constructor';
    }
    AboutComponent = __decorate([
        Object(core["Component"])({
            selector: 'app-about-component',
            template: __webpack_require__(/*! ./about.component.html */ "./angularApp/app/about/components/about.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());


// CONCATENATED MODULE: ./angularApp/app/about/about.routes.ts


var routes = [
    { path: '', component: about_component_AboutComponent }
];
var AboutRoutes = router["RouterModule"].forChild(routes);

// CONCATENATED MODULE: ./angularApp/app/about/about.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return about_module_AboutModule; });
var about_module_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var about_module_AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule = about_module_decorate([
        Object(core["NgModule"])({
            imports: [
                common["CommonModule"],
                AboutRoutes
            ],
            declarations: [
                about_component_AboutComponent
            ],
        })
    ], AboutModule);
    return AboutModule;
}());



/***/ }),

/***/ "./angularApp/app/about/components/about.component.html":
/*!**************************************************************!*\
  !*** ./angularApp/app/about/components/about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1 class=\"display-4\">\n        {{message}}\n    </h1>\n</div>"

/***/ })

}]);
//# sourceMappingURL=0.chunk.js.map