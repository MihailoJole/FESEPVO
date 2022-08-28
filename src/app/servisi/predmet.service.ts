import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOblikNastave } from '../models/oblikNastave';
import { IPredmet } from '../models/predmet';

@Injectable({
  providedIn: 'root'
})
export class PredmetService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IPredmet[]> {
    return this.http.get<IPredmet[]>('http://localhost:8080/predmet');
  }

  public deleteSubject(id:number){
    return this.http.delete('http://localhost:8080/predmet/'+id,{responseType: 'text'});
  }

  public addSubject(aktivan:boolean,naziv:string,opis:string,espb:number,obliciNastave:IOblikNastave[]):Observable<IPredmet>{
    return this.http.post<IPredmet>('http://localhost:8080/predmet',{naziv,opis,espb,obliciNastave,aktivan});
  }

  public getById(id:number):Observable<IPredmet>{
    return this.http.get<IPredmet>('http://localhost:8080/predmet/'+id);
  }

  public update(id:number,aktivan:boolean,naziv:string,opis:string,espb:number,obliciNastave:IOblikNastave[]):Observable<IPredmet>{
    return this.http.put<IPredmet>('http://localhost:8080/predmet',{id,naziv,opis,espb,obliciNastave,aktivan});
  }
}
