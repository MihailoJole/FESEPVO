import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { IKorisnik } from '../models/korisnik';
import { IPredmet } from '../models/predmet';
import { KorisnikService } from '../servisi/korisnik.service';
import { PredmetService } from '../servisi/predmet.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit,OnDestroy {
  isChecked: any;

  predmeti: IPredmet[] =[]
  subs: Subscription | null= null;
  korisnik: IKorisnik | null = null;

  constructor(private router: Router,private predmetServis: PredmetService, private korisnikServis: KorisnikService ) {
    this.subs = predmetServis.getAll().subscribe(predmeti =>{
      this.predmeti = predmeti;
      console.log(this.predmeti)
    })
  }

  ngOnInit(): void {
    this.korisnik = this.korisnikServis.getKorisnik()
  }
  ngOnDestroy(){
    if(this.subs)
      this.subs.unsubscribe()
  }


  editSubject(subject: IPredmet) {
    this.router.navigate(['subjectAE', subject.id, 'edit'],
     {queryParams:{naziv:subject.naziv, opis: subject.opis, brojESPB: subject.espb, aktivan: subject.aktivan,obliciNastave: subject.obliciNastave}});
  }

  deleteSubject(id:number){
    this.predmetServis.deleteSubject(id).subscribe(message =>{
      window.alert(message);
      this.predmetServis.getAll().subscribe(predmeti =>{
        this.predmeti = predmeti;
      })

    })

  }

}
