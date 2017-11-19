import { Component } from '@angular/core';
import { LoginPage } from "../login/login";
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
 	backendURL : string  = "http://goout.us-west-1.elasticbeanstalk.com/";
 	constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public http: HttpClient) {
 		this.navCtrl = navCtrl;
 		this.signUpForm = formBuilder.group({
 			fullname: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.maxLength(30)])],
 			username: ['', Validators.compose([Validators.required, Validators.pattern("[a-zA-Z]*"), Validators.maxLength(30)])],
 			password: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
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
 			// var req = new XMLHttpRequest(),
 			// req.open("get", this.backendURL + "AddNewUser?username="+value.username + "&password=" value.password + "&fullName="value.fullname + "&private=false",true);

 			// req.onreadystatechange=function(){
 			// 	if(req.readystate==XMLHttpRequest.DONE && req.status==200){
				// 	console.log("HELP");
				// 	console.log(req.responseText);
				// }
 			// }
 			// console.log(value.username);
 			this.http.post(this.backendURL+"AddNewUser?", {}, {params: new HttpParams()
 				.set('fullName', value.fullname)
 				.set('username', value.username)
 				.set('password', value.password)
 				.set('private', 'false')
 			}).subscribe(data=>{
 				console.log(data);
 			});
 
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
