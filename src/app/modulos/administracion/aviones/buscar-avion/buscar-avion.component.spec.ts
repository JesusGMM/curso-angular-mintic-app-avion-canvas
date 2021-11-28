import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAvionComponent } from './buscar-avion.component';

describe('BuscarAvionComponent', () => {
  let component: BuscarAvionComponent;
  let fixture: ComponentFixture<BuscarAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
