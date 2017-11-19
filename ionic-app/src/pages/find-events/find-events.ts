import { Component } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';






@Component({
  selector: 'page-find-events',
  templateUrl: 'find-events.html',
})
export class FindEventsPage {
	term: string;

  constructor (public viewCtrl: ViewController, params: NavParams) {
  	
  	console.log("inside construtor of find events");
  	this.term = params.get('term');
  	console.log('passed parameter is'+ this.term);
  }

  ionViewDidLoad() {
    // console.log(term);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
