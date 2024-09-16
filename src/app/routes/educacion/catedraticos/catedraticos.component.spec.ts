import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatedraticosComponent } from './catedraticos.component';

describe('CatedraticosComponent', () => {
  let component: CatedraticosComponent;
  let fixture: ComponentFixture<CatedraticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatedraticosComponent]
    });
    fixture = TestBed.createComponent(CatedraticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
