import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SocialMediaPost} from '../entity/SocialMediaPost';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaClientService {
  private apiUrl = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getPosts(): Observable<SocialMediaPost[]>{
    return this.http.get<SocialMediaPost[]>(this.apiUrl);
  }
  addChannel(title: string): Observable<object> {
    return this.http.post('http://localhost:8080//subscriptions/youtube', title, this.httpOptions);
  }

}
