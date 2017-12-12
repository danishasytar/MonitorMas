import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { PassengerLocationPage } from '../passenger-location/passenger-location';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-location',
  templateUrl: 'location.html'
})
export class LocationPage {

	passengers;
	pass_number : any;
  constructor(public navCtrl: NavController, private http: HttpClient, private alertCtrl: AlertController) {
  	this.getData();
  }




  getData(){
       this.http.get('http://unwilled-children.000webhostapp.com/api/passenger',{} )
          .subscribe(data => {
            console.log(data);
				this.passengers	= data;                        
          }, err => {
            console.log(err);
          });


  }

  search(){
  	console.log(this.pass_number)
      	var flag = false;
      	for(var i=0; i<Object.keys(this.passengers).length;i++){
      		if(this.passengers[i].boarding_pass_number == this.pass_number.toUpperCase()){
      			console.log(this.pass_number)
      			flag = false;
      			this.navCtrl.push(PassengerLocationPage, {'myParam': this.pass_number.toUpperCase()});
      			break;
      		}
      		else{
      			flag = true;
      		}

      	}
      	if(flag){
    		  let alert = this.alertCtrl.create({
    		    title: 'No pass number found',
    		    buttons: ['OK']
    		  });
    		  alert.present();
      	}
        // if (!params) params = {};
        // this.navCtrl.push(ProfilePage);


  }





  goToPassengerLocation(params){
    if (!params) params = {};
    this.navCtrl.push(PassengerLocationPage);
  }
}
