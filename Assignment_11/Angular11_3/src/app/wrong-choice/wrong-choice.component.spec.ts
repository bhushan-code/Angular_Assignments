import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongChoiceComponent } from './wrong-choice.component';

describe('WrongChoiceComponent', () => {
  let component: WrongChoiceComponent;
  let fixture: ComponentFixture<WrongChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrongChoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
