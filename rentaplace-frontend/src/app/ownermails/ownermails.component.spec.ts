import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnermailsComponent } from './ownermails.component';

describe('OwnermailsComponent', () => {
  let component: OwnermailsComponent;
  let fixture: ComponentFixture<OwnermailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnermailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnermailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
