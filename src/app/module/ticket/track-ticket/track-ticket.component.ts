import { Component, OnInit } from '@angular/core';
/**
 * Importing third party primeNg components
 */
import { MessageService } from 'primeng/api';
import { Service } from 'src/app/service/service';
import { UrlConfig } from 'src/app/service/url-config';
import { TrackTicket } from 'src/app/model/model';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

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
    private url: UrlConfig,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router,
    ) { }

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
        if (detail.errorStatusCode !== 404) {
          this.ticketDetail = detail;
        } else {
          this.ticketDetail = null;
        }
      }, error => {
        this.spinner = false;
      });
    } else {
      this.ticketErrorFlag = true;
    }

  }

  cancelTicket = () => {
    const param = `/${this.ticketId}`;
    this.api.delete(this.url.urlConfig().trackTicket.concat(param)).subscribe(detail => {
      if (detail) {
        this.ticketDetail = detail;
        this.confirmationService.confirm({
          message: 'Are you sure that you want to Cancel the ticket? ',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
            // tslint:disable-next-line:no-string-literal
            if (detail['errorStatusCode'] === 422) {
            // tslint:disable-next-line:no-string-literal
            this.messageService.add({ severity: 'info', summary: 'Failed', detail: detail['errorStatusMessage'] });
            }
            // tslint:disable-next-line:no-string-literal
            if (detail['statusCode'] === 200) {
              // tslint:disable-next-line:no-string-literal
              this.messageService.add({ severity: 'success', summary: 'success', detail: detail['message'] });
              }
          },
          reject: () => {
            this.router.navigate(['/ticket-track']);
          }
        });
      }
    });
  }
  ngOnInit() {}

}
