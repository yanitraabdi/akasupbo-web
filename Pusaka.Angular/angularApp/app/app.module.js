var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { BadgeModule } from './badge/badge.module';
import { AvatarModule } from './avatar/avatar.module';
import { StudentModule } from './student/student.module';
import { SchoolModule } from './school/school.module';
import { CategoryModule } from './category/category.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            imports: [
                BrowserModule,
                AppRoutes,
                SharedModule,
                CoreModule.forRoot(),
                HomeModule,
                BadgeModule,
                AvatarModule,
                StudentModule,
                CategoryModule,
                SchoolModule,
                FormsModule
            ],
            declarations: [
                AppComponent,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map