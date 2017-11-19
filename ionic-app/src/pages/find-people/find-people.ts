import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';

/**
 * Generated class for the FindPeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({

  selector: 'page-find-people',
  templateUrl: 'find-people.html',
})
export class FindPeoplePage {
    UserPage = UserPage;
	term: string;
  constructor(public viewCtrl: ViewController, public params: NavParams) {
  	console.log("inside construtor of find people");
  	this.term = params.get('term');
  	console.log('passed parameter is'+ this.term);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindPeoplePage');
  }
   dismiss() {
    this.viewCtrl.dismiss();
  }
}
