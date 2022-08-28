import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SubjectComponent } from './subject/subject.component';
import {FormsModule} from '@angular/forms';
import { SideNavComponent } from './side-nav/side-nav.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubjectFormComponent } from './subject-form/subject-form.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import { SubjectAEComponent } from './subject-ae/subject-ae.component';
import { AngazovanjeComponent } from './angazovanje/angazovanje.component';
import { AngazovanjeAEComponent } from './angazovanje-ae/angazovanje-ae.component';
import { AngazovanjeFormComponent } from './angazovanje-form/angazovanje-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubjectComponent,
    SideNavComponent,
    HomeComponent,
    SubjectFormComponent,
    LoginComponent,
    SubjectAEComponent,
    AngazovanjeComponent,
    AngazovanjeAEComponent,
    AngazovanjeFormComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
