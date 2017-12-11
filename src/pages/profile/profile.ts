import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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

passengers = [
		{"pass_number" : 'JL00008888', "name": 'MUHAMMAD DANISH ASYTAR', "departure": "2017-12-11T14:30:51.01"},
		{"pass_number" : 'JL00004444', "name": 'MUHAMMAD AHMAD', "departure": "2017-12-11T18:30:51.01"}
		]
passengerDetail;
name = "";
  constructor(navParams: NavParams, public navCtrl: NavController) {
  
  	console.log(this.departuretimedisplay);
  	let myParam = navParams.get('myParam');
  	console.log(myParam)
  	for(var i=0;i<Object.keys(this.passengers).length;i++){
  		if(this.passengers[i].pass_number == myParam){
  			this.passengerDetail = this.passengers[i];
  		}
  	}
  	console.log(this.passengerDetail);
  	this.name = this.passengerDetail.name;
 	this.departuretime = new Date( this.passengerDetail.departure);
  	this.departuretimedisplay = this.departuretime.getHours() +':'+ this.departuretime.getMinutes()


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
