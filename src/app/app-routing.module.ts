import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { LoginComponent } from './login/login.component';
import { SubjectAEComponent } from './subject-ae/subject-ae.component';
import { AngazovanjeAEComponent } from './angazovanje-ae/angazovanje-ae.component';
import { AngazovanjeComponent } from './angazovanje/angazovanje.component';
import { AngazovanjeFormComponent } from './angazovanje-form/angazovanje-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'subject', component: SubjectComponent,
  },
  {
    path: 'angazovanje', component: AngazovanjeComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'newSubject', component: SubjectFormComponent },
  {
    path: 'subjectAE', component: SubjectAEComponent,
    children: [
      { path: 'new', component: SubjectFormComponent },
      { path: ':id/edit', component: SubjectFormComponent },
    ]
  },
  {
    path: 'angazovanjeAE', component: AngazovanjeAEComponent,
    children: [
      { path: 'new', component: AngazovanjeFormComponent },
      { path: ':id/edit', component: AngazovanjeFormComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingComponents = [HomeComponent, SubjectComponent, SubjectAEComponent, AngazovanjeComponent, LoginComponent, AngazovanjeAEComponent, SubjectFormComponent, AngazovanjeFormComponent];
