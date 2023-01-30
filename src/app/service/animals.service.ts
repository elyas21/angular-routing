import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  animals: Animals[] = [
    {
      id: 2,
      name: 'Lion',
      imgUrl: 'assets/img/ingo-stiller-3tkxfe2GocY-unsplash-lion.jpg',
      info: `The lion (Panthera leo) is a large cat of the genus Panthera native to
       Africa and India. It has a muscular, broad-chested body; short, rounded head; 
       round ears; and a hairy tuft at the end of its tail.`
    },
    {
      id: 2,
      name: 'Ape',
      imgUrl: 'assets/img/pexels-aleksey-kuprikov-3493730-ape.jpg',
      info: `Apes (collectively Hominoidea /hɒmɪˈnɔɪdi.ə/) are a clade of Old World simians
       native to sub-Saharan Africa and Southeast Asia (though  they were more widespread in 
        Africa, most of Asia, and as well as Europe in prehistory),`
    },
    {
      id: 2,
      name: 'Eagle',
      imgUrl: 'assets/img/pexels-pixabay-53581-eagle.jpg',
      info: `Eagle is the common name for many large birds of prey of the
       family Accipitridae. Eagles belong to several groups of genera, 
       some of which are closely related. Most of the 68 species of eagle 
       are from Eurasia and Africa.[1]`
    },
  ]
  constructor() { }
  getAnimals() {
    return of(this.animals)
  }
  getAnimalsByName(name: string | null):Observable<Animals | undefined> | undefined {
  return  name ? of(this.animals.find((x:Animals) => x.name.toLocaleLowerCase() == name.toLowerCase())) : undefined
  }
}

export interface Animals {
  id: number;
  name: string;
  imgUrl: string;
  info?: string;
}