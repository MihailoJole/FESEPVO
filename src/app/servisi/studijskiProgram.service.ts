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
export class StudijskiProgramServis {

  
  constructor(private http: HttpClient) { }

  public getAllByFakultetId(id:number): Observable<StudijskiProgram[]> {
    return this.http.get<StudijskiProgram[]>('http://localhost:8080/studijskiprogram/allByFakultet/'+id,);
  }

   public deleteStudijskiProgram(id:number){
     return this.http.delete('http://localhost:8080/studijskiprogram/delete/'+id,{responseType: 'text'});
   }

   public addStudijskiProgram(naziv:string, moduli:Modul[], fakultet:Fakultet, status: string):Observable<StudijskiProgram>{
     return this.http.post<StudijskiProgram>('http://localhost:8080/studijskiprogram/add',{naziv,moduli,fakultet,status});
   }

   public getById(id:number):Observable<StudijskiProgram>{
     return this.http.get<StudijskiProgram>('http://localhost:8080/studijskiprogram/find/'+id);
   }

   public updateStudijskiProgram(id:number,naziv:string, moduli:Modul[], fakultet:Fakultet, status: string):Observable<StudijskiProgram>{
     return this.http.put<StudijskiProgram>('http://localhost:8080/studijskiprogram/update',{id,naziv,moduli,fakultet,status});
   }
}
