import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AccountService } from '../services/domain/account.service';
import { CustomerService } from '../services/domain/customer.service';
import { IndividualService } from '../services/domain/individual.service';
import { HttpClientModule } from '@angular/common/http';
import { BusinessService } from '../services/domain/business.service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AccountService,
    BusinessService,
    CustomerService,
    IndividualService,
    SplashScreen,
    StatusBar,
  ]
})
export class AppModule { }
