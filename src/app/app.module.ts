import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Reviews } from './components/reviews/reviews.component';
import { Services } from './components/services/services.component';
import { Careers } from './components/careers/careers.component';
import { About } from './components/about/about.component';
import { FAQ } from './components/faq/faq.component';
import { Contact } from './components/contact/contact.component';
import { Guaranteed } from './components/guaranteed/guaranteed.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'reviews', component: Reviews },
  { path: 'services', component: Services },
  { path: 'careers', component: Careers },
  { path: 'about', component: About },
  { path: 'faq', component: FAQ },
  { path: 'contact', component: Contact },
  { path: 'guaranteed', component: Guaranteed }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    Reviews,
    Services,
    Careers,
    About,
    FAQ,
    Contact,
    Guaranteed
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
