import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEsperaLoaderComponent } from './modal-espera-loader.component';

describe('ModalEsperaLoaderComponent', () => {
  let component: ModalEsperaLoaderComponent;
  let fixture: ComponentFixture<ModalEsperaLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEsperaLoaderComponent]
    });
    fixture = TestBed.createComponent(ModalEsperaLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
