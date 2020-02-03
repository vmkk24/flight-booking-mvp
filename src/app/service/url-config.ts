import { Injectable } from '@angular/core';
@Injectable()
export class UrlConfig {
    serverConfig = false;
    private apiHost = 'http://10.117.189.86:8085/flightbooking/';
    private shoppingCardtHost = 'http://10.117.189.86:8084/shoppingcart/';
    private apiMock = 'http://localhost:3000/';
    url = {};

    /* url config with url Mock list */
    urlMock() {
        return this.url = {
            getDestination: this.apiMock + 'locationList',
            getFlights: this.apiMock + 'flightList',
            shoppingLogin: 'http://10.117.189.86:8084/' + 'shoppingcart/customers/login',
            userRegister: 'http://10.117.189.86:8085/creditcard/creditcards',
            products: 'http://10.117.189.81:8085/shoppingcart/' + 'products',

        };
    }

    /* url config with url Server list */
    urlApi() {
        return this.url = {
            getDestination: this.apiHost + 'locations',
            getFlights: this.apiHost + 'flights',
            userRegister: this.apiHost + 'creditcards',
            shoppingLogin: this.shoppingCardtHost + 'customers/login',
            products: this.shoppingCardtHost + 'products',
            buyProduct: this.apiHost + 'creditcards/customers/',
            validateOtp: this.apiHost + 'creditcard/creditcards/',
            getMyOrder: this.shoppingCardtHost + 'customers/',
            transactions: this.apiHost + 'transactions/',
            purchaseProduct: this.shoppingCardtHost + 'products/customer/',
        };
    }
    /* return url */
    urlConfig() {
        return  this.serverConfig ? this.urlApi() : this.urlMock() ;
    }
}
