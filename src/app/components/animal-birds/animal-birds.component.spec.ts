import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalBirdsComponent } from './animal-birds.component';

describe('AnimalBirdsComponent', () => {
  let component: AnimalBirdsComponent;
  let fixture: ComponentFixture<AnimalBirdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalBirdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalBirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
