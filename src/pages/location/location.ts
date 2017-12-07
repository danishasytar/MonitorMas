import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PassengerLocationPage } from '../passenger-location/passenger-location';

@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

  constructor(public navCtrl: NavController) {
  }
  goToPassengerLocation(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerLocationPage);
  }
}
