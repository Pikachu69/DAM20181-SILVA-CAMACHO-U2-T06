import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportsService } from "../../services/sports.service";
import { SportsPage } from "../sports/sports";

@Component({
  selector: 'page-bienvenido',
  templateUrl: 'bienvenido.html'
})
export class BienvenidoPage {

  public usuario:any;
  constructor(public navCtrl: NavController,
  private sportsService:SportsService) {
    this.usuario=this.sportsService.usuario;
    this.sportsService= this.usuario.sports;
    console.log(this.usuario.sports);
  }

  showSports(){
    this.navCtrl.push(SportsPage);
  }

}