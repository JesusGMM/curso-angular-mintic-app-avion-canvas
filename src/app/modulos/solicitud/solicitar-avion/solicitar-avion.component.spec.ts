import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAvionComponent } from './solicitar-avion.component';

describe('SolicitarAvionComponent', () => {
  let component: SolicitarAvionComponent;
  let fixture: ComponentFixture<SolicitarAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarAvionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
