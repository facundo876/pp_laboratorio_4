import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaListadoComponent } from './grilla-listado.component';

describe('GrillaListadoComponent', () => {
  let component: GrillaListadoComponent;
  let fixture: ComponentFixture<GrillaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
