import { Component, OnInit } from '@angular/core';
import {SocialMediaClientService} from '../social-media-client.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-you-tube-channel-input',
  templateUrl: './add-you-tube-channel-input.component.html',
  styleUrls: ['./add-you-tube-channel-input.component.css']
})
export class AddYouTubeChannelInputComponent implements OnInit {
  value = '';
  response: string;
  constructor(private socialMediaClientService: SocialMediaClientService) { }

  ngOnInit(): void {
  }

  addChannel(): void {
    this.socialMediaClientService.addChannel(this.value).subscribe((response => this.response));
  }
}
