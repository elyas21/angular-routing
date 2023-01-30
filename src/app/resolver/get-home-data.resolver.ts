import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetHomeDataResolver implements Resolve< HomeResolveData> {
  hd: HomeResolveData={
    name:'',
    id:3
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HomeResolveData> {
    return of(this.hd);
  }
}
export interface HomeResolveData{
  name:string,
  id: number
}