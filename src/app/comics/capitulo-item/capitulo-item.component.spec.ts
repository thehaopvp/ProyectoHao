import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapituloItemComponent } from './capitulo-item.component';

describe('CapituloItemComponent', () => {
  let component: CapituloItemComponent;
  let fixture: ComponentFixture<CapituloItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapituloItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapituloItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
