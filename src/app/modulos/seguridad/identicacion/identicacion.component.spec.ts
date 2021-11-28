import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdenticacionComponent } from './identicacion.component';

describe('IdenticacionComponent', () => {
  let component: IdenticacionComponent;
  let fixture: ComponentFixture<IdenticacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdenticacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdenticacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
