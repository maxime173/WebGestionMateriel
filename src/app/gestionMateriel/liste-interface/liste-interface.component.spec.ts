import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInterfaceComponent } from './liste-interface.component';

describe('ListeInterfaceComponent', () => {
  let component: ListeInterfaceComponent;
  let fixture: ComponentFixture<ListeInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
