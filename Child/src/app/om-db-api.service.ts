import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OmDbApiService {
  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    console.log(query);
    // Implement API call to fetch movies/series data based on query
    // For example:
    return this.http.get(
      `http://www.omdbapi.com/?i=tt3896198&apikey=2761408c&s=${query}`,
    );
  }
}
