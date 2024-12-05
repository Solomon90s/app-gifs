import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { CardListComponent } from './components/card-list/card-list.component';
import { GifsCardsComponent } from './components/gifs-cards/gifs-cards.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    CardListComponent,
    GifsCardsComponent,
    HomePageComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CardListComponent,
    GifsCardsComponent,
    HomePageComponent,
    SearchBoxComponent,
  ]
})
export class GifsModule { }
