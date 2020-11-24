import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KMLComponent } from './kml.component';

describe('KMLComponent', () => {
  let component: KMLComponent;
  let fixture: ComponentFixture<KMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KMLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
