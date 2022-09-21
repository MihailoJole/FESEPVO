import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Fakultet } from '../models/fakultet';
import { IPredmet } from '../models/predmet';
import { Subscription } from 'rxjs';
import { StudijskiProgram } from '../models/studijskiProgram';
import { Modul } from '../models/modul';
import { ActivatedRoute, Router } from '@angular/router';
import { UniverzitetService } from '../servisi/univerzitet.service';
import { FakutletService } from '../servisi/fakultet.service';
import { StudijskiProgramServis } from '../servisi/studijskiProgram.service';
import { Univerzitet } from '../models/univerzitet';
import { ModulServis } from '../servisi/modul.service';
import { PredmetModul } from '../models/predmetModul';
import { IKorisnik } from '../models/korisnik';
import { PredmetModulService } from '../servisi/predmetmodul.service';
import { KorisnikService } from '../servisi/korisnik.service';
@Component({
  selector: 'app-univerzitet',
  templateUrl: './univerzitet.component.html',
  styleUrls: ['./univerzitet.component.css']
})
export class UniverzitetComponent implements OnInit {
  predmetmoduli: PredmetModul[] = []
  korisnik: IKorisnik | null = null;
  fakulteti: Fakultet[]=[];
  public univerzitetForm: FormGroup
  subs: Subscription | null = null;
  fakultet: Fakultet;
  studijskiProgrami: StudijskiProgram[] = [];
  studijskiProgram: StudijskiProgram;
  moduli: Modul[] = [];
  modul: Modul | null = null;
  naziv: string;
  univerziteti: Univerzitet[] = [];
  univerzitet: Univerzitet;
  predmetModulSortirano: PredmetModul[] = []

  constructor(private router: Router,private predmetmodulService: PredmetModulService,private korisnikServis: KorisnikService, private univerzitetServis: UniverzitetService, private route: ActivatedRoute, private fakultetServis: FakutletService, private studijskiProgramServis: StudijskiProgramServis, private modulervis: ModulServis) {  
    this.subs = univerzitetServis.getAll().subscribe(univerziteti=>{
      this.univerziteti = univerziteti;
    })
    
    this.subs = univerzitetServis.getById(this.route.snapshot.params.id).subscribe(univerzitet => {
      this.univerzitet = univerzitet;
      console.log(this.univerzitet)
    })
    /*this.subs = fakultetServis.getByUniverzitetId(this.route.snapshot.params.id).subscribe(fakulteti => {
      this.fakulteti = fakulteti;
      console.log(this.fakulteti)
    })*/
    this.univerzitetForm = new FormGroup({
      univerzitet: new FormControl("", [Validators.required]),
      fakultet: new FormControl("", [Validators.required]),
      studijskiProgram: new FormControl("", [Validators.required]),
    })
    /*this.subs = predmetmodulService.getAllPredmetModul().subscribe(predmetmoduli=>{
      this.predmetmoduli = predmetmoduli;
    })*/
    this.subs = studijskiProgramServis.getAllByFakultetId(this.route.snapshot.params.id).subscribe(studijskiProgrami=>{
      this.studijskiProgrami = studijskiProgrami;
    })
    this.subs = modulervis.getAllByStudijskiProgramId(this.route.snapshot.params.id).subscribe(moduli => {
      this.moduli = moduli;
      console.log(this.moduli)
    })
  }

  ngOnInit(): void {
    this.korisnik = this.korisnikServis.getKorisnik();
    if (this.router.url.includes('univerzitet')) {
      console.log(this.route.snapshot.params.id);
      this.subs = this.univerzitetServis.getAll().subscribe(univerziteti => {
        for (let i = 0; i < univerziteti.length; i++) {
          if (univerziteti[i].id == this.route.snapshot.params.id) {
            this.univerzitet = univerziteti[i];
            //this.fakulteti = univerziteti[i].fakulteti;
          }
        }
      })
      this.univerzitetForm.setValue({
        univerzitet: this.route.snapshot.queryParams.univerzitetId,
        fakultet: this.route.snapshot.queryParams.fakultet,
        studijskiProgram: this.route.snapshot.queryParams.studijskiProgram
      });
    }else{

    }
  }

  getTitle(): string {

    if (this.router.url.includes('edit')) {
      return 'Izmeni angazovanje!';
    } else {
      return 'Prikazi predmete';
    }
  }

