import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CryptoData } from '../Model/CryptoData';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private baseUrl = 'https://api.coingecko.com/api/v3';

  constructor(private http: HttpClient) { }

  getCryptoData(): Observable<CryptoData> {
    return this.http.get<CryptoData>(this.baseUrl).pipe(
      catchError(error => {
        console.error('Error fetching crypto data:', error);
        return throwError(error); // Rethrow it back to keep the observable error chain
      })
    );
  }
}
