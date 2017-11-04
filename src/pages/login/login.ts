import {Component} from '@angular/core';

import {Platform, ActionSheetController} from 'ionic-angular';

@Component({
	selector: 'home-page',
	templateUrl: "login.html"

})

export class LoginPage{
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