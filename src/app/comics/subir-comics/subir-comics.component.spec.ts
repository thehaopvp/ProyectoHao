import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirComicsComponent } from './subir-comics.component';

describe('SubirComicsComponent', () => {
  let component: SubirComicsComponent;
  let fixture: ComponentFixture<SubirComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirComicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
