import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Albums } from 'src/app/model/AlbumsModel';
import { AlbumService } from 'src/app/service/AlbumService';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  AlbumList:Albums[]=[];
  constructor(private router: Router ,private AlbumService: AlbumService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.AlbumService.getAll().subscribe(res =>{
        this.AlbumList = res;
     });
  }

}
