import { Component, OnInit  } from '@angular/core';
import { Album } from 'src/app/Modele/Album';
import { AlbumService } from 'src/app/service/album.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {
 listAlbum:any[]=[];

 constructor(private albumserv:AlbumService){}
 ngOnInit(): void {
   this.albumserv.getAlbums().subscribe((data:any)=> this.listAlbum=data);
 }


}
