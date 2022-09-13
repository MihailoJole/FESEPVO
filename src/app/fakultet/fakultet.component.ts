import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Fakultet } from '../models/fakultet';
import { IKorisnik } from '../models/korisnik';
import { IPredmet } from '../models/predmet';
import { Univerzitet } from '../models/univerzitet';
import { FakutletService } from '../servisi/fakultet.service';
import { KorisnikService } from '../servisi/korisnik.service';

@Component({
  selector: 'app-fakultet',
  templateUrl: './fakultet.component.html',
  styleUrls: ['./fakultet.component.css']
})
export class FakultetComponent implements OnInit {
  isChecked: any;

  predmeti: Fakultet[] =[]
  subs: Subscription | null= null;
  korisnik: IKorisnik | null = null;

  

  ngOnInit(): void {
  }

}
