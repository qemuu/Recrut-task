import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service'

@Component({
  selector: 'app-anime-details',
  template: `
    <div class="ui items">
    <i routerLink='/list' class="arrow left icon">Powrót</i>
    <div class="item">
      <div class="ui small image">
        <img src="{{animeSend.image_url}}">
      </div>
      <div class="content">
        <div class="header">{{animeSend.title}}</div>
        <div class="right myClass">
            <span class="price ">{{animeSend.mal_id}}</span>
        </div>
        
        <div class="description">
          <p>{{animeSend.synopsis}}</p>
        </div>


        
      </div>
    </div>
    
      </div>
    
  
  `,
  styles: [

    `.myClass{
      float: right;
  }
  .arrow{
    cursor:pointer;
  }
  
  .items{
      padding-bottom: 15px;
      padding-top: 15px;
      padding-right: 15px;
  }`
  ]
})
export class AnimeDetailsComponent implements OnInit {
  animeSend

  constructor(private data:DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.animeSend = message)
    console.log(this.animeSend)
  }

}
