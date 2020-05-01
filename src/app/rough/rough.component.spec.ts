import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoughComponent } from './rough.component';

describe('RoughComponent', () => {
  let component: RoughComponent;
  let fixture: ComponentFixture<RoughComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoughComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoughComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
