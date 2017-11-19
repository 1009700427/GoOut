import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourPage } from './your';

@NgModule({
  declarations: [
    YourPage,
  ],
  imports: [
    IonicPageModule.forChild(YourPage),
  ],
})
export class YourPageModule {}
