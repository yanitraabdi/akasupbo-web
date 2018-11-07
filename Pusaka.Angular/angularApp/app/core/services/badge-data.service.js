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
var BadgeService = (function () {
    function BadgeService(http, configuration) {
        this.http = http;
        this.actionUrl = configuration.Server + 'api/badges/';
        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }
    BadgeService.prototype.getAll = function () {
        return this.http.get(this.actionUrl, { headers: this.headers });
    };
    BadgeService.prototype.getSingle = function (id) {
        return this.http.get(this.actionUrl + id, { headers: this.headers });
    };
    BadgeService.prototype.add = function (badgeToAdd) {
        var toAdd = JSON.stringify({ BadgeName: badgeToAdd.BadgeName });
        return this.http.post(this.actionUrl, toAdd, { headers: this.headers });
    };
    BadgeService.prototype.update = function (id, itemToUpdate) {
        return this.http
            .put(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    };
    BadgeService.prototype.delete = function (id) {
        return this.http.delete(this.actionUrl + id, { headers: this.headers });
    };
    BadgeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, Configuration])
    ], BadgeService);
    return BadgeService;
}());
export { BadgeService };
//# sourceMappingURL=badge-data.service.js.map