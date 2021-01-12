import {ChannelData} from  "../model/channelDataModel";
export class SmartLink {
  artistName:string ;
  contentName:string ;
  albumName:string;
  trackUrl:string;
  imageUrl:string;
    constructor(ArtistName:string , ContentName:string , AlbumName:string,TrackUrl:string, ImageUrl:string){
     this.artistName =  ArtistName ;
     this.contentName = ContentName;
this.albumName = AlbumName;
this.trackUrl = TrackUrl;
this.imageUrl = ImageUrl;

    }
  }