import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { eventPage } from './event-detail';

@NgModule({
  declarations: [
    eventPage,
  ],
  imports: [
    IonicPageModule.forChild(eventPage),
  ],
})
export class eventPageModule {}
