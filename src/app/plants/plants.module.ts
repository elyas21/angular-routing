import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantsComponent } from './plants.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component: PlantsComponent
  }
];

@NgModule({
  declarations: [PlantsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class PlantsModule {}
