import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  //! API KEY
  private apiKey: string = 'DilhDy8F87hlUr2vVvvWuVa8yZC53fhA';
  private _tagsHistory: string[] = [];
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';

  //? Almacenamos los gifs en este array que lo inicializamos vacío


  constructor(private http: HttpClient) {

    this.loadLocalStorage();
    console.log('Gifs Service Ready');
  }

  /*
  ? Creamos una propiedad para almacenar
  ? todos los tags que la persona busca
  */

  //? Creamos el getter
  get tagsHistory() {

    return [...this._tagsHistory];
  }


  // ! Creamos una función para buscar el tag
  searchTag( tag: string ):void {

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '18')
      .set('q', tag)

    /*
    ? Si el tag es igual a 0 no hace nada
    ? si es mayor que 0 lo inserta
    */
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    this.http.get<SearchResponse>(`${ this.serviceUrl}/search`, { params })
      .subscribe( resp => {
        this.gifList = resp.data;
        // console.log({gifs: this.gifList});
      })

  }

  private organizeHistory( tag: string) {
    tag = tag.toLowerCase();

    //? Comprobamos si el tag ya existe y si existe lo borramos
    if ( this.tagsHistory.includes(tag) ){
      this._tagsHistory = this.tagsHistory.filter( (oldTag) => oldTag !== tag )
    }

    //? Con esto lo insertamos al inicio
    this._tagsHistory.unshift( tag );
    this._tagsHistory = this.tagsHistory.splice(0,10);

    //? Llamamos al método para guardar la información
    this.saveLocalStorage();
  }

  //? método para guardar la información en el local storage
  private saveLocalStorage():void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory))
  }

  //? método para leer la información
  private loadLocalStorage():void {
    if ( !localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse( localStorage.getItem('history')! );

    //? Comprobamos si el historial es igual a 0, si es igual a 0 no hacemos nada
    if ( this._tagsHistory.length === 0 ) return;
    this.searchTag( this._tagsHistory[0] );
  }

}
