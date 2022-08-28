import {Component} from '@angular/core';
import {IKorisnik} from './models/korisnik';
import { KorisnikService } from './servisi/korisnik.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public korisnik: IKorisnik | null = null;
  title = 'FESEPVO';

  constructor(private korisnikS:KorisnikService) {
  
  }
  

 public getKorisnik() {
   this.korisnik = this.korisnikS.getKorisnik();
   return this.korisnik;
 }
}
