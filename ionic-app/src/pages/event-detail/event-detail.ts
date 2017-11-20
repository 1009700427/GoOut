import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class eventPage {
	title:string;
	time: string;
	month:string;
	day:string;
	location:string;
	//description:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('title'));
  	this.title = navParams.get('title');
  	this.time = navParams.get('time');
  	this.month = navParams.get('month');
  	this.day = navParams.get('day');
  	this.location = navParams.get('location');
  	//add description later
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
