import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
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
        AppComponent
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
