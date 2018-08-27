import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Configuration } from './../../app.constants';
import { Badge } from './../../models/badge';

@Injectable()
export class BadgeService {

    private actionUrl: string;
    private headers: HttpHeaders;

    constructor(private http: HttpClient, configuration: Configuration) {

        this.actionUrl = configuration.Server + 'api/badges/';

        this.headers = new HttpHeaders();
        this.headers = this.headers.set('Content-Type', 'application/json');
        this.headers = this.headers.set('Accept', 'application/json');
    }

    getAll(): Observable<Badge[]> {
        return this.http.get<Badge[]>(this.actionUrl, { headers: this.headers });
    }

    getSingle(id: number): Observable<Badge> {
        return this.http.get<Badge>(this.actionUrl + id, { headers: this.headers });
    }

    add(badgeToAdd: Badge): Observable<Badge> {
        const toAdd = JSON.stringify({ BadgeName: badgeToAdd.BadgeName });

        return this.http.post<Badge>(this.actionUrl, toAdd, { headers: this.headers });
    }

    update(id: number, itemToUpdate: any): Observable<Badge> {
        return this.http
            .put<Badge>(this.actionUrl + id, JSON.stringify(itemToUpdate), { headers: this.headers });
    }

    delete(id: number): Observable<any> {
        return this.http.delete<any>(this.actionUrl + id, { headers: this.headers });
    }
}
