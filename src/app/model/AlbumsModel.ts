export class Albums{
    albumRoutingName:string;
    albumName:string;
    artistName:string;
    albumImagePath:string;
    albumId:number;
    constructor(albumRoutingName:string , albumName:string , artistName:string , albumImagePath:string , albumId:number){
     this.albumRoutingName = albumRoutingName;
     this.albumName = albumName;
     this.artistName = artistName;
     this.albumImagePath = albumImagePath;
     this.albumId = albumId;

    }
}