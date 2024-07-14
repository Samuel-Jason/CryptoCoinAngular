import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { CryptoData } from '../Model/CryptoData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cryptoData: CryptoData | null = null;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptoData().subscribe(
      (data: CryptoData) => {
        // Recebe um único objeto CryptoData
        this.cryptoData = data;
      },
      error => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }
}
