import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject'


@Injectable({
  providedIn: 'root'
})
export class DataService {
  

  private messageSource = new BehaviorSubject([])
  currentMessage = this.messageSource.asObservable()
  
  
  constructor() { }

  changeMessage(elem){
    this.messageSource.next(elem)
  }
}
