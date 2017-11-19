import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { FindEventsPage } from '../find-events/find-events';


@NgModule({
  declarations: [
    MainPage,
    FindEventsPage
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  entryComponents: [
    FindEventsPage,
  ],
})
export class MainPageModule {}