  UcitajFakultete(value: any, text: any) {
    this.subs = this.univerzitetServis.getAll().subscribe(univerziteti => {
      for (let i = 0; i < univerziteti.length; i++) {
        if (univerziteti[i].id == this.route.snapshot.params.id) {
          this.univerzitet = univerziteti[i];
          this.fakulteti = univerziteti[i].fakulteti;
        }
      }
    })

    console.log(text[value - 1].text);
    //console.log(this.fakulteti);

    if (this.univerziteti) {
      for (let i = 0; i < this.univerziteti.length; i++) {
        if (this.univerziteti[i].id == value) {
          this.subs = this.fakultetServis.getByUniverzitetId(value).subscribe(fakulteti => {
            this.fakulteti = fakulteti;
            console.log(this.fakulteti)
          })//this.univerziteti[i].fakulteti;
        }
      }
    }

    if (this.fakulteti.length == 0) {
      //window.alert("Izabrani univerzitet nema fakultete.");
      this.univerzitetForm.setValue({
        fakultet: "",
        modul: "",
        studijskiProgram: ""
      });
    }
  }
    UcitajStudijskePrograme(value: any, text: any){     
      this.subs = this.fakultetServis.getAll().subscribe(fakulteti => {
        for (let i = 0; i < fakulteti.length; i++) {
          if (fakulteti[i].id == this.route.snapshot.params.id) {
            //this.fakulteti = fakulteti[i];
            //this.fakulteti = univerziteti[i].fakulteti;
          }
        }
      })     
      console.log(text[value - 1].text);  
      if (this.fakulteti) {       
        for (let i = 0; i < this.fakulteti.length; i++) {
          if (this.fakulteti[i].id == value) {
            this.subs = this.studijskiProgramServis.getAllByFakultetId(value).subscribe(studijskiProgrami => {
              this.studijskiProgrami = studijskiProgrami;
              console.log(this.studijskiProgrami)
            })//this.univerziteti[i].fakulteti;
          }
        }
      }
  
      if (this.fakulteti.length == 0) {
        //window.alert("Izabrani fakultet nema studijske programe.");
        this.univerzitetForm.setValue({
          fakultet: "",
          modul: "",
          studijskiProgram: ""
        });

    }
  }

   UcitajModule(value: any, text: any){
   /* this.subs = this.studijskiProgramServis.getAllByFakultetId().subscribe(fakulteti => {
      for (let i = 0; i < fakulteti.length; i++) {
        if (fakulteti[i].id == this.route.snapshot.params.id) {
          //this.fakulteti = fakulteti[i];
          //this.fakulteti = univerziteti[i].fakulteti;
        }
      }
    })*/

    console.log(text[value - 1].text);

    if (this.studijskiProgrami) { 
      for (let i = 0; i < this.studijskiProgrami.length; i++) {
        if (this.studijskiProgrami[i].id == value) {        
          this.subs = this.modulervis.getAllByStudijskiProgramId(value).subscribe(moduli => {
            this.moduli = moduli;
            console.log(this.moduli)
          })//this.univerziteti[i].fakulteti;
        }
      }
    }

    if (this.moduli.length == 0) {
      //window.alert("Izabrani studijski program nema module.");
      this.univerzitetForm.setValue({
        fakultet: "",
        modul: "",
        studijskiProgram: ""
      });

  }
  }

  UcitajPredmete(value: any, text: any){
     //console.log(text[value - 1].text);
     console.log("this.predmetmoduli")
     if (this.moduli) {
       console.log("ccc")
       for (let i = 0; i < this.moduli.length; i++) {
         if (this.moduli[i].id == value) {
           console.log("yy")
           this.subs = this.predmetmodulService.getAllByModulIdSortByGodinaSortByPozicija(value).subscribe(predmetModulSortirano=>{
            this.predmetModulSortirano = predmetModulSortirano;
            
          });
             console.log(this.predmetmoduli)
           }//this.univerziteti[i].fakulteti;
         }
       }
   }
    //Uzme value iz select-a i prodje kroz listu predmeta i uzme oblike nastave za taj predmet i dodeli profesore iz baze ili iz liste 
    
  go() {
    if (!this.univerzitetForm.valid) {
      window.alert("Forma nije validna")
      return;
    }

    console.log(this.univerzitetForm.controls['univerzitet'].value);
    console.log(this.univerzitetForm.controls['fakultet'].value);

    /*if (this.router.url.includes('edit')) {
      this.angazovanjeServis.update(this.angazovanjeForm.controls['nastavnoOsoblje'].value,this.angazovanjeForm.controls['predmet'].value, {"id": this.angazovanjeForm.controls['oblikNastave'].value, "naziv":this.naziv })
      .subscribe(response=>{
      window.alert(response.predmetDto.naziv)
      console.log('Izmena angazovanja.');
      })
      
    } else {
       this.angazovanjeServis.addAngazovanje(this.angazovanjeForm.controls['nastavnoOsoblje'].value,this.angazovanjeForm.controls['predmet'].value, {"id": this.angazovanjeForm.controls['oblikNastave'].value, "naziv":this.naziv })
       .subscribe(response=>{
        window.alert(response.predmetDto.naziv)
      })
      console.log('Angazovanje sacuvano.');
    }*/

  }

  onChange(event: any) {
    this.naziv = event.target.options[event.target.options.selectedIndex].text;
  }


}
function UcitajStudijskePrograme(value: any, any: any, text: any, any1: any) {
  throw new Error('Function not implemented.');
}

