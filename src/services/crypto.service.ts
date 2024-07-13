import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { CryptoData } from '../Model/CryptoData';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private baseUrl = 'https://localhost:5001/api/crypto';

  constructor(private http: HttpClient) { }

  getCryptoData(): Observable<CryptoData> {
    return this.http.get<CryptoData>(this.baseUrl);
  }
}
