import { Component, OnInit } from '@angular/core';
import { VicthoriaWalletService } from '../victhoria-wallet.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class VicthoriaCurrencyComponent implements OnInit {

  constructor(public newWalletService: VicthoriaWalletService) { }

  ngOnInit() {this.newWalletService.atualizar();
  }

  atualizar () {
    this.newWalletService.atualizar();
  }

}