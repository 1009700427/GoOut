import { Component } from '@angular/core';
import { NavParams, ViewController} from 'ionic-angular';
import { eventPage } from '../event-detail/event-detail';


@Component({
  selector: 'page-find-events',
  templateUrl: 'find-events.html',
})
export class FindEventsPage {
	term: string;
  eventPage = eventPage;

  constructor (public viewCtrl: ViewController, params: NavParams) {
  	
  	console.log("inside construtor of find events");
  	this.term = params.get('term');
  	console.log('passed parameter is'+ this.term);
  }

  ionViewDidLoad() {
    // console.log(term);
  }
  search(){
    let sTerm = this.term;
    var req = new XMLHttpRequest();
    req.open("get", "http://goout.us-west-1.elasticbeanstalk.com/FindEventBySearchTerm?searchTerm="+sTerm,true);
    req.send();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  arraytify(array){
    return array.replace(/[\[\]']+/g,'').split(',')
  }
}
