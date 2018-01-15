import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { ApiProvider } from './../../providers/api/api';


@Component({
  selector: 'page-passenger-location',
  templateUrl: 'passenger-location.html'
})
export class PassengerLocationPage {
	passengers;
	passengersdetails;
	myParam;
  imageurl;

  constructor(public api:ApiProvider, public navParams: NavParams,public navCtrl: NavController) {
  	    this.myParam = navParams.get('myParam');

    	this.getData();


  }


  getData(){
       this.api.getdata('/api/passenger',{} )
          .then(data => {
            console.log(data);
				this.passengers	= data;    
		    	for(var i=0; i<this.passengers.length; i++){
		    		if(this.myParam == this.passengers[i].boarding_pass_number){
		    			this.passengersdetails = this.passengers[i];
			              this.imageurl = 'assets/img/location/'+this.passengers[i].location+'.jpg'
			              console.log(this.imageurl);
		    		}
		    	}  
          	console.log(this.passengersdetails)
          }, err => {
            console.log(err);
          });

  }
  
}
