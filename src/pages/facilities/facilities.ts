import { Component } from '@angular/core';
import { NavController, LoadingController , AlertController} from 'ionic-angular';
import { FacilitybytypePage} from '../facilitybytype/facilitybytype'
import { ApiProvider } from './../../providers/api/api';




@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html'
})
export class FacilitiesPage {
  facility_type;

  constructor(public api:ApiProvider, public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
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
     this.api.getdata('/api/facility_type',{} )
          .then(data => {
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
      });
          
  }

  
}
