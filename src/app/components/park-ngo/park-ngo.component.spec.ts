import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkNgoComponent } from './park-ngo.component';

describe('ParkNgoComponent', () => {
  let component: ParkNgoComponent;
  let fixture: ComponentFixture<ParkNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkNgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
