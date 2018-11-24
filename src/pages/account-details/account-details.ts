import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AccountDTO } from '../../models/account.dto';
import { TimeUtils } from '../../services/utils/time.utils';

/**
 * Generated class for the AccountDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-details',
  templateUrl: 'account-details.html',
})
export class AccountDetailsPage {

  account: AccountDTO;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public timeService: TimeUtils,
    public viewCtrl: ViewController) {

    this.account = this.navParams.data;

  }

  ionViewWillEnter() {
    console.log(this.account);
  }

  onClickCloseModal(): void {
    this.viewCtrl.dismiss(false);
  }

  formatDate(date: Date): string {
    return (date === null) ? "-" : this.timeService.formatDate(date);
  }

}
