import { Injectable } from '@angular/core';
@Injectable()
export class UrlConfig {
    serverConfig = true;
    private apiHost = 'http://10.117.189.181:8080/flightbooking/';
    private apiMock = 'http://localhost:3000/';
    url = {};

    /* url config with url Mock list */
    urlMock() {
        return this.url = {
            getDestination: this.apiMock + 'locationList',
            getFlights: this.apiMock + 'flightList',
            trackTicket:  this.apiMock + 'bookingDetail',
            ticketBook: this.apiHost + 'tickets',

        };
    }

    /* url config with url Server list */
    urlApi() {
        return this.url = {
            getDestination: this.apiHost + 'locations',
            getFlights: this.apiHost + 'flights',
            trackTicket: this.apiHost + 'tickets',
            ticketBook: this.apiHost + 'tickets',

        };
    }
    /* return url */
    urlConfig() {
        return  this.serverConfig ? this.urlApi() : this.urlMock() ;
    }
}
