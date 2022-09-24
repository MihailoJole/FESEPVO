import {Component, OnInit} from '@angular/core';
//import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { IAngazovanja } from '../models/angazovanja';
import { IKorisnik } from '../models/korisnik';
import { IPredmet } from '../models/predmet';
import { AngazovanjaService } from '../servisi/angazovanja.service';
import { KorisnikService } from '../servisi/korisnik.service';
//import { ActivatedRoute, Params } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PredmetService } from '../servisi/predmet.service';
@Component({
  selector: 'app-angazovanje',
  templateUrl: './angazovanje.component.html',
  styleUrls: ['./angazovanje.component.css']
})
export class AngazovanjeComponent implements OnInit {

  public angazovanja: IAngazovanja[] = []
  korisnik: IKorisnik | null = null;
  public angazovanjaPoPredmetu: IAngazovanja[] = []
  predmetId : number
  subs: Subscription | null = null;
  predmeti: IPredmet[]=[]

  constructor(private router: Router,private route: ActivatedRoute,private angazovanjeS:AngazovanjaService,private korisnikServis: KorisnikService, private predmetService: PredmetService ){
    angazovanjeS.getAll().subscribe(angazovanje =>{
      this.angazovanja = angazovanje;
    })

    /*this.angazovanjeS.getAllByPredmetId(this.predmetId).subscribe(angazovanjaPoPredmetu =>{
      this.angazovanjaPoPredmetu = angazovanjaPoPredmetu;
    })*/

    this.predmetService.getAll().subscribe(predmeti =>{
      this.predmeti = predmeti;
    })
  }

  ngOnInit(): void {
    //this.predmetId=this.route.snapshot.params.id;
    this.route.queryParams.subscribe(params => {
      this.predmetId = params['predmet'];
    });
    /*this.router.data.subscribe(data => {
      console.log(data);
  })
    this.subs = this.router.subscribe(params => {
      this.predmetId = params['predmetId'];
      });*/
    this.korisnik = this.korisnikServis.getKorisnik()
    console.log(this.predmetId);
    this.angazovanjeS.getAllByPredmetId(this.predmetId).subscribe(angazovanja =>{
      console.log(this.predmetId+'predmet id opet');
      this.angazovanjaPoPredmetu = angazovanja;
    })
    console.log(this.angazovanjaPoPredmetu);
  }
 
  getTitle(): string {
    for (let i = 0; i < this.predmeti.length; i++) {
      if (this.predmeti[i].id == this.predmetId) {
        return this.predmeti[i].naziv;
      } 
       
  } return '';
}

  prikaziAngazovanja(){
    this.angazovanjeS.getAllByPredmetId(this.predmetId).subscribe(angazovanjaPoPredmetu =>{
      this.angazovanjaPoPredmetu = angazovanjaPoPredmetu;
    })
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
