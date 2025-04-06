import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableWindowComponent } from './draggable-window.component';

describe('DraggableWindowComponent', () => {
  let component: DraggableWindowComponent;
  let fixture: ComponentFixture<DraggableWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DraggableWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DraggableWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
