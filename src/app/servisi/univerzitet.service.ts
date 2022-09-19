import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fakultet } from '../models/fakultet';
import { IOblikNastave } from '../models/oblikNastave';
import { IPredmet } from '../models/predmet';
import { Univerzitet } from '../models/univerzitet';

@Injectable({
  providedIn: 'root'
})
export class UniverzitetService {

  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Univerzitet[]> {
    return this.http.get<Univerzitet[]>('http://localhost:8080/univerzitet/all',);
  }

   public deleteUniverzitet(id:number){
     return this.http.delete('http://localhost:8080/univerzitet/'+id,{responseType: 'text'});
   }

   public addUniverzitet(naziv:string, fakulteti:Fakultet[]):Observable<Univerzitet>{
     return this.http.post<Univerzitet>('http://localhost:8080/univerzitet/add',{naziv,fakulteti});
   }

   public getById(id:number):Observable<Univerzitet>{
     return this.http.get<Univerzitet>('http://localhost:8080/univerzitet/find/'+id);
   }

   public updateUniverzitet(id:number,naziv:string, fakulteti:Fakultet[]):Observable<Univerzitet>{
     return this.http.put<Univerzitet>('http://localhost:8080/univerzitet/update',{id,naziv,fakulteti});
   }
}