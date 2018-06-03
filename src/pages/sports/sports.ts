import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SportsService } from "../../services/sports.service";

@Component({
  selector: 'page-sports',
  templateUrl: 'sports.html'
})
export class SportsPage {

  public sports = [];
  color;

  constructor(public navCtrl: NavController,
    private sportsService: SportsService) {
    this.sports = this.sportsService.usuario.sports;
    this.color = `background-color:${this.sports[0].color}`
  }

}
