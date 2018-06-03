import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { SportsService } from "../services/sports.service";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BienvenidoPage } from "../pages/bienvenido/bienvenido";
import { SportsPage } from "../pages/sports/sports";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BienvenidoPage,
    SportsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BienvenidoPage,
    SportsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SportsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
