import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifsService: GifsService ) {}

  /*
  ? Creamos un getter de tags
  ? y desde el servicio llamamos al .tagsHistory
  */
  get tags(): string[] {
    return this.gifsService.tagsHistory
  }

  searchTag( tag: string) {
    this.gifsService.searchTag( tag );
  }
}
