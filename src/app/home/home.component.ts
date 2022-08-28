import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IKorisnik} from '../models/korisnik';
import { KorisnikService } from '../servisi/korisnik.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  korisnik: IKorisnik | null = null;

  constructor(private korisnikS:KorisnikService) {
    this.korisnik = korisnikS.getKorisnik();
  }

  time = new Date();
  intervalId: any;
  subscription: Subscription | undefined;

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
    console.log(this.korisnik)
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public getKorisnik(){
    return this.korisnikS.getKorisnik();
  }
}
