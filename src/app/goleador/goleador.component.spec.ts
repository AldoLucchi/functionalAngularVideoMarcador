import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoleadorComponent } from './goleador.component';

describe('GoleadorComponent', () => {
  let component: GoleadorComponent;
  let fixture: ComponentFixture<GoleadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoleadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoleadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
