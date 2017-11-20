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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from "@angular/forms";
import { LimitedMainPage } from '../limited-main/limited-main';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.SignUpPage = SignUpPage;
        this.MainPage = MainPage;
        // addEventPage : addEventPage;
        this.LimitedMainPage = LimitedMainPage;
        this.backendURL = "http://goout.us-west-1.elasticbeanstalk.com/";
        this.navCtrl = navCtrl;
        this.loginForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(30)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }
    ;
    LoginPage.prototype.validateLogin = function (value) {
        var nav = this.navCtrl;
        var form = this.loginForm;
        var doc = document.getElementById('errorMessage');
        if (this.loginForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            var req_1 = new XMLHttpRequest();
            req_1.open("get", this.backendURL + "ValidateLogin?username=" + value.username + "&password=" + value.password);
            req_1.send();
            req_1.onreadystatechange = function () {
                if (req_1.readyState === XMLHttpRequest.DONE && req_1.status === 200) {
                    if (req_1.responseText.length > 0) {
                        doc.innerHTML = req_1.responseText;
                    }
                    else {
                        //clear the form
                        form.setValue({
                            username: '',
                            password: ''
                        });
                        doc.innerHTML = "";
                        nav.push(MainPage);
                    }
                }
            };
        }
    };
    ;
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'home-page',
            templateUrl: "login.html"
        }),
        __metadata("design:paramtypes", [NavController, NavParams, FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map