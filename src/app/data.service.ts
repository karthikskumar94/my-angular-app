import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { InMemoryDataService } from './in-memory-data.service';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = 'assets/Data/data.json';
  private localStorageKey = 'servicesData';

  constructor(private http: HttpClient) { }

  private loadInitialData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      tap(data => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(data));
      }),
      catchError(error => {
        console.error('Error loading initial data ', error);
        return of([]);
      })
    );
  }

  getData(): Observable<any[]> {
    const data = localStorage.getItem(this.localStorageKey);
    if (data) {
      return of(JSON.parse(data));
    } else {
      return this.loadInitialData();
    }
  }

  updateData(services: any[]): Observable<void> {
    localStorage.setItem(this.localStorageKey, JSON.stringify(services));
    return of();
  }

}