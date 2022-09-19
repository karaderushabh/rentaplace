import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatownerComponent } from './chatowner.component';

describe('ChatownerComponent', () => {
  let component: ChatownerComponent;
  let fixture: ComponentFixture<ChatownerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatownerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatownerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
