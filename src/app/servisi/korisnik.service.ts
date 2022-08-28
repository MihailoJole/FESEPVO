import { Injectable } from '@angular/core';
import { IKorisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  korisnik: IKorisnik | null = null;

  constructor() { }

  public saveKorisnik(korisnik:IKorisnik | null){
    this.korisnik = korisnik;
  }
  public getKorisnik():IKorisnik | null{
    return this.korisnik;
  }
}
