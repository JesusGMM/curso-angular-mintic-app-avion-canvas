import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAvionComponent } from './editar-avion.component';

describe('EditarAvionComponent', () => {
  let component: EditarAvionComponent;
  let fixture: ComponentFixture<EditarAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
