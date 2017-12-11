import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


export interface CountdownTimer {
  seconds: number;
  secondsRemaining: number;
  runTimer: boolean;
  hasStarted: boolean;
  hasFinished: boolean;
  displayTime: string;
}


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})

export class ProfilePage {
departuretime;
departuretimedisplay;

passengers : any;
passengerDetail;
name = "";
  constructor(public navParams: NavParams, public navCtrl: NavController, private http: HttpClient) {

  	this.getdata();
  



  }

  getdata(){
	this.http.get('http://unwilled-children.000webhostapp.com/api/passenger',{} )
	  .subscribe(data => {
	    console.log(data);
			this.passengers	= data;  
  	console.log(this.passengers);
  	let myParam = this.navParams.get('myParam');
  	console.log(myParam)
  	for(var i=0;i<Object.keys(this.passengers).length;i++){
  		if(this.passengers[i].boarding_pass_number == myParam){
  			this.passengerDetail = this.passengers[i];
  		}
  	}
  	console.log(this.passengerDetail);
  	this.name = this.passengerDetail.passenger_name;
 	this.departuretime = new Date( this.passengerDetail.departure);
  	this.departuretimedisplay = this.departuretime.getHours() +':'+ this.departuretime.getMinutes()                      
	  }, err => {
	    console.log(err);
	  });
  }
  
  gettime(): number {
    var d = new Date("2017-12-11T14:30:51.01"); 
    var d2 = new Date(); // for now
    console.log(d2)
    console.log(d)
    return (d.getTime()-d2.getTime())/1000;

  }

  timeInSeconds: number = this.gettime();
  timer: CountdownTimer;


  ngOnInit() {
    this.initTimer();
    this.startTimer();
  }

  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      } else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }
}
