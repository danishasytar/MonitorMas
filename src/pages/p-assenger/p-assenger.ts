import { Component } from '@angular/core';
import { NavController , AlertController} from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { ApiProvider } from './../../providers/api/api';



@Component({
  selector: 'page-p-assenger',
  templateUrl: 'p-assenger.html'
})
export class PASSENGERPage {

		pass_number: any;
		passengers: any;

  constructor(public api:ApiProvider, public navCtrl: NavController, private alertCtrl: AlertController) {
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
       this.api.getdata('/api/passenger',{} )
          .then(data => {
            console.log(data);
				this.passengers	= data;                        
          }, err => {
            console.log(err);
          });


  }


}
