import {Component, Input, OnInit} from '@angular/core';
import {SocialMediaClientService} from '../social-media-client.service';
import {SocialMediaPost} from '../../entity/SocialMediaPost';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-social-media-post-card',
  templateUrl: './social-media-post-card.component.html',
  styleUrls: ['./social-media-post-card.component.css']
})
export class SocialMediaPostCardComponent implements OnInit {
  @Input() posts: SocialMediaPost[];

  constructor(private postService: SocialMediaClientService) { }

  ngOnInit(): void {
  }
}
