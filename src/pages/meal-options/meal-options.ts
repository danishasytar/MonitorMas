import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MealStatusBreakfastPage } from '../meal-status-breakfast/meal-status-breakfast';
import { MealStatusLunchPage } from '../meal-status-lunch/meal-status-lunch';
import { MealStatusDinnerPage } from '../meal-status-dinner/meal-status-dinner';

@Component({
  selector: 'page-meal-options',
  templateUrl: 'meal-options.html'
})
export class MealOptionsPage {

  constructor(public navCtrl: NavController) {
  }
  goToMealStatusBreakfast(params){
    if (!params) params = {};
    this.navCtrl.push(MealStatusBreakfastPage);
  }goToMealStatusLunch(params){
    if (!params) params = {};
    this.navCtrl.push(MealStatusLunchPage);
  }goToMealStatusDinner(params){
    if (!params) params = {};
    this.navCtrl.push(MealStatusDinnerPage);
  }
}
