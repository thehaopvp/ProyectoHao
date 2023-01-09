import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloDetailsComponent } from './capitulo-details.component';

describe('CapituloDetailsComponent', () => {
  let component: CapituloDetailsComponent;
  let fixture: ComponentFixture<CapituloDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapituloDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
