var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from './components/badge.component';
import { BadgeRoutes } from './badge.routes';
var BadgeModule = (function () {
    function BadgeModule() {
    }
    BadgeModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                HttpClientModule,
                BadgeRoutes
            ],
            declarations: [
                BadgeComponent
            ],
            exports: [
                BadgeComponent
            ]
        })
    ], BadgeModule);
    return BadgeModule;
}());
export { BadgeModule };
//# sourceMappingURL=badge.module.js.map