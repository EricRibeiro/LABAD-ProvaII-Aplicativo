import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountDetailsPage } from './account-details';
import { TimeUtils } from '../../services/utils/time.utils';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AccountDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountDetailsPage),
  ],
  providers: [
    DatePipe,
    TimeUtils
  ]
})
export class AccountDetailsPageModule { }
