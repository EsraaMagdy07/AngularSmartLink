import { Component, OnInit } from '@angular/core';
import {  Params, Router } from '@angular/router';
import { SmartLink } from 'src/app/model/smartLinkModel';
import { ChannelData } from 'src/app/model/channelDataModel';
import { SmartLinkService } from 'src/app/service/smartLinkService';
import { Track } from 'ngx-audio-player'; 
import { ActivatedRoute } from '@angular/router';  
@Component({
  selector: 'app-smart-link',
  templateUrl: './smart-link.component.html',
  styleUrls: ['./smart-link.component.css']
})
export class SmartLinkComponent implements OnInit {
sam = new SmartLink("" , "" , "" , "" , "");
music = document.querySelector('audio');
AlbumId:number =0;
trackUrl:string='';
 audioList:any;
constructor(private router: Router ,
  private SmartLinkService: SmartLinkService,
  private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.AlbumId = params['marks'];
   });





    this.SmartLinkService.getAll(this.AlbumId).subscribe(res =>{
      console.log(res);
     this.sam.trackUrl = '"'+res.trackUrl+'"';
     this.sam = res;
     });


     this.audioList = [
   
      {
        url: "https://api.muzicup.com//Portal/5/Content/Tracks/AmrElShazly_ElGarh.mp3",
        title: "Ana Lesa Hena",
        cover: "https://api.muzicup.com//Portal/5/Content/Images/MaiKassab.jpg"
      }
    ];
  }








  playAudio(){
    let audioEle =  document.querySelector('audio');
    if(audioEle != null)
    {
      if(audioEle.played)
      {
        audioEle.play();
      }
      else{
        audioEle.pause();
      }
     
    }
    }
    
}



