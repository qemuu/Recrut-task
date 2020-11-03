import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponentComponent} from './list-component/list-component.component'
import {AnimeDetailsComponent } from './anime-details/anime-details.component'
import { flush } from '@angular/core/testing';

const routes: Routes = [
  {path: 'list', component: ListComponentComponent},
  {path: 'details', component: AnimeDetailsComponent},
  {path: '',component: ListComponentComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListComponentComponent, AnimeDetailsComponent ]