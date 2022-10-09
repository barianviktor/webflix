import { Component, Input, OnInit } from '@angular/core';
import { IMediaCard } from 'src/app/models/interfaces/mediaCard.interface';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss'],
})
export class MediaCardComponent implements OnInit {
  img_api: string = environment.img_api;
  @Input() mediaCard!: IMediaCard;
  constructor() {}

  ngOnInit(): void {}
}
