import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CameraTabDefaultPagePage } from '../pages/camera-tab-default-page/camera-tab-default-page';
import { CartTabDefaultPagePage } from '../pages/cart-tab-default-page/cart-tab-default-page';
import { CloudTabDefaultPagePage } from '../pages/cloud-tab-default-page/cloud-tab-default-page';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { HomePagePage } from '../pages/home-page/home-page';
import { LoginPage } from '../pages/login/login';
import { PASSENGERPage } from '../pages/p-assenger/p-assenger';
import { LocationPage } from '../pages/location/location';
import { PassengerLocationPage } from '../pages/passenger-location/passenger-location';
import { LoungeStatusPage } from '../pages/lounge-status/lounge-status';
import { LoungeLocationMappingPage } from '../pages/lounge-location-mapping/lounge-location-mapping';
import { BoardingNotificationsPage } from '../pages/boarding-notifications/boarding-notifications';
import { MealStatusBreakfastPage } from '../pages/meal-status-breakfast/meal-status-breakfast';
import { MealStatusLunchPage } from '../pages/meal-status-lunch/meal-status-lunch';
import { MealStatusDinnerPage } from '../pages/meal-status-dinner/meal-status-dinner';
import { PagePage } from '../pages/page/page';
import { ProfilePage } from '../pages/profile/profile';
import { FacilitiesPage } from '../pages/facilities/facilities';
import { MealOptionsPage } from '../pages/meal-options/meal-options';
import { Page2Page } from '../pages/page2/page2';
import { FacilitybytypePage} from '../pages/facilitybytype/facilitybytype'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';

import { Device} from '@ionic-native/device';
import { HTTP} from '@ionic-native/http';


@NgModule({
  declarations: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    HomePagePage,
    LoginPage,
    PASSENGERPage,
    LocationPage,
    PassengerLocationPage,
    LoungeStatusPage,
    LoungeLocationMappingPage,
    BoardingNotificationsPage,
    MealStatusBreakfastPage,
    MealStatusLunchPage,
    MealStatusDinnerPage,
    PagePage,
    ProfilePage,
    FacilitiesPage,
    MealOptionsPage,
    Page2Page,
    FacilitybytypePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CameraTabDefaultPagePage,
    CartTabDefaultPagePage,
    CloudTabDefaultPagePage,
    TabsControllerPage,
    HomePagePage,
    LoginPage,
    PASSENGERPage,
    LocationPage,
    PassengerLocationPage,
    LoungeStatusPage,
    LoungeLocationMappingPage,
    BoardingNotificationsPage,
    MealStatusBreakfastPage,
    MealStatusLunchPage,
    MealStatusDinnerPage,
    PagePage,
    ProfilePage,
    FacilitiesPage,
    MealOptionsPage,
    Page2Page,
    FacilitybytypePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Device,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}