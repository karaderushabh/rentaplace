import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyconfirmedpropComponent } from './myconfirmedprop.component';

describe('MyconfirmedpropComponent', () => {
  let component: MyconfirmedpropComponent;
  let fixture: ComponentFixture<MyconfirmedpropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyconfirmedpropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyconfirmedpropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
