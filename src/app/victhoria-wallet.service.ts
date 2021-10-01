import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BtcRateUSD {
      bpi: {
        USD: { 
          rate_float: number;
        };
        BRL: {
          rate_float: number;
        };
      }
    }

    interface BtcRateEUR {
      bpi: {
        EUR: {
          rate_float: number;
        };
      };
    }

@Injectable()
export class VicthoriaWalletService {

    constructor(private http: HttpClient) {}
   
   btcRatesUSD: Array<BtcRateUSD> = [];
   btcRatesEUR: Array<BtcRateEUR> = [];
   saldo: number=0;

    updateBtcUSD () {
     this.http.get<BtcRateUSD>
     ('https://api.coindesk.com/v1/bpi/currentprice/BRL.json').subscribe((data) => {
       this.btcRatesUSD.push(data);
     })}
    
    updateBtcEUR () {
      this.http.get<BtcRateEUR> ('https://api.coindesk.com/v1/bpi/currentprice.json').subscribe((data) => {
        this.btcRatesEUR.push(data);
      });
    }

    atualizar () {
      setInterval ( () => {
        this.updateBtcUSD ();
        this.updateBtcEUR();
      }, 60000);
    }

    depositar (valor: number) {
      this.saldo = this.saldo + valor / this.btcRatesUSD[this.btcRatesUSD.length - 1].bpi.BRL.rate_float;
    }

    sacar (valor: number) {
      if (valor / this.btcRatesUSD[this.btcRatesUSD.length -1].bpi.BRL.rate_float <= this.saldo) {
        this.saldo = this.saldo - valor / this.btcRatesUSD [this.btcRatesUSD.length -1].bpi.BRL.rate_float;
      }
    }

    meuSaldo () {
      return this.saldo;
    }

   }

 


