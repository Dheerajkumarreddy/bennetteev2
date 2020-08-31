import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfEmployersComponent } from './list-of-employers.component';

describe('ListOfEmployersComponent', () => {
  let component: ListOfEmployersComponent;
  let fixture: ComponentFixture<ListOfEmployersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfEmployersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
