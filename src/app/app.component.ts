import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CryptoService } from '../services/crypto.service';
import { CryptoData } from '../Model/CryptoData';
import { CryptoComponent } from "./crypto/crypto.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CryptoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cryptoData: CryptoData | null = null;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService
    .getCryptoData()
    .subscribe(
      data => {
        this.cryptoData = data;
      },
      error => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }
}
