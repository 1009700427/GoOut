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
  	console.log(this.fullname);
  	this.id = navParams.get('id');
  	this.username = navParams.get('username');
  	this.getEvents();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  getEvents(){
  	let req = new XMLHttpRequest();
  	let page = this;
  	let url = "http://goout.us-west-1.elasticbeanstalk.com/GetFollowingEventList?userID=" + this.id;
  	req.open('get', url, true);
  	req.send();
  	console.log('gettingevents');
  	req.onreadystatechange = function(){
  		if(req.readyState === XMLHttpRequest.DONE && req.status === 200){
  			console.log(req.responseText);
  		}
  	}
  }
  
}
