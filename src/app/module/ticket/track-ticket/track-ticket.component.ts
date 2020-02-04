import { Component, OnInit } from '@angular/core';

import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { TrackTicket } from 'src/app/model/model';

@Component({
  selector: 'app-track-ticket',
  templateUrl: './track-ticket.component.html',
  styleUrls: ['./track-ticket.component.css']
})
export class TrackTicketComponent implements OnInit {
  spinner = false;
  ticketDetail: TrackTicket[];
  ticketId: any;
  ticketErrorFlag = false;
  constructor(
    public api: Service,
    private url: UrlConfig) { }

  /* track the ticket
  @params ticket id
  */
  public getTicketDetail() {
    this.ticketErrorFlag = false;
    if (this.ticketId) {
      this.spinner = true;
      const param = `/${this.ticketId}`;
      this.api.getList(this.url.urlConfig().trackTicket.concat(param)).subscribe(detail => {
        this.spinner = false;
        if (detail) {
          this.ticketDetail = detail;
        }
      }, error => {
        this.spinner = false;
      });
    } else {
      this.ticketErrorFlag = true;
    }

  }

  cancelTicket = () => {

  }
  ngOnInit() { }

}
