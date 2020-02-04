import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  subscription: Subscription;
  toggleFlag = false;
  constructor(
    private router: Router) { }

  /* toggle function while mobile view */
  public toggle(): void {
    this.toggleFlag = !this.toggleFlag;
  }


  ngOnInit() {}
}
