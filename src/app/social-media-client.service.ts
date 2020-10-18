import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SocialMediaPost} from '../entity/SocialMediaPost';
import {map, takeUntil, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaClientService {
  private apiUrl = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<SocialMediaPost[]>{
    return this.http.get<SocialMediaPost[]>(this.apiUrl);
  }
  addChannel(channelId: string): Observable<object> {
    const body = {channelId};
    return this.http.post('http://localhost:8080/addYTchannel', body);
  }
}
