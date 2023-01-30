import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private activatedRoute: ActivatedRoute){
    this.activatedRoute.data.subscribe(res=>{
      console.log(res);
      
    })
  }
}
