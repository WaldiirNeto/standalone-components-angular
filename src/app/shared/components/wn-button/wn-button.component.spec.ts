import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WnButtonComponent } from './wn-button.component';

describe('WnButtonComponent', () => {
  let component: WnButtonComponent;
  let fixture: ComponentFixture<WnButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WnButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WnButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
