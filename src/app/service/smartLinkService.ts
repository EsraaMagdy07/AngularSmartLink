import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { END_POINTS } from './global-config';
import { SmartLink } from '../model/smartLinkModel';
import { Observable } from 'rxjs';


const API_URL = END_POINTS.SmartLinkData;
@Injectable({
  providedIn: 'root'
})
export class SmartLinkService {

  constructor(private http: HttpClient) { }

    // get SmartLink Data
    getAll(id:number): Observable<SmartLink> {
    return this.http.get<SmartLink>(API_URL+`/${id}`)
    }
}
