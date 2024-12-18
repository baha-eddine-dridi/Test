import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Album } from '../Modele/Album';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }
  getAlbums():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3000/albums');
  }

  addalbum(album:any) {
    return this.http.post('http://localhost:3000/albums',album );
  }
}
