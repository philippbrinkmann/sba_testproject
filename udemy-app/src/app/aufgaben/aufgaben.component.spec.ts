import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabenComponent } from './aufgaben.component';

describe('AufgabenComponent', () => {
  let component: AufgabenComponent;
  let fixture: ComponentFixture<AufgabenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AufgabenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
