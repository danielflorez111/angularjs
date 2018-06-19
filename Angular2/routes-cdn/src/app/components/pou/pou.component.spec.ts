import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PouComponent } from './pou.component';

describe('PouComponent', () => {
  let component: PouComponent;
  let fixture: ComponentFixture<PouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
