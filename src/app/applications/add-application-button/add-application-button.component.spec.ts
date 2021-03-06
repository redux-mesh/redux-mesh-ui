import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationButtonComponent } from './add-application-button.component';

describe('AddApplicationButtonComponent', () => {
  let component: AddApplicationButtonComponent;
  let fixture: ComponentFixture<AddApplicationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddApplicationButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
