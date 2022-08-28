import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { IKorisnik } from '../models/korisnik';
import {catchError, map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public login(username:String, password:String): Observable<IKorisnik | String>{
    return this.http.post<IKorisnik | String>('http://localhost:8080/login',{username,password})
    .pipe(catchError((error:HttpErrorResponse)=> this.handleError(error)));
  }
  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error); 
    const serverError:String = error.error;
    console.log('server error '+serverError); 
    return of(serverError);
  }

}
