import {Component} from '@angular/core';
import { SignUpPage } from "../sign-up/sign-up";
import { MainPage } from "../main/main";
import { eventPage } from "../event-detail/event-detail";
import { addEventPage } from '../add-event/add-event';
import { userEventPage } from "../user-event/user-event";
import {Platform, ActionSheetController} from 'ionic-angular';

@Component({
	selector: 'home-page',
	templateUrl: "login.html"

})

export class LoginPage{
	SignUpPage = SignUpPage;
	MainPage = MainPage;
	eventPage = eventPage;
	userEventPage = userEventPage;
	addEventPage = addEventPage;
	constructor(
		public Platform: Platform, 
		public actionsheetCtrl: ActionSheetController
	){}
	
	openMenu(){
		let actionsheet = this.actionsheetCtrl.create({
			title: 'albums',
			cssClass: 'action-sheets-basic-page', 
			buttons:[
			{
				text: 'Delete',
				role: 'destructive',
				icon:!this.Platform.is('ios') ? 'heart-outline': null,
				handler: () => {
					console.log('Favorite Clicked');
				}
			}
			]
		});
		actionsheet.present();
	}
}