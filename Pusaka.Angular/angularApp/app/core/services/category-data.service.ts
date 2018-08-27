import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Configuration } from './../../app.constants';
import { Category, ListCategory } from './../../models/category';

@Injectable()
export class CategoryService {

    private actionUrl: string;
    private headers: HttpHeaders;

    constructor(private http: HttpClient, configuration: Configuration) {

        this.actionUrl = configuration.ApiUrl + 'api/Category/';

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    getAll(): Observable<ListCategory> {
        return this.http.get<ListCategory>(this.actionUrl, { headers: this.headers });
    }

    getSingle(id: number): Observable<Category> {
        return this.http.get<Category>(this.actionUrl + id, { headers: this.headers });
    }

    add(categoryToAdd: Category): Observable<Category> {
        const toAdd = JSON.stringify({ CategoryName: categoryToAdd.CategoryName, Tag: categoryToAdd.Tag, ImageFile: categoryToAdd.ImageFile });

        return this.http.post<Category>(this.actionUrl, toAdd, { headers: this.headers });
    }

    update(id: number, itemToUpdate: any): Observable<Category> {
        return this.http
            .put<Category>(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.actionUrl + id, { headers: this.headers });
    }
}
