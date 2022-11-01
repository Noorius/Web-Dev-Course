import { Component, OnInit } from '@angular/core';
import { albums } from '../albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums = albums;
  
  constructor() { }

  ngOnInit() {
  }

  delete(al: any){
    albums.splice(albums.indexOf(al,0),1);
  }
}