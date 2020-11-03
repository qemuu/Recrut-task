import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListComponentComponent } from './list-component/list-component.component';
import { AnimeCardComponent } from './list-component/anime-card/anime-card.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponentComponent,
    AnimeCardComponent,
    AnimeDetailsComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
