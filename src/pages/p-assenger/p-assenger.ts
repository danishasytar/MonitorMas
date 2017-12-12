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
		passengers: any;

  constructor(public navCtrl: NavController, private http: HttpClient, private alertCtrl: AlertController) {
  	this.getData();
  }
  
  goToProfile(){  
      	var flag = false;
      	for(var i=0; i<Object.keys(this.passengers).length;i++){
      		if(this.passengers[i].boarding_pass_number == this.pass_number.toUpperCase()){
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
       this.http.get('http://unwilled-children.000webhostapp.com/api/passenger',{} )
          .subscribe(data => {
            console.log(data);
				this.passengers	= data;                        
          }, err => {
            console.log(err);
          });


  }


}
