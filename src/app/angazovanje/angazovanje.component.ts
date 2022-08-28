import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { IAngazovanja } from '../models/angazovanja';
import { IKorisnik } from '../models/korisnik';
import { AngazovanjaService } from '../servisi/angazovanja.service';
import { KorisnikService } from '../servisi/korisnik.service';

@Component({
  selector: 'app-angazovanje',
  templateUrl: './angazovanje.component.html',
  styleUrls: ['./angazovanje.component.css']
})
export class AngazovanjeComponent implements OnInit {

  public angazovanja: IAngazovanja[] = []
  korisnik: IKorisnik | null = null;

  constructor(private router: Router,private angazovanjeS:AngazovanjaService,private korisnikServis: KorisnikService ){
    angazovanjeS.getAll().subscribe(angazovanje =>{
      this.angazovanja = angazovanje;
    })

  }

  ngOnInit(): void {
    this.korisnik = this.korisnikServis.getKorisnik()
  }

  editAngazovanje(angazovanje: IAngazovanja) {

    this.router.navigate(['angazovanjeAE', angazovanje.predmetDto.id, 'edit'],
     {queryParams:{predmetId: angazovanje.predmetDto.id, nastavnoOsobljeId: angazovanje.osobljeDto.id, oblikNastave: angazovanje.oblikNastave.id}});
  }

  deleteAngazovanje(osobljeId:number,predmetId:number) {
    this.angazovanjeS.deleteAngazovanje(osobljeId,predmetId).subscribe(message =>{
      window.alert(message);
      this.angazovanjeS.getAll().subscribe(angazovanje =>{
        this.angazovanja = angazovanje;
      })

    })
  }
}
