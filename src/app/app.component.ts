import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoungeStatusPage } from '../pages/lounge-status/lounge-status';
import { BoardingNotificationsPage } from '../pages/boarding-notifications/boarding-notifications';
import { PASSENGERPage } from '../pages/p-assenger/p-assenger';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';
import { LocationPage } from '../pages/location/location';
import { PassengerLocationPage } from '../pages/passenger-location/passenger-location';
import { FacilitiesPage } from '../pages/facilities/facilities';


import { HomePagePage } from '../pages/home-page/home-page';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePagePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToLoungeStatus(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoungeStatusPage);
  }goToBoardingNotifications(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BoardingNotificationsPage);
  }goToPASSENGER(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PASSENGERPage);
  }goToProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }goToHomePage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePagePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToLocation(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LocationPage);
  }goToPassengerLocation(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PassengerLocationPage);
  }goToFacilities(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FacilitiesPage);
  }
}
