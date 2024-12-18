import { Component } from '@angular/core';
import { Album } from 'src/app/Modele/Album';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  constructor(private albumservice:AlbumService){}
album:Album = new Album();
addAlbum(album:Album){
album.archived =0;
this.albumservice.addalbum(album).subscribe;

}
}
