import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOblikNastave } from '../models/oblikNastave';

@Injectable({
  providedIn: 'root'
})
export class OblikNastaveService {

  constructor(private http:HttpClient ) {
    
  }
  public getAll(): Observable<IOblikNastave[]> {
    return this.http.get<IOblikNastave[]>('http://localhost:8080/oblikNastave');
  }
}
