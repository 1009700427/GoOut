import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { eventPage } from '../event-detail/event-detail';

export interface Event{
  id:string;
  title: string;
  user: string;
  location: string;
  month: string;
  day: string;
  startTime: string;
  endTime: string;
  description:string;
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
    //this.search();
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
          console.log(req.responseText);
          console.log("eventFound");
          var split = req.responseText.split("\n");

          var eventID = page.arraytify(split[0]);
          if(eventID.length > 0  && eventID[0] != ''){
            console.log(eventID.length);
            var eventTitle = page.arraytify(split[1]);
            var usernames = page.arraytify(split[2]);
            //console.log("userIDS" + userIDs);
            var eventLocation = page.arraytify(split[3]);
            var eventMonths = page.arraytify(split[4]);
            var eventDays = page.arraytify(split[5]);
            var eventStart = page.arraytify(split[6]);
            var eventEnd = page.arraytify(split[7]); 
            var descrip = page.arraytify(split[8]);
            for(var i = 0; i < eventTitle.length; i++){
            //let user = page.findUser(userIDs[i]);
            page.addEvent(eventID[i],eventTitle[i], usernames[i], eventLocation[i], eventMonths[i],eventDays[i], eventStart[i], eventEnd[i], descrip[i]);
            }
          }
          else{
            console.log('notfound');
          }
          
          // for(var i = 0; i < userIDs.length; i++){
          //   console.log(page.findUser(userIDs[i]));
          // }
          
        }
      }
    }
  }
  addEvent(id: string, title:string, user:string, location:string, month:string, day:string, start:string, end:string, descrip:string){
    this.events.push({id: id, title:title, user:user, location: location, month:month, day: day, startTime:start, endTime:end, description:descrip});
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
    this.nav.push(eventPage, {id: event.id, title:event.title, user:event.user, location:event.location,
      month: event.month, day:event.day, start:event.startTime, end:event.endTime,
      description:event.description});
  }
  // findUser(userID:string): any{
  //   let req = new XMLHttpRequest();
  //   let page = this;
  //   console.log("looking for " + userID);
  //   req.open("get","http://goout.us-west-1.elasticbeanstalk.com/FindUserByID?userID="+userID, true);
  //   req.send();
  //   req.onreadystatechange = function(){
  //     if(req.readyState === XMLHttpRequest.DONE && req.status === 200){
  //       //got a username back
  //       if(req.responseText.length > 0){
  //         console.log("response from userID" + req.responseText);
  //         let username = page.arraytify(req.responseText);
  //         console.log(username);
  //         return username;
  //       }
  //     }
  //   }
  // }
}
