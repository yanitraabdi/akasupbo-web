var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Category, ListCategory } from '../../models/category';
import { CategoryService } from '../../core/services/category-data.service';
var CategoryComponent = (function () {
    function CategoryComponent(dataService) {
        this.dataService = dataService;
        this.categories = new ListCategory();
        this.category = new Category();
        this.message = 'Things from the ASP.NET Core API';
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getAllCategories();
    };
    CategoryComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!this.category.CategoryId) {
            this.dataService
                .add(form.value)
                .subscribe(function () {
                _this.resetForm(form);
                _this.getAllCategories();
                _this.category = new Category();
            }, function (error) {
                console.log(error);
            });
        }
        else {
            form.value.CategoryId = this.category.CategoryId;
            this.dataService
                .update(this.category.CategoryId, form.value)
                .subscribe(function () {
                _this.resetForm(form);
                _this.getAllCategories();
                _this.category = new Category();
            }, function (error) {
                console.log(error);
            });
        }
    };
    CategoryComponent.prototype.showForEdit = function (category) {
        this.category = Object.assign({}, category);
        console.log(category);
    };
    CategoryComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.category = new Category();
    };
    CategoryComponent.prototype.getAllCategories = function () {
        var _this = this;
        this.dataService
            .getAll()
            .subscribe(function (data) { return (_this.categories = data); }, function (error) { return console.log(error); }, function () { return console.log(_this.categories); });
    };
    CategoryComponent = __decorate([
        Component({
            selector: 'app-category-component',
            templateUrl: './category.component.html'
        }),
        __metadata("design:paramtypes", [CategoryService])
    ], CategoryComponent);
    return CategoryComponent;
}());
export { CategoryComponent };
//# sourceMappingURL=category.component.js.map