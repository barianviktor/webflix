import { Component, Input, OnInit } from '@angular/core';
import { IMediaCard } from 'src/app/models/interfaces/mediaCard.interface';

@Component({
  selector: 'app-media-cards-container',
  templateUrl: './media-cards-container.component.html',
  styleUrls: ['./media-cards-container.component.scss'],
})
export class MediaCardsContainerComponent implements OnInit {
  @Input() mediaCards?: IMediaCard[];
  constructor() {}

  ngOnInit(): void {}
}
