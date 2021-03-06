import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas:any;
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";
  token:string = "Bearer BQAwCrWeYvNZjt4Nni3C2wJIuUDR1SYjgBcn43KAZ19_exVXMjwLdVBZ8MusLuWI3cyKoxNtW7cssD8c0ShPCg"

  constructor(private http:Http) { }

  getArtistas(termino:string) {
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;
    let headers = new Headers();
    headers.append('authorization', this.token);
    
    return this.http.get(url, {headers}).map(res => {
      //console.log(res.json().artists.items);
      this.artistas = res.json().artists.items;
      console.log(this.artistas);
    })        
  }

  getArtista(id:string) {
    let query = `/${ id }`;
    let url = this.urlArtista + query;
    let headers = new Headers();
    headers.append('authorization', this.token);
    
    return this.http.get(url, {headers}).map(res => {
      console.log(res.json());
      return res.json();
    })
  }

  getTop(id:string) {
    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;
    let headers = new Headers();
    headers.append('authorization', this.token);
    
    return this.http.get(url, {headers}).map(res => {
      console.log(res.json().tracks);
      return res.json().tracks;
    })
  }

}