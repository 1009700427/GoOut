import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';

/**
 * Generated class for the FindPeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface User{
  id:string;
  username:string;
  fullname:string;
}
@Component({

  selector: 'page-find-people',
  templateUrl: 'find-people.html',
})
export class FindPeoplePage {
    UserPage = UserPage;
	term: string;
  users = [] as User[];
  nav :NavController;
  constructor(public viewCtrl: ViewController, public params: NavParams, public navCtrl:NavController) {
  	console.log("inside construtor of find people");
  	this.term = params.get('term');
    this.nav = navCtrl;
  	console.log('passed parameter is'+ this.term);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPeoplePage');
  }
   dismiss() {
    this.users=[];
    this.viewCtrl.dismiss();
  }
  search(){
    let sTerm = this.term;
    let page = this;
    var req = new XMLHttpRequest();
    req.open("get", "http://goout.us-west-1.elasticbeanstalk.com/FindUserBySearchTerm?searchTerm="+sTerm,true);
    req.send();
    req.onreadystatechange = function(){
      if(req.readyState === XMLHttpRequest.DONE && req.status === 200){
        console.log(req.responseText);
        if(req.responseText.length > 0){
          console.log("eventFound");
          var split = req.responseText.split("\n");
         var userIDs = page.arraytify(split[0]);
          var usernames = page.arraytify(split[1]);
          //console.log("userIDS" + userIDs);
          var fullNames = page.arraytify(split[2]);
          // for(var i = 0; i < userIDs.length; i++){
          //   console.log(page.findUser(userIDs[i]));
          // }
          for(var i = 0; i < userIDs.length; i++){
            //let user = page.findUser(userIDs[i]);
            page.addUser(userIDs[i], usernames[i], fullNames[i]);
          }
        }
        else{
          console.log('notfound');
        }
      }
    }
  }
  addUser(id:string, username:string, fullname:string){
    this.users.push({id:id, username:username, fullname:fullname});
  }
  viewDetails(user){
    this.nav.push(UserPage, {id:user.id, username:user.username, fullname:user.fullname});
  }
  arraytify(value:any){
    return value.replace(/[\[\]']+/g,'').split(',')
  }
}
