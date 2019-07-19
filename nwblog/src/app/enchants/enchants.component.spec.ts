import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnchantsComponent } from './enchants.component';

describe('EnchantsComponent', () => {
  let component: EnchantsComponent;
  let fixture: ComponentFixture<EnchantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnchantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnchantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
