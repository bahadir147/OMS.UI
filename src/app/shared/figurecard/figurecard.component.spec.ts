/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FigurecardComponent } from './figurecard.component';

describe('FigurecardComponent', () => {
  let component: FigurecardComponent;
  let fixture: ComponentFixture<FigurecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FigurecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
