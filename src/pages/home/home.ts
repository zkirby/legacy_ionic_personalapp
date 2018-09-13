import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchPage } from '../launch/launch';

/* 
TODO:
	add nav swipe functionality
	import svg for logo
	possible re coloring of background (maybe darker)
*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

  // Navigate to Launch Page
  navNext() {
   	this.navCtrl.push(LaunchPage); 
  }

  ionViewDidLoad() {
    console.log('HomePage Loaded!');
  }

}
