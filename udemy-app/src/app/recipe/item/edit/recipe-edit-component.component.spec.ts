import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeEditComponentComponent } from './recipe-edit-component.component';

describe('RecipeEditComponentComponent', () => {
  let component: RecipeEditComponentComponent;
  let fixture: ComponentFixture<RecipeEditComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeEditComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
