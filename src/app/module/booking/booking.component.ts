import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { paymentOptions } from 'src/app/model/model';
import { Router } from '@angular/router';

import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  dynamicForm: FormGroup;
  submitted = false;
  payment = paymentOptions;
  userData: any;
  totalFare: number;
  show: boolean;
  paymentOpt: any;
  tempData: any;
  constructor(private formBuilder: FormBuilder,
              public api: Service,
              private url: UrlConfig,
              private router: Router

  ) { }

  ngOnInit() {
    this.userData = JSON.parse(sessionStorage.getItem('flightDetail'));
    console.log('hi', this.userData);
    this.totalFare = this.userData.noOfPassengers * this.userData.flightDetail.fare;
    this.dynamicForm = this.formBuilder.group({
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tickets: new FormArray([])
    });
    this.onChangeTickets(this.userData.noOfPassengers);
    console.log(this.dynamicForm.value);
  }

  // convenience getters for easy access to form fields
  get f() { return this.dynamicForm.controls; }
  get t() { return this.f.tickets as FormArray; }

  onChangeTickets(e) {
    const numberOfTickets = e || 0;
    if (this.t.length < numberOfTickets) {
      for (let i = this.t.length; i < numberOfTickets; i++) {
        this.t.push(this.formBuilder.group({
          name: ['', Validators.required],
          age: ['', Validators.required],
          aadhar: ['', Validators.required],
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfTickets; i--) {
        this.t.removeAt(i);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      return;

    }
    if (this.dynamicForm.valid) {
      this.show = true;

    }
  }

  gotoPayment = () => {
  }

  bookTickets = () => {
    const data = {
      flightScheduleId: this.userData.flightScheduleId,
      emailId: this.dynamicForm.value.email,
      phoneNumber: this.dynamicForm.value.phone,
      noOfPassengers: this.userData.noOfPassengers,
      paymentType: this.paymentOpt.name,
      totalFare: this.totalFare,
      passagerList: this.dynamicForm.value.tickets
    };
    this.api.postCall(this.url.urlConfig().ticketBook, data, 'post').subscribe( temp => {
      this.tempData = temp;
    });
  }
}
