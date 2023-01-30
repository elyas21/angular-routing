import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkPrivateComponent } from './park-private.component';

describe('ParkPrivateComponent', () => {
  let component: ParkPrivateComponent;
  let fixture: ComponentFixture<ParkPrivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkPrivateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
