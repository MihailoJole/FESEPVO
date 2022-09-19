import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PredmetModul } from '../models/predmetModul';

@Injectable({
  providedIn: 'root'
})
export class PredmetModulService {

  constructor(private http:HttpClient) { }

  public getAllPredmetModul(): Observable<PredmetModul[]> {
    return this.http.get<PredmetModul[]>('http://localhost:8080/predmetmodul/all');
  }

 public getAllPredmetModulByModulId(id:number): Observable<PredmetModul[]> {
    return this.http.get<PredmetModul[]>('http://localhost:8080/predmetmodul/allByModulId/'+id,);
 }

  public deletePredmetModul(modul_id:number,predmet_id:number){
    return this.http.post('http://localhost:8080/predmetmodul/delete',{modul_id,predmet_id},{responseType: 'text'});
  }

  public updatePredmetModul(modul_id:number,predmet_id:number,semestar:number):Observable<PredmetModul>{
    return this.http.put<PredmetModul>('http://localhost:8080/predmetmodul/update',{modul_id,predmet_id,semestar});
  }

  public addPredmetModul(modul_id:number,predmet_id:number,semestar:number):Observable<PredmetModul>{
    return this.http.post<PredmetModul>('http://localhost:8080/predmetmodul/add',{modul_id,predmet_id,semestar});
  }

}
