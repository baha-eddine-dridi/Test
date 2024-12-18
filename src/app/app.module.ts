import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArchivesComponent } from './components/archives/archives.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { FormsModule } from '@angular/forms';
const route :Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'albums',component:ListAlbumsComponent},
  {path:'archives',component:ArchivesComponent},
  {path:'album/add',component:AddAlbumComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListAlbumsComponent,
    ArchivesComponent,
    AddAlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
