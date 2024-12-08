import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradosCarrerasComponent } from './grados-carreras.component';

describe('GradosCarrerasComponent', () => {
  let component: GradosCarrerasComponent;
  let fixture: ComponentFixture<GradosCarrerasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradosCarrerasComponent]
    });
    fixture = TestBed.createComponent(GradosCarrerasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
