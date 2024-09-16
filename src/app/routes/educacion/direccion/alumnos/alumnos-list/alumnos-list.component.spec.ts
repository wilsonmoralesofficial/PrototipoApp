import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnosListComponent } from './alumnos-list.component';

describe('AlumnosListComponent', () => {
  let component: AlumnosListComponent;
  let fixture: ComponentFixture<AlumnosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnosListComponent]
    });
    fixture = TestBed.createComponent(AlumnosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
