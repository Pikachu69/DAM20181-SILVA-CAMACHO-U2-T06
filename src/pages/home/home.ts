import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportsService } from "../../services/sports.service";
import { BienvenidoPage } from "../bienvenido/bienvenido";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: '';
  user: any;
  mensaje: string = '';
  data: any;

  constructor(public navCtrl: NavController,
    private sportsService: SportsService) {
  }

  login() {
    this.data = this.sportsService.data;
    this.data.forEach(element => {
      if(element.email==this.email){
        this.sportsService.usuario=element;
       this.navCtrl.push(BienvenidoPage);
      }
      this.mensaje= "USER NOT FOUND";
    });
  }
}
