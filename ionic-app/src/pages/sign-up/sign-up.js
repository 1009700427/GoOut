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
import { LoginPage } from "../login/login";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { LimitedMainPage } from '../limited-main/limited-main';
import { PasswordValidation } from './PasswordValidation';
import 'rxjs/add/operator/do';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        //need to insert the proper servlet name
        this.LoginPage = LoginPage;
        this.LimitedMainPage = LimitedMainPage;
        this.backendURL = "http://goout.us-west-1.elasticbeanstalk.com/";
        this.navCtrl = navCtrl;
        this.signUpForm = formBuilder.group({
            fullname: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.maxLength(30)])],
            username: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(30)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
            confirmPassword: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
        }, {
            validator: PasswordValidation.MatchPassword
        });
    }
    ;
    // ionViewDidLoad() {
    // 	console.log('ionViewDidLoad SignUpPage');
    // }
    SignUpPage.prototype.validateSignUp = function (value) {
        var doc = document.getElementById('error');
        if (this.signUpForm.valid) {
            //params:
            //fullname
            //username
            //password
            var nav_1 = this.navCtrl;
            var req_1 = new XMLHttpRequest();
            var urlADD = this.backendURL + "AddNewUser?username=" + value.username + "&password=" + value.password + "&fullName=" + value.fullname + "&private=false";
            var urlVAL = this.backendURL + "ValidateInfo?username=" + value.username + "&password=" + value.password + "&fullName=" + value.fullname;
            var val_1 = new XMLHttpRequest();
            console.log(urlVAL);
            val_1.open("get", urlVAL, true);
            req_1.open("get", urlADD, true);
            val_1.send();
            val_1.onreadystatechange = function () {
                if (val_1.readyState === XMLHttpRequest.DONE && val_1.status === 200) {
                    if (val_1.responseText.length > 0) {
                        console.log(val_1.responseText);
                        doc.innerHTML = val_1.responseText;
                    }
                    else {
                        req_1.send();
                    }
                }
            };
            req_1.onreadystatechange = function () {
                if (req_1.readyState === XMLHttpRequest.DONE && req_1.status === 200) {
                    nav_1.push(LoginPage);
                }
            };
        }
    };
    SignUpPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-sign-up',
            templateUrl: 'sign-up.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, FormBuilder])
    ], SignUpPage);
    return SignUpPage;
}());
export { SignUpPage };
//# sourceMappingURL=sign-up.js.map