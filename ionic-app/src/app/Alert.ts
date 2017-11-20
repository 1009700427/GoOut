/**
 * Created by siyuanxu on 11/20/17.
 */
import { AlertController } from 'ionic-angular';

export class Alert {
  constructor(private alertCtrl: AlertController){

  }
  public static EventAlert(message : string){
    let alert = this.alertCtrl.create({
      title: 'Event Notification!',
      subTitle: message,
      buttons: ['Ok']
    });

    alert.present();
  }
}
