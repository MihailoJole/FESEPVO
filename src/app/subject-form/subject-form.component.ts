import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPredmet } from '../models/predmet';
import { Subscription } from 'rxjs';
import { PredmetService } from '../servisi/predmet.service';
import { IOblikNastave } from '../models/oblikNastave';
import { OblikNastaveService } from '../servisi/oblik-nastave.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {


  public subjectForm: FormGroup
  predmet: IPredmet | null = null
  obliciNastave: Array<IOblikNastave> = [];
  obliciNastavePredmet: IOblikNastave[] = [];
  obliciNastaveSlanje: IOblikNastave[] = [];
  subs: Subscription | null = null;
  

  constructor(private router: Router, private route: ActivatedRoute, private predmetServis: PredmetService, private oblikNastaveServis: OblikNastaveService) {
    this.subjectForm = new FormGroup({
      naziv: new FormControl("", [Validators.required]),
      opis: new FormControl("", [Validators.required]),
      espb: new FormControl("", [Validators.required, Validators.max(27), Validators.min(2)]),
      MyChoices: new FormArray([])
      
    })
  }

  

  ngOnInit(): void {

    this.subs = this.oblikNastaveServis.getAll().subscribe(oblici => {
      this.obliciNastave = oblici;
    })

    if (this.router.url.includes('edit')) {
      console.log('id ' + this.route.snapshot.queryParams.obliciNastave)
      this.subs = this.predmetServis.getById(this.route.snapshot.params.id).subscribe(predmet => {
        this.predmet = predmet;
        this.obliciNastavePredmet = predmet.obliciNastave;

        this.subjectForm.patchValue({
          naziv: this.predmet.naziv,
          opis: this.predmet.opis,
          espb: this.predmet.espb
        });
      })
      
    }
    
  }

  setChecked(oblikId:number):boolean{
    if (this.obliciNastavePredmet.filter(oblik => oblik.id==oblikId)[0]){
      return true;
    }
    return false;
  }



  go() {
    if (!this.subjectForm.valid) {
      window.alert("Forma nije validna")
      return;
    }
  console.log(this.subjectForm.value.obliciNastave)

    

    const formArray: FormArray = this.subjectForm.get('MyChoices') as FormArray;

    formArray.controls.forEach((ctrl: any) => {
      this.obliciNastaveSlanje.push(this.obliciNastave.filter(oblik=> oblik.id==ctrl.value)[0])
    }); 

    if (this.router.url.includes('edit')) {
      this.subs = this.predmetServis.update(this.route.snapshot.params.id,true,this.subjectForm.controls['naziv'].value,this.subjectForm.controls['opis'].value, this.subjectForm.controls['espb'].value, this.obliciNastaveSlanje)
      .subscribe(response=>{
        window.alert(response.naziv)
        console.log('Izmena angazovanja.')
      })
      
    } else {
      this.subs = this.predmetServis.addSubject(true,this.subjectForm.controls['naziv'].value,this.subjectForm.controls['opis'].value, this.subjectForm.controls['espb'].value, this.obliciNastaveSlanje)
      .subscribe(response=>{
        window.alert(response.naziv)
      })
    }

  }

  getTitle(): string {

    if (this.router.url.includes('edit')) {
      return 'Izmeni predmet!';
    } else {
      return 'Dodaj predmet!';
    }
  }



  onCheckChange(event:any) {
    const formArray: FormArray = this.subjectForm.get('MyChoices') as FormArray;
  
    /* Selected */
    if(event.target.checked){
      // Add a new control in the arrayForm
      formArray.push(new FormControl(event.target.value));
    }
    /* unselected */
    else{
      // find the unselected element
      let i: number = 0;
  
      formArray.controls.forEach((ctrl: any) => {
        if(ctrl.value == event.target.value) {
          // Remove the unselected element from the arrayForm
          formArray.removeAt(i);
          return;
        }
  
        i++;
      });
    }
  }



}
