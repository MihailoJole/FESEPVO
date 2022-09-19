import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fakultet } from '../models/fakultet';
import { Modul } from '../models/modul';
import { IOblikNastave } from '../models/oblikNastave';
import { IPredmet } from '../models/predmet';
import { StudijskiProgram } from '../models/studijskiProgram';
import { Univerzitet } from '../models/univerzitet';

@Injectable({
  providedIn: 'root'
})
export class ModulServis {

  
  constructor(private http: HttpClient) { }

  public getAllByStudijskiProgramId(id:number): Observable<Modul[]> {
    return this.http.get<Modul[]>('http://localhost:8080/modul/allByStudijskiProgram/'+id,);
  }

   public deleteModul(id:number){
     return this.http.delete('http://localhost:8080/modul/delete/'+id,{responseType: 'text'});
   }

   public addModul(naziv:string, semestar:number, studijskiProgram: StudijskiProgram):Observable<Modul>{
     return this.http.post<Modul>('http://localhost:8080/modul/add',{naziv,semestar,studijskiProgram});
   }

   public getById(id:number):Observable<Modul>{
     return this.http.get<Modul>('http://localhost:8080/modul/find/'+id);
   }

   public updateModul(id:number, naziv:string, semestar:number, studijskiProgram: StudijskiProgram):Observable<Modul>{
     return this.http.put<Modul>('http://localhost:8080/modul/update',{id,naziv,semestar,studijskiProgram});
   }
}
