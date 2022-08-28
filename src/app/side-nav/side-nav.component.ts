import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IKorisnik } from '../models/korisnik';
import { KorisnikService } from '../servisi/korisnik.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private korisnikS: KorisnikService, private router: Router, private korisnikServis: KorisnikService) { }

  korisnik: IKorisnik | null = null;

  ngOnInit(): void {
    this.korisnik = this.korisnikServis.getKorisnik()
  }

  public odjava() {
    this.korisnikS.saveKorisnik(null);
    console.log(this.korisnikS.getKorisnik())
    this.router.navigateByUrl('/');

  }

}
