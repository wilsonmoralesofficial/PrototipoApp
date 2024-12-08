import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosCarrerasFormComponent } from './grados-carreras-form.component';

describe('GradosCarrerasFormComponent', () => {
  let component: GradosCarrerasFormComponent;
  let fixture: ComponentFixture<GradosCarrerasFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradosCarrerasFormComponent]
    });
    fixture = TestBed.createComponent(GradosCarrerasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
