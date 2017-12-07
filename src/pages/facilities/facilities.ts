import { Component } from '@angular/core';
import { NavController, LoadingController , AlertController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FacilitybytypePage} from '../facilitybytype/facilitybytype'



@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html'
})
export class FacilitiesPage {
  facility_type;

  constructor(public navCtrl: NavController, private http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  	this.getData();

  }


  gToFacility(facilitytypeid){
    console.log(facilitytypeid);
    this.navCtrl.push(FacilitybytypePage, {'myParam': facilitytypeid});

  }


  getData() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
     this.http.get('http://unwilled-children.000webhostapp.com/api/facility_type',{} )
          .subscribe(data => {
            this.facility_type = data;
            console.log(this.facility_type);
            loading.dismiss();
          }, err => {
            console.log(err);
            loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Coonection problem, try again',
              buttons: ['Dismiss']
            });

            alert.present();
            this.getDataBackup();
      });
            // this.getDataBackup();
          
  }

  getDataBackup(){

    this.facility_type = [{"id":"1","facility_type":"Shower Room"},{"id":"2","facility_type":"Rest Lounge"},{"id":"3","facility_type":"Sport Bar"},{"id":"4","facility_type":"PRM Washroom"}]

  }
  
}
