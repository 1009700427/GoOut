/**
 * Created by siyuanxu on 11/20/17.
 */
/**
 * Created by siyuanxu on 11/20/17.
 */
import { AlertController } from 'ionic-angular';

export class AlertMethods{
  constructor(public alertCtrl: AlertController){

}
public doAlert(message: string) {
  let alert = this.alertCtrl.create({
    title: 'Notification!',
    subTitle: message,
    buttons: ['Ok']
  });
  alert.present();
}
}
