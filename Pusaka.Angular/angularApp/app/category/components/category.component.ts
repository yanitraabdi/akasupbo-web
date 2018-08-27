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

    constructor(private dataService: CategoryService) {
        this.message = 'Things from the ASP.NET Core API';
    }

    ngOnInit() {
        this.getAllCategories();
    }

    post() {
        this.dataService.add(this.category).subscribe(
            () => {
                this.getAllCategories();
                this.category = new Category();
            },
            error => {
                console.log(error);
            }
        );
    }

    put() {
        this.dataService.update(this.category.CategoryId, this.category).subscribe(
            () => {
                this.getAllCategories();
                this.category = new Category();
                console.log(this.category);
            },
            error => {
                console.log(error);
            }
        );
    }

    onSubmit(form: NgForm) {
        if (form.value.EmployeeID == null)
        {
            this.dataService.add(form.value)
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
            this.dataService
                .update(form.value.EmployeeID, form.value)
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
    }

    onDelete(id: number) {
        if (confirm('Are you sure to delete this record ?') === true) {
            this.dataService.delete(id);
        }
    }

    resetForm(form?: NgForm) {
        if (form != null)
            form.reset();
        this.category = {
            CategoryId: null,
            CategoryName: '',
            ImageFile: '',
            Status: '',
            Tag: ''
        }
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
