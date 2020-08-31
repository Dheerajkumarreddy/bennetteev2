import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormforNewEmployerComponent } from './formfor-new-employer.component';

describe('FormforNewEmployerComponent', () => {
  let component: FormforNewEmployerComponent;
  let fixture: ComponentFixture<FormforNewEmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormforNewEmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormforNewEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
