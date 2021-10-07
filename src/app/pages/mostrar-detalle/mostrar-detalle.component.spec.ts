import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarDetalleComponent } from './mostrar-detalle.component';

describe('MostrarDetalleComponent', () => {
  let component: MostrarDetalleComponent;
  let fixture: ComponentFixture<MostrarDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
