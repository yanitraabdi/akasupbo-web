import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SchoolComponent } from './components/school.component';
import { SchoolRoutes } from './school.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SchoolRoutes
    ],

    declarations: [
        SchoolComponent
    ],

    exports: [
        SchoolComponent
    ]
})

export class SchoolModule { }
