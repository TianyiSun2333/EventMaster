import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResTableComponent } from './res-table.component';

describe('ResTableComponent', () => {
  let component: ResTableComponent;
  let fixture: ComponentFixture<ResTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
