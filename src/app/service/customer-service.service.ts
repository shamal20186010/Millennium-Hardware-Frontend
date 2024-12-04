import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private apiUrl = 'http://localhost:8080/customer/add-customer';

  constructor(private http: HttpClient) { }

  addCustomer(user: Customer): Observable<any> {
    return this.http.post(`${this.apiUrl}/addUser`, user, { observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = "Username is already taken"
    }
    return throwError(errorMessage);
  }
}
