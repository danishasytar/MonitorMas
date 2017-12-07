import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePagePage } from '../home-page/home-page';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToHomePage(params){
    if (!params) params = {};
    this.navCtrl.push(HomePagePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
}
