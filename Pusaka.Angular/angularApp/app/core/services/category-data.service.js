var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from './../../app.constants';
var CategoryService = (function () {
    function CategoryService(http, configuration) {
        this.http = http;
        this.actionUrl = configuration.ApiUrl + 'api/Category/';
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }
    CategoryService.prototype.getAll = function () {
        return this.http.get(this.actionUrl, { headers: this.headers });
    };
    CategoryService.prototype.getSingle = function (id) {
        return this.http.get(this.actionUrl + id, { headers: this.headers });
    };
    CategoryService.prototype.add = function (categoryToAdd) {
        var toAdd = JSON.stringify({ CategoryName: categoryToAdd.CategoryName, Tag: categoryToAdd.Tag, ImageFile: categoryToAdd.ImageFile });
        return this.http.post(this.actionUrl, toAdd, { headers: this.headers });
    };
    CategoryService.prototype.update = function (id, categoryToUpdate) {
        var toUpdate = JSON.stringify({ CategoryName: categoryToUpdate.CategoryName, Tag: categoryToUpdate.Tag, ImageFile: categoryToUpdate.ImageFile });
        return this.http
            .put(this.actionUrl + id, toUpdate, { headers: this.headers });
    };
    CategoryService.prototype.delete = function (id) {
        return this.http.delete(this.actionUrl + id, { headers: this.headers });
    };
    CategoryService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, Configuration])
    ], CategoryService);
    return CategoryService;
}());
export { CategoryService };
//# sourceMappingURL=category-data.service.js.map