import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController, LoadingController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the FacilitybytypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, navParams: NavParams, private http: HttpClient, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
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
     this.http.get('http://unwilled-children.000webhostapp.com/api/facility',{} )
          .subscribe(data => {
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
            // this.getDataBackup();
        });
            // this.getDataBackup();
          
  }

   getDataBackup(){
    this.facility =[{"id":"2","name":"Rest Lounge 1","type":"2","status":"occuipied","location":""},{"id":"3","name":"Sport Bar 1","type":"3","status":"Available","location":""},{"id":"18","name":"Sport Bar 2","type":"3","status":"Available","location":"2"},{"id":"19","name":"PRM Washroom 1","type":"4","status":"Available","location":"2"},{"id":"21","name":"Shower Room 1","type":"1","status":"","location":""},{"id":"22","name":"Shower Room 1","type":"1","status":"","location":"2"},{"id":"23","name":"Shower Room 2","type":"1","status":"","location":"2"}]

  }

}
