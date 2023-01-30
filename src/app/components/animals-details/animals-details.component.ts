import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Animals, AnimalsService } from 'src/app/service/animals.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-animals-details',
  templateUrl: './animals-details.component.html',
  styleUrls: ['./animals-details.component.scss']
})
export class AnimalsDetailsComponent {
  name: string | null = '';
  animal: Observable<Animals | undefined> | undefined;
  constructor(private activatedRoute: ActivatedRoute , private animalService: AnimalsService) {
    this.activatedRoute.paramMap.subscribe(param=>{
      this.name = param.get('name')
      console.log(this.name);
      this.animal = this.animalService.getAnimalsByName(this.name)
    })
    this.activatedRoute.queryParams.subscribe(res=>{
      console.log(res);
      
    })
    this.activatedRoute.fragment.subscribe(res=>{
      console.log(res);
      
    })
  }
}
