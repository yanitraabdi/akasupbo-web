import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StudentComponent } from './components/student.component';
import { StudentRoutes } from './student.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        StudentRoutes
    ],

    declarations: [
        StudentComponent
    ],

    exports: [
        StudentComponent
    ]
})

export class StudentModule { }
