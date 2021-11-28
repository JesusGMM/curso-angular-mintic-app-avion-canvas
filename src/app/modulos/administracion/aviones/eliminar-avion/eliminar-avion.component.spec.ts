import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAvionComponent } from './eliminar-avion.component';

describe('EliminarAvionComponent', () => {
  let component: EliminarAvionComponent;
  let fixture: ComponentFixture<EliminarAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
