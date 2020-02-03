import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { CustomValidation } from 'src/app/helper/validation';
import { Destination, FlightList } from 'src/app/model/model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchForm: FormGroup;
  submitted = false;
  spinner = false;
  dobErrorFlag = false;
  errorMessage: string;
  locationList: Destination[];
  flightList: FlightList[];
  constructor(
    private fb: FormBuilder,
    public api: Service,
    private url: UrlConfig,
    private validate: CustomValidation,
    private router: Router
  ) { }

  /* search form controls creation */
  private createForm() {
    this.searchForm = this.fb.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      date: ['', [Validators.required]],
      noOfPassengers: ['', Validators.required],
      travelType: ['', Validators.required],
    });
  }
  /*  Access to form fields */
  get search() {
    return this.searchForm.controls;
  }

  /* To validate valid date
 @date input from user selected
 */
  public validateDOB(date) {
    this.dobErrorFlag = false;
    this.errorMessage = '';
    if (this.validate.checkFutureDate(new Date(), date.target.value)) {
      this.dobErrorFlag = true;
      this.errorMessage = 'Departing date should not be in the past date';
    }
  }
  /* Search Flight
  @param SearchForm values
  */
  public searchFlight() {
    this.submitted = true;
    if (this.searchForm.valid) {
      this.searchForm.value.source = Number(this.searchForm.value.source);
      this.searchForm.value.destination = Number(this.searchForm.value.destination);
      this.searchForm.value.noOfPassengers = Number(this.searchForm.value.noOfPassengers);
      this.searchForm.value.date = this.validate.convertDate(this.searchForm.value.date);
      this.spinner = true;
      /* Api call*/
      this.api.getList(this.url.urlConfig().getFlights)
     // this.api.postCall(this.url.urlConfig().userRegister, this.searchForm.value, 'post')
        .subscribe(list => {
          this.spinner = false;
          this.flightList = list;
        },
          error => {
            this.spinner = false;
          });
    }
  }

  /* Get Destinaton
  */
  public getDestination() {
    this.spinner = true;
    this.api.getList(this.url.urlConfig().getDestination).subscribe(location => {
      this.spinner = false;
      if (location) {
        this.locationList = location;
      }
    }, error => {
      this.spinner = false;
    });
  }
  /* Select the flight
   @param flight slected flight from the list
   */
  public selectFlight(flight: FlightList) {
   const selectedFlightDetail = {
     noOfPassengers:  this.searchForm.value.noOfPassengers,
     flightDetail: flight
   };
   sessionStorage.setItem('flightDetail', JSON.stringify(selectedFlightDetail));
   this.router.navigate(['/booking']);
  }


  ngOnInit() {
    this.createForm();
    this.getDestination();
  }

}
