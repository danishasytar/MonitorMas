import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-lounge-status',
  templateUrl: 'lounge-status.html'
})
export class LoungeStatusPage {
	passengers;
	num_in = 0;
	num_out = 0;
  constructor(public navCtrl: NavController, private http: HttpClient) {



       this.http.get('http://unwilled-children.000webhostapp.com/api/passenger',{} )
          .subscribe(data => {
            console.log(data);
            for(var i=0;i<Object.keys(data).length;i++){
            	if(data[i].lounge_status == '1'){
            			this.num_out = this.num_out + 1
            	}
            	else{
						this.num_in = this.num_in	+ 1
            	}
            }
            console.log(this.num_in,this.num_out)

          }, err => {
            console.log(err);
          });







  }
  
}
