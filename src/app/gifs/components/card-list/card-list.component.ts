import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs';
import { GifsService } from '../../services/gifs.service';


@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  constructor( private gifsService: GifsService ) {}


  @Input()
  public gifs: Gif[] = [];

}
