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
  username:string;
	title:string;
	month:string;
	day:string;
	location:string;
  start:string;
  end:string;
  description:string;
	//description:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('title'));
    this.username= navParams.get('user');
  	this.title = navParams.get('title');
  	this.month = navParams.get('month');
  	this.day = navParams.get('day');
    this.start = navParams.get('start');
    this.end = navParams.get('end');
  	this.location = navParams.get('location');
    this.description = navParams.get('description');
    console.log(this.description);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
