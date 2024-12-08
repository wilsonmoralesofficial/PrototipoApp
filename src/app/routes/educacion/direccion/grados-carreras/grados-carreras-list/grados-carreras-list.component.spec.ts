import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosCarrerasListComponent } from './grados-carreras-list.component';

describe('GradosCarrerasListComponent', () => {
  let component: GradosCarrerasListComponent;
  let fixture: ComponentFixture<GradosCarrerasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradosCarrerasListComponent]
    });
    fixture = TestBed.createComponent(GradosCarrerasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
