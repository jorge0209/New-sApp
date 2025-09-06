import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'https://newsapi.org/v2';
  private apiKey = 'e4192c276f6844f3b32a7d1ced94ba05';

  constructor(private http: HttpClient) {}

  getTopHeadlines(country: string = 'us'): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-headlines?country=${country}&apiKey=${this.apiKey}`);
  }

  getByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-headlines?country=us&category=${category}&apiKey=${this.apiKey}`);
  }
}
