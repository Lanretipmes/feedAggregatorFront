import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {SocialMediaPost} from '../entity/SocialMediaPost';
import {SocialMediaClientService} from './social-media-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FeedAggregatorFront';
  posts$: Observable<SocialMediaPost[]>;

  constructor(private postService: SocialMediaClientService) { }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
