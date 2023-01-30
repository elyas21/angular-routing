import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkGovComponent } from './park-gov.component';

describe('ParkGovComponent', () => {
  let component: ParkGovComponent;
  let fixture: ComponentFixture<ParkGovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkGovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkGovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
