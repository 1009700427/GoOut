import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { eventPage } from '../event-detail/event-detail';

export interface Event{
  title: string;
  location: string;
  month: string;
  day: string;
  startTime: string;
  endTime: string;
}

@Component({
  selector: 'page-find-events',
  templateUrl: 'find-events.html'
})
export class FindEventsPage {
	term: string;
  eventPage = eventPage;
  events = [] as Event[];
  nav : NavController;
  constructor (public viewCtrl: ViewController, params: NavParams, public navCtrl: NavController) {
  	this.nav = navCtrl;
  	console.log("inside construtor of find events");
  	this.term = params.get('term');
    this.search();
  	console.log('passed parameter is '+ this.term);
  }

  ionViewDidLoad() {
    // console.log(term);
    // this.search();
  }
  search(){
    let sTerm = this.term;
    let page = this;
    var req = new XMLHttpRequest();
    req.open("get", "http://goout.us-west-1.elasticbeanstalk.com/FindEventBySearchTerm?searchTerm="+sTerm,true);
    req.send();
    req.onreadystatechange = function(){
      if(req.readyState === XMLHttpRequest.DONE && req.status === 200){
        console.log(req.responseText);
        if(req.responseText.length > 0){
          console.log("eventFound");
          var split = req.responseText.split("\n");
          var eventTitle = page.arraytify(split[0]);
          var userIDs = page.arraytify(split[1]);
          var eventLocation = page.arraytify(split[2]);
          var eventMonths = page.arraytify(split[3]);
          var eventDays = page.arraytify(split[4]);
          var eventStart = page.arraytify(split[5]);
          var eventEnd = page.arraytify(split[6]); 
          for(var i = 0; i < eventTitle.length; i++){
            page.addEvent(eventTitle[i],eventLocation[i], eventMonths[i],eventDays[i], eventStart[i], eventEnd[i]);
          }
        }
        else{

        }
      }
    }
  }
  addEvent(title:string, location:string, month:string, day:string, start:string, end:string){
    this.events.push({title:title, location: location, month:month, day: day, startTime:start, endTime:end});
  }
  dismiss() {
    this.events = [];
    this.viewCtrl.dismiss();
  }
  arraytify(value:any){
    return value.replace(/[\[\]']+/g,'').split(',')
  }
  // viewDetails(title:string, location:string, month:string, day:string, start:string, end:string){
  //   this.nav.push(eventPage, {title:title, location:location, month:month, day:day, start:start, end:end});
  // }
  viewDetails(event){
    this.nav.push(eventPage, {title:event.title, location:event.location, month: event.month, day:event.day, start:event.startTime, end:event.endTime});
  }
}
