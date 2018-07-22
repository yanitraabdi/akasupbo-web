import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BadgeComponent } from './components/badge.component';
import { BadgeRoutes } from './badge.routes';

@NgModule({
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

export class BadgeModule { }
