import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addignment2Component } from './addignment2.component';

describe('Addignment2Component', () => {
  let component: Addignment2Component;
  let fixture: ComponentFixture<Addignment2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Addignment2Component]
    });
    fixture = TestBed.createComponent(Addignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
