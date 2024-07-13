import { Component } from '@angular/core';
import { CryptoData } from '../../Model/CryptoData';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.css'
})
export class CryptoComponent {
  title = 'titulo';

  cryptoData: CryptoData | null = null;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptoData().subscribe(
      data => {
        this.cryptoData = data;
      },
      error => {
        console.error('Erro ao buscar dados:', error);
      }
    );
  }
}
