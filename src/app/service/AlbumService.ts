import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { END_POINTS } from './global-config';
import { Observable } from 'rxjs';
import { Albums } from '../model/AlbumsModel';
const API_URL = END_POINTS.AlbumsData;
@Injectable({
    providedIn: 'root'
  })
  
export class AlbumService{
    constructor(private http: HttpClient) { }
    getAll(): Observable<Albums[]> {
        return this.http.get<Albums[]>(API_URL)
        }

}