import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VicthoriaWalletComponent } from './wallet/wallet.component';
import { VicthoriaCurrencyComponent } from './currency/currency.component';

import { VicthoriaWalletService } from './victhoria-wallet.service';

@NgModule({
  imports:      [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot (
      [
        {path: '', component: VicthoriaCurrencyComponent},
        {path: 'currency', component: VicthoriaCurrencyComponent},
        {path: 'wallet', component: VicthoriaWalletComponent}
      ]
    )],

  declarations: [ AppComponent, HelloComponent, NavbarComponent, VicthoriaWalletComponent, VicthoriaCurrencyComponent ],
  providers: [VicthoriaWalletService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
