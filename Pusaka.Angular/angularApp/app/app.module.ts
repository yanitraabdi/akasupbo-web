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

//import { ConfirmationDialog } from './framework/confirmation-dialog/components/confirmation-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
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
        //ConfirmationDialog
    ],

    bootstrap: [AppComponent]
})

export class AppModule { }
