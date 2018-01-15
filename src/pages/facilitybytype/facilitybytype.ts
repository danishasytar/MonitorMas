import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController, LoadingController} from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-facilitybytype',
  templateUrl: 'facilitybytype.html',
})
export class FacilitybytypePage {

	facility;
  name;
  typeid;
  flag = true;
  number1 = 1;
  number2 = 1;

  constructor(public api:ApiProvider, public navCtrl: NavController, navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  	this.getData();
    let myParam = navParams.get('myParam');
    console.log(myParam.id);
    console.log(myParam.id);
    this.typeid = myParam.id
    this.name = myParam.facility_type;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilitybytypePage');
  }

  getData() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
     this.api.getdata('/api/facility',{} )
          .then(data => {
            this.facility = data;
            console.log(this.facility);
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
