import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveusersComponent } from './activeusers.component';

describe('ActiveusersComponent', () => {
  let component: ActiveusersComponent;
  let fixture: ComponentFixture<ActiveusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
