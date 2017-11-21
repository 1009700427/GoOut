import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { FindEventsPage } from '../find-events/find-events';
import { FindPeoplePage } from '../find-people/find-people';

 

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
  ],
  entryComponents: [
    FindEventsPage,
    FindPeoplePage
  ],
})
export class MainPageModule {}
