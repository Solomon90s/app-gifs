import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-cards',
  templateUrl: './gifs-cards.component.html',
  styleUrls: ['./gifs-cards.component.css']
})
export class GifsCardsComponent implements OnInit {

  constructor( private gifsService: GifsService ) {}


  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }

  @Input()
  //? ! Indica que SIEMPRE VA A HABER UN VALOR
  public gif!: Gif;

}
