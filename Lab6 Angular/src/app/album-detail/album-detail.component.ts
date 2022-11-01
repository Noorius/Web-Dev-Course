import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, albums } from '../albums';
import { FormBuilder } from '@angular/forms'; 

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  detail_title: string | undefined;


  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('albumId'));

    this.album = albums.find(album => album.id === productIdFromRoute);
    this.detail_title = this.album.title;
  }

  onSubmit(){
    console.log(0);
  }
}