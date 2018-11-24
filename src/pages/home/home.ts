import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CustomerService } from '../../services/domain/customer.service';
import { IndividualService } from '../../services/domain/individual.service';
import { CustomerDTO } from '../../models/customer.dto';
import { IndividualDTO } from '../../models/individual.dto';
import { BusinessService } from '../../services/domain/business.service';
import { BusinessDTO } from '../../models/business.dto';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  businesses: BusinessDTO[];
  customers: CustomerDTO[] = [];
  individuals: IndividualDTO[];

  constructor(
    public businessService: BusinessService,
    public customerService: CustomerService,
    public individualService: IndividualService,
    public modalCtrl: ModalController,
    public navCtrl: NavController
  ) {

  }

  ionViewWillEnter() {
    forkJoin(this.retrieveBusiness(), this.retrieveIndividuals())
      .subscribe(response => {
        this.businesses = response[0];
        this.individuals = response[1];
        this.fillBusinessesCustomersData();
        this.fillIndividualsCustomersData();

        console.log(this.customers);
      })
  }

  fillBusinessesCustomersData(): void {
    this.businesses.map(business => {
      this.customerService.findById(business.cust_id)
        .subscribe(response => {
          let customer: CustomerDTO = response;
          customer.name = business.name;
          customer.state = business.state_id;
          customer.date = business.incorp_date;

          this.customers.push(customer);
        })
    })
  }

  fillIndividualsCustomersData(): void {
    this.individuals.map(individual => {
      this.customerService.findById(individual.cust_id)
        .subscribe(response => {
          let customer: CustomerDTO = response;
          customer.name = individual.first_name + " " + individual.last_name;
          customer.state = null;
          customer.date = individual.birth_date;

          this.customers.push(response);
        })
    })
  }

  onClickOpenAccountModal(customer: CustomerDTO): void {
    let accountModal = this.modalCtrl.create('AccountPage', customer);
    accountModal.present();
  }

  retrieveAvatarUrl(name: string): string {
    return `https://api.adorable.io/avatars/285/${name}.png`;
  }

  retrieveBusiness(): Observable<BusinessDTO[]> {
    return this.businessService.findAll();
  }

  retrieveCustomers(): void {
    this.customerService.findAll()
      .subscribe(response => {
        this.customers = response;
      })
  }

  retrieveIndividuals(): Observable<IndividualDTO[]> {
    return this.individualService.findAll();
  }
}
