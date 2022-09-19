import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fakultet } from '../models/fakultet';
import { IOblikNastave } from '../models/oblikNastave';
import { IPredmet } from '../models/predmet';
import { StudijskiProgram } from '../models/studijskiProgram';
import { Univerzitet } from '../models/univerzitet';

@Injectable({
  providedIn: 'root'
})
export class FakutletService {

  
  constructor(private http: HttpClient) { }

  public getAll(): Observable<Fakultet[]> {
    return this.http.get<Fakultet[]>('http://localhost:8080/fakultet/all',);
  }

   public deleteFakultet(id:number){
     return this.http.delete('http://localhost:8080/fakultet/delete/'+id,{responseType: 'text'});
   }

   public addFakultet(adresa:string,naziv:string,oblast:string,studijskiProgrami:StudijskiProgram[], univerzitet: Univerzitet):Observable<Fakultet>{
    return this.http.post<Fakultet>('http://localhost:8080/fakultet/add',{naziv,adresa,oblast,studijskiProgrami,univerzitet});
   }

   public getById(id:number):Observable<Fakultet>{
    return this.http.get<Fakultet>('http://localhost:8080/fakultet/find/'+id);
  }

  public update(id:number,adresa:string,naziv:string,oblast:string,studijskiProgrami:StudijskiProgram[], univerzitet: Univerzitet):Observable<Fakultet>{
    return this.http.put<Fakultet>('http://localhost:8080/fakultet/update',{id,naziv,adresa,oblast,studijskiProgrami,univerzitet});
   }

   public getByUniverzitetId(id:number):Observable<Fakultet[]>{
    return this.http.get<Fakultet[]>('http://localhost:8080/fakultet/findByUniverzitet/'+id,);
  }
}
