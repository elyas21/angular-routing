import { Component } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent {
  animals: Animals[] =[
    {
      id: 2,
      name: 'Lion',
      imgUrl: 'assets/img/ingo-stiller-3tkxfe2GocY-unsplash-lion.jpg'
    },
    {
      id: 2,
      name: 'Eagle',
      imgUrl: 'assets/img/pexels-pixabay-53581-eagle.jpg'
    },
    {
      id: 2,
      name: 'Ape',
      imgUrl: 'assets/img/pexels-aleksey-kuprikov-3493730-ape.jpg'
    },
  ]

}

interface Animals {
  id: number;
  name:string;
  imgUrl: string;
}