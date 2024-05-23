import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNuevoproductoComponent } from './form-nuevoproducto.component';

describe('FormNuevoproductoComponent', () => {
  let component: FormNuevoproductoComponent;
  let fixture: ComponentFixture<FormNuevoproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormNuevoproductoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormNuevoproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
