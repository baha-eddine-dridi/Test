import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/Modele/Album';
import { AlbumService } from 'src/app/service/album.service';
@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
 listeArchive:any[]=[];

 constructor(private albserv:AlbumService){}
 ngOnInit(): void {
   this.albserv.getAlbums().subscribe((data:any)=>this.listeArchive=data);
 }
}
