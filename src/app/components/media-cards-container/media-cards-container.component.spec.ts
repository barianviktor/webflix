import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCardsContainerComponent } from './media-cards-container.component';

describe('MediaCardsContainerComponent', () => {
  let component: MediaCardsContainerComponent;
  let fixture: ComponentFixture<MediaCardsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaCardsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCardsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
