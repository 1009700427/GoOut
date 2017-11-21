import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { eventPage } from '../event-detail/event-detail';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
	eventPage = eventPage;
	username:string;
	fullname:string;
	id:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.fullname = navParams.get('fullname');
  	this.id = navParams.get('id');
  	this.username = navParams.get('username');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  
}
