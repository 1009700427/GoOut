import { Component } from '@angular/core';
import { LoginPage } from "../login/login";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { Http } from '@angular/http';
import { MainPage } from "../main/main";
import { LimitedMainPage } from '../limited-main/limited-main';

import { HttpClient, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/do';
/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-sign-up',
 	templateUrl: 'sign-up.html',
 })
 export class SignUpPage {
 	//need to insert the proper servlet name
 	
 	LoginPage = LoginPage;
 	signUpForm : FormGroup;
 	LimitedMainPage = LimitedMainPage;
 	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: Http) {
 	backendURL : string  = "http://goout.us-west-1.elasticbeanstalk.com/";
 	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient) {
 		this.navCtrl = navCtrl;
 		this.signUpForm = formBuilder.group({
 			fullname: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.maxLength(30)])],
 			username: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(30)])],
 			password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(30)])],
 			confirmPassword: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
 		});
 	};

 	// ionViewDidLoad() {
 	// 	console.log('ionViewDidLoad SignUpPage');
 	// }
 	validateSignUp(value: any): void{
 		if(this.signUpForm.valid){
 			console.log("valid");
 			window.localStorage.setItem('username', value.username);
 			window.localStorage.setItem('fullname', value.fullname);
 			//params:
 			//fullname
 			//username
 			//password
 			//let headers = new HttpHeaders()
 			let req = new XMLHttpRequest();
 			
 			req.open("get", this.backendURL + "AddNewUser?username="+value.username + "&password=" + value.password + "&fullName=" +value.fullname + "&private=false",true);
 			req.send();
 			req.onreadystatechange=function(){
 				if(req.readyState===XMLHttpRequest.DONE && req.status===200){
 					window.localStorage.removeItem('userID');
 					window.localStorage.setItem('userID', req.responseText);

					console.log("USERID RESPONSE" + req.responseText);
					console.log('winodw storage' + window.localStorage.getItem('userID'))
				}
 			}
 			
 			// // console.log(value.username);
 			// let params = new HttpParams().set('fullName', value.fullname)
 			// 	.set('username', value.username)
 			// 	.set('password', value.password)
 			// 	.set('private', 'false');
 			// this.http.get(this.backendURL+"AddNewUser?", {params}, {responseType : 'text'}).subscribe(data=>{console.log(data)});
 
 			// this.http.get(url 
 			// 	+ "AddNewUser?fullName=" + value.username 
 			// 	+ "&username="+value.username 
 			// 	+ "&password=" + value.password 
 			// 	+ "&private=false", {responseType: 'text'}).subscribe(data=>console.log(data));
 			// console.log(url 
 			// 	+ "AddNewUser?fullName=" + value.username 
 			// 	+ "&username="+value.username 
 			// 	+ "&password=" + value.password 
 			// 	+ "&private=false");
 			this.navCtrl.push(LoginPage);
 		}
 	}

 }
