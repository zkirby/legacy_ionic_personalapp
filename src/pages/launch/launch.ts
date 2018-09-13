import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html'
})
export class LaunchPage {

  constructor(public navCtrl: NavController) {

  }

  navPrev() {
  	this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('LaunchPage Loaded!');
  }

  navProf() {

  }

  navPer(){
    
  }

}
