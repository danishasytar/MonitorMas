import { Component } from '@angular/core';
import { NavController , AlertController} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-p-assenger',
  templateUrl: 'p-assenger.html'
})
export class PASSENGERPage {

		pass_number: any;

		passengers = [
		{"pass_number" : 'JL00008888', "name": 'MUHAMMAD DANISH ASYTAR', "departure": "2017-12-11T14:30:51.01"},
		{"pass_number" : 'JL00004444', "name": 'MUHAMMAD AHMAD', "departure": "2017-12-11T18:30:51.01"}
		]

  constructor(public navCtrl: NavController, private http: HttpClient, private alertCtrl: AlertController) {
  	this.getData();
  	console.log(this.passengers);
  }
  goToProfile(){
  	var flag = false;
  	for(var i=0; i<Object.keys(this.passengers).length;i++){
  		if(this.passengers[i].pass_number == this.pass_number.toUpperCase()){
  			console.log(this.pass_number)
  			flag = false;
  			this.navCtrl.push(ProfilePage, {'myParam': this.pass_number.toUpperCase()});
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
  getData(){
       this.http.get('http://unwilled-children.000webhostapp.com/api/type_meal',{} )
          .subscribe(data => {
            console.log();
                        
          }, err => {
            console.log(err);
          });
  }


}
