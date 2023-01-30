import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ParkComponent } from './components/park/park.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalsDetailsComponent } from './components/animals-details/animals-details.component';
import { AnimalBirdsComponent } from './components/animal-birds/animal-birds.component';
import { ParkPrivateComponent } from './components/park-private/park-private.component';
import { ParkGovComponent } from './components/park-gov/park-gov.component';
import { ParkNgoComponent } from './components/park-ngo/park-ngo.component';
import { GetHomeDataResolver } from './resolver/get-home-data.resolver';
import { NotFoundComponent } from './components/not-found/not-found.component';



const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    resolve:[GetHomeDataResolver]
  },
  {
    path: 'park',
    component: ParkComponent,
    children:[
      {
        path:'private',
        component: ParkPrivateComponent
      },
      {
        path:'gov',
        component: ParkGovComponent
      },
      {
        path:'ngo',
        component: ParkNgoComponent
      },
    ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'animals',
    component: AnimalsComponent
  },
  {
    path: 'animals/birds',
    component: AnimalBirdsComponent
  },
  {
    path: 'animals/:name',
    component: AnimalsDetailsComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ParkComponent,
    AnimalsComponent,
    AnimalsDetailsComponent,
    ParkPrivateComponent,
    ParkGovComponent,
    ParkNgoComponent,
    NotFoundComponent],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
