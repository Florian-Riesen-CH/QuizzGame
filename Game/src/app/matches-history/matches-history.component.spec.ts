import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesHistoryComponent } from './matches-history.component';

describe('MatchesHistoryComponent', () => {
  let component: MatchesHistoryComponent;
  let fixture: ComponentFixture<MatchesHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesHistoryComponent]
    });
    fixture = TestBed.createComponent(MatchesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
