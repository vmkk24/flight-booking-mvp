import { Injectable } from '@angular/core';
@Injectable()
export class UrlConfig {
    serverConfig = true;
    private creditCardHost = 'http://10.117.189.86:8085/creditcard/';
    private shoppingCardtHost = 'http://10.117.189.86:8084/shoppingcart/';
    private apiMock = 'http://localhost:3000/';
    url = {};

    /* url config with url Mock list */
    urlMock() {
        return this.url = {
            creditCardLogin: 'http://10.117.189.86:8085/' + 'creditcardapp/creditcards/login',
            shoppingLogin: 'http://10.117.189.86:8084/' + 'shoppingcart/customers/login',
            userRegister: 'http://10.117.189.86:8085/creditcard/creditcards',
            products: 'http://10.117.189.81:8085/shoppingcart/' + 'products',

            buyProduct: this.apiMock + 'shoppingcartapp/products/buy',
            validateOtp: this.apiMock + 'creditcard/creditcards/',
            getMyOrder: 'http://10.117.189.81:8084/' + 'shoppingcart/customers/',
            transactions: 'http://10.117.189.81:8085/' + 'creditcard/transactions/',
            purchaseProduct: this.shoppingCardtHost + 'products/customer/',
        };
    }

    /* url config with url Server list */
    urlApi() {
        return this.url = {
            creditCardLogin: this.creditCardHost + 'creditcards/login',
            userRegister: this.creditCardHost + 'creditcards',
            shoppingLogin: this.shoppingCardtHost + 'customers/login',
            products: this.shoppingCardtHost + 'products',
            buyProduct: this.creditCardHost + 'creditcards/customers/',
            validateOtp: this.creditCardHost + 'creditcard/creditcards/',
            getMyOrder: this.shoppingCardtHost + 'customers/',
            transactions: this.creditCardHost + 'transactions/',
            purchaseProduct: this.shoppingCardtHost + 'products/customer/',
        };
    }
    /* return url */
    urlConfig() {
        return  this.serverConfig ? this.urlApi() : this.urlMock() ;
    }
}
