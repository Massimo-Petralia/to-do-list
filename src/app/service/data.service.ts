import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  resourcesUrl: string = 'http://localhost:3000/items';

  getItems() {
    return this.http.get<Item[]>(this.resourcesUrl).pipe(
      catchError((error) => {
        console.error('loading list failed: ', error);
        throw error;
      })
    );
  }

  create(item: Item) {
    return this.http.post<Item>(this.resourcesUrl, item).pipe(
      catchError((error) => {
        console.error('addition failed:', error);
        throw error;
      })
    );
  }

  update(item: Item) {
    return this.http.put<Item>(`${this.resourcesUrl}/${item.id}`, item).pipe(
      catchError((error) => {
        console.error('data update failed: ', error);
        throw error;
      })
    );
  }

  delete(id: number | string | null) {
    return this.http.delete(`${this.resourcesUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('deletion failed: ', error);
        throw error;
      })
    );
  }

  check(item: Item, check: Partial<Item>): Observable<Item> {
    return this.http.patch<Item>(`${this.resourcesUrl}/${item.id}`, check).pipe(
      catchError((error) => {
        console.error('update check failded: ', error);
        throw error;
      })
    );
  }

  UpdateImage(imageItem: Item, imageDataUrl: Partial<Item>): Observable<Item> {
    return this.http
      .patch<Item>(`${this.resourcesUrl}/${imageItem.id}`, imageDataUrl)
      .pipe(
        catchError((error) => {
          console.log('path imageData error');
          throw error;
        })
      );
  }
}
