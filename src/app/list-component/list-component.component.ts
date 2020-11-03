import { Component, OnInit } from '@angular/core';

import {GetAnimeCharService} from '../services/get-anime-char.service'
import {DataService} from '../services/data.service'
@Component({
  selector: 'app-list-component',
  template: `
   
 <div class="ui search">
  <div  class="ui icon input">
    
    <input [(ngModel)]="query" class="prompt" type="text" placeholder="Look for your anime...">
  </div>
  <i (click)="search(this.query)" class="search icon"></i>
</div>

   <app-anime-card
   routerLink="/details"
   (click)="changeMessage(item)" 
   *ngFor='let item of anime' 
   [anime]='item'>
  </app-anime-card>


   
  `,
  styles: [
    `.search{
      padding: 15px 0px;
    }
    
    i.search{
      color:red;
      cursor:pointer;
    }
    
    `
  ]
})
export class ListComponentComponent implements OnInit {

  constructor(private getAnime: GetAnimeCharService, private data: DataService) { }
  anime = []
  query
  
  
  table = [1,23,31,123]


  search(query:string){
    this.getAnime.getAnimeByName(query).subscribe((response)=>{
      this.anime = []
      for (let i = 0; i < 10; i++) {
        this.anime.push(response[i]) 
        
      }
      console.log(this.anime)
    })
  }


  changeMessage(elem){
    this.data.changeMessage(elem)
  }

  // Można dodać losowe ładowanie strony tytułowej

  // getRandomIntInclusive(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }

  ngOnInit(): void {
    for (let i = 0; i < this.table.length; i++) {
      this.getAnime.getAnime(this.table[i]).subscribe((response)=>{
        
        this.anime.push(response) 
        console.log(this.anime)
      })
      
    }
    
  }

}
