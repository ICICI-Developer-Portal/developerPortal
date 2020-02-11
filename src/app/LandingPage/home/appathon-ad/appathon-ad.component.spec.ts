import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppathonAdComponent } from './appathon-ad.component';

describe('AppathonAdComponent', () => {
  let component: AppathonAdComponent;
  let fixture: ComponentFixture<AppathonAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppathonAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppathonAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
