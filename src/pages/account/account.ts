import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CustomerDTO } from '../../models/customer.dto';
import { AccountService } from '../../services/domain/account.service';
import { AccountDTO } from '../../models/account.dto';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  accounts: AccountDTO[];
  customer: CustomerDTO;

  constructor(
    public accountService: AccountService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    this.customer = navParams.data;

  }

  ionViewWillEnter() {
    this.retrieveAccounts();
  }

  onClickCloseModal() {
    this.viewCtrl.dismiss(false);
  }

  retrieveAccounts() {
    this.accountService.findByCustomer(this.customer.cust_id)
      .subscribe(response => {
        this.accounts = response;
      })
  }
}
