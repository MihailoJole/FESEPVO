import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NastavnoOsoblje } from '../models/nastavnoOsoblje';

@Injectable({
  providedIn: 'root'
})
export class NastavnoOsobljeService {

  constructor(private http:HttpClient) { }

  public getAll(): Observable<NastavnoOsoblje[]> {
    return this.http.get<NastavnoOsoblje[]>('http://localhost:8080/osoblje');
  }
}
