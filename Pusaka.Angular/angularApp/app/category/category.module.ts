import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatTableModule, MatButtonModule, MatSortModule, MatPaginatorModule, MatDialog, MatDialogRef } from '@angular/material';

import { CategoryComponent } from './components/category.component';
import { CategoryRoutes } from './category.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        CategoryRoutes,
        MatTableModule,
        MatButtonModule,
        MatSortModule,
        MatPaginatorModule,
        MatDialog,
        MatDialogRef
    ],

    declarations: [
        CategoryComponent
    ],

    exports: [
        CategoryComponent
    ]
})

export class CategoryModule { }
