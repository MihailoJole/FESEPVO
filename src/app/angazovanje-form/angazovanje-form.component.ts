import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NastavnoOsoblje } from '../models/nastavnoOsoblje';
import { IOblikNastave } from '../models/oblikNastave';
import { IPredmet } from '../models/predmet';
import { AngazovanjaService } from '../servisi/angazovanja.service';
import { NastavnoOsobljeService } from '../servisi/nastavno-osoblje.service';
import { PredmetService } from '../servisi/predmet.service';

@Component({
  selector: 'app-angazovanje-form',
  templateUrl: './angazovanje-form.component.html',
  styleUrls: ['./angazovanje-form.component.css']
})
export class AngazovanjeFormComponent implements OnInit {

  public angazovanjeForm: FormGroup
  predmeti: IPredmet[] = []
  subs: Subscription | null = null;
  predmet: IPredmet | null = null;
  obliciNastave: IOblikNastave[] = [];
  oblikNastave: IOblikNastave;
  nastavnoOsoblje: NastavnoOsoblje[] = [];
  naziv: string;

  constructor(private router: Router, private predmetServis: PredmetService, private route: ActivatedRoute, private angazovanjeServis: AngazovanjaService, private nastavnoOsobljeServis: NastavnoOsobljeService) {
    this.subs = predmetServis.getAll().subscribe(predmeti => {
      this.predmeti = predmeti;
      console.log(this.predmeti)
    })
    this.subs = nastavnoOsobljeServis.getAll().subscribe(osoblje=>{
      this.nastavnoOsoblje = osoblje;
    })
    this.angazovanjeForm = new FormGroup({
      predmet: new FormControl("", [Validators.required]),
      oblikNastave: new FormControl("", [Validators.required]),
      nastavnoOsoblje: new FormControl("", [Validators.required]),
    })
  }

  ngOnInit(): void {
    if (this.router.url.includes('edit')) {
      console.log(this.route.snapshot.params.id);
      this.subs = this.predmetServis.getAll().subscribe(predmeti => {
        for (let i = 0; i < predmeti.length; i++) {
          if (predmeti[i].id == this.route.snapshot.params.id) {
            this.predmet = predmeti[i];
            this.obliciNastave = predmeti[i].obliciNastave;
          }
        }
      })
      this.angazovanjeForm.setValue({
        predmet: this.route.snapshot.queryParams.predmetId,
        oblikNastave: this.route.snapshot.queryParams.oblikNastave,
        nastavnoOsoblje: this.route.snapshot.queryParams.nastavnoOsobljeId
      });
    }
  }

  getTitle(): string {

    if (this.router.url.includes('edit')) {
      return 'Izmeni angazovanje!';
    } else {
      return 'Dodaj angazovanje!';
    }
  }

  UcitajOblikeNastave(value: any, text: any) {

    console.log(text[value - 1].text);


    if (this.predmeti) {
      for (let i = 0; i < this.predmeti.length; i++) {
        if (this.predmeti[i].id == value) {
          this.obliciNastave = this.predmeti[i].obliciNastave;
        }
      }
    }

    if (this.obliciNastave.length == 0) {
      window.alert("Izabrani predmet nema oblike nastave.");
      this.angazovanjeForm.setValue({
        predmet: "",
        oblikNastave: "",
        nastavnoOsoblje: ""
      });
    }

    //Uzme value iz select-a i prodje kroz listu predmeta i uzme oblike nastave za taj predmet i dodeli profesore iz baze ili iz liste 
  }

  go() {
    if (!this.angazovanjeForm.valid) {
      window.alert("Forma nije validna")
      return;
    }

    console.log(this.angazovanjeForm.controls['predmet'].value);
    console.log(this.angazovanjeForm.controls['oblikNastave'].value);

    if (this.router.url.includes('edit')) {
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
    }

  }

  onChange(event: any) {
    this.naziv = event.target.options[event.target.options.selectedIndex].text;
  }

}
