import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Category, ListCategory } from '../../models/category';
import { CategoryService } from '../../core/services/category-data.service';

@Component({
    selector: 'app-category-component',
    templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {
    message: string;
    categories: ListCategory = new ListCategory();
    category: Category = new Category();
    //dialogRef: ConfirmationDialog;

    constructor(private dataService: CategoryService) {
        this.message = 'Things from the ASP.NET Core API';
    }

    ngOnInit() {
        this.getAllCategories();
    }

    onSubmit(form: NgForm) {
        if (!this.category.CategoryId)
        {
            this.dataService
                .add(form.value)
                .subscribe(() => {
                    this.resetForm(form);
                    this.getAllCategories();
                    this.category = new Category();
                },
                    error => {
                        console.log(error);
                    });
        }
        else
        {
            form.value.CategoryId = this.category.CategoryId;
            this.dataService
                .update(this.category.CategoryId, form.value)
                .subscribe(() => {
                    this.resetForm(form);
                    this.getAllCategories();
                    this.category = new Category();
                },
                    error => {
                        console.log(error);
                    });
        }
    }

    showForEdit(category: Category) {
        this.category = Object.assign({}, category);
        console.log(category);
    }

    //onDelete(id: number) {
    //    this.dialogRef = this.dialog.open(ConfirmationDialog, {
    //        disableClose: false
    //    });
    //    this.dialogRef.confirmMessage = "Are you sure you want to delete?"

    //    this.dialogRef.afterClosed().subscribe(result => {
    //        if (result) {
    //            this.dataService.delete(id);
    //        }
    //        this.dialogRef = null;
    //    });
        //if (confirm('Are you sure to delete this record ?') === true) {
        //    this.dataService.delete(id);
        //}
    //}

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.category = new Category();
    }

    private getAllCategories() {
        this.dataService
            .getAll()
            .subscribe(
                data => (this.categories = data),
                error => console.log(error),
                () => console.log(this.categories)
            );
    }
}
