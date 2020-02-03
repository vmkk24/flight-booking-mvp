import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ModalButton } from '../model/model';
@Injectable()

export class Service {
  alertConfig = {
    header: '',
    message: '',
    modalShow: false,
    button: []
  };
  constructor(private http: HttpClient) { }

  /* Http Headers */
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  /* post api call
   @params url is api url
   @params postdata is body of the api call
   @params type is POST/PUT
  */
  public postCall(url: string, postData: object, type: string): Observable<any> {
    this.alertConfigDefaultValue();
    return this.http[type](url, JSON.stringify(postData), this.httpOptions)
      .pipe(
        catchError(this.errorHandler.bind(this))
      );
  }

  /* Get api call
   @params url is api url
  */
  public getList(url: string): Observable<any> {
    this.alertConfigDefaultValue();
    return this.http.get(url).pipe(
      retry(1),
      catchError(this.errorHandler.bind(this))
    );
  }

  /* Error handling */
  private errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      /* Get client-side error */
      errorMessage = error.error.message;
    } else {
      /* Get server-side error */
      errorMessage = error.error.message ? error.error.message : 'Network error';
    }
    this.alertConfig = this.modalConfig('Error', errorMessage, true, [{name: 'Ok'}]);
    return throwError(errorMessage);
  }

  /* Get logged user */
  public loggedUser() {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }

  /* Check whether valid user or not  */
  public validUser() {
    if (this.loggedUser()) {
      return true;
    } else {
      return false;
    }
  }

  /* Set modal properities
  @alertConfigDefaultValue() set default value
  */
  public alertConfigDefaultValue() {
    this.alertConfig = {
      header: null,
      message: null,
      modalShow: false,
      button: []
    };
  }
  /* Set modal properities
    @params head is header of the modal
    @params modalMessage is content of the modal dialog
    @params modal is whether it's true/false
    @params modalButton is what are the buttons diplay in modal
  */
  public modalConfig(head: string, modalMessage: string, modal: boolean, modalButton: ModalButton[]) {
    return {
      header: head,
      message: modalMessage,
      modalShow: modal,
      button: modalButton
    };
  }
}
