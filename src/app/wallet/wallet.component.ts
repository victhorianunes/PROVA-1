import { Component, OnInit } from '@angular/core';
import { VicthoriaWalletService } from '../victhoria-wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class VicthoriaWalletComponent implements OnInit {

  constructor(public newWalletService: VicthoriaWalletService) { }

  saldoInput: number = 0

  ngOnInit() {
  }

}