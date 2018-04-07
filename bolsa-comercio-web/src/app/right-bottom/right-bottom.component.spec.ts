import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBottomComponent } from './right-bottom.component';

describe('RightBottomComponent', () => {
  let component: RightBottomComponent;
  let fixture: ComponentFixture<RightBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
