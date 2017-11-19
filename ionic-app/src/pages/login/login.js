var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { SignUpPage } from "../sign-up/sign-up";
import { MainPage } from "../main/main";
import { eventPage } from "../event-detail/event-detail";
import { addEventPage } from '../add-event/add-event';
import { userEventPage } from "../user-event/user-event";
import { Platform, ActionSheetController } from 'ionic-angular';
var LoginPage = /** @class */ (function () {
    function LoginPage(Platform, actionsheetCtrl) {
        this.Platform = Platform;
        this.actionsheetCtrl = actionsheetCtrl;
        this.SignUpPage = SignUpPage;
        this.MainPage = MainPage;
        this.eventPage = eventPage;
        this.userEventPage = userEventPage;
        this.addEventPage = addEventPage;
    }
    LoginPage.prototype.openMenu = function () {
        var actionsheet = this.actionsheetCtrl.create({
            title: 'albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.Platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite Clicked');
                    }
                }
            ]
        });
        actionsheet.present();
    };
    LoginPage = __decorate([
        Component({
            selector: 'home-page',
            templateUrl: "login.html"
        }),
        __metadata("design:paramtypes", [Platform,
            ActionSheetController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map