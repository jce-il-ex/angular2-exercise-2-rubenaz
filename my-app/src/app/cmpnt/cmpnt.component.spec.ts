/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CmpntComponent } from './cmpnt.component';

describe('CmpntComponent', () => {
  let component: CmpntComponent;
  let fixture: ComponentFixture<CmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
