import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmypropertiesComponent } from './listmyproperties.component';

describe('ListmypropertiesComponent', () => {
  let component: ListmypropertiesComponent;
  let fixture: ComponentFixture<ListmypropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmypropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListmypropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
