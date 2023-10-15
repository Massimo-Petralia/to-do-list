import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListCanvasComponent } from './to-do-list-canvas.component';

describe('CanvasComponent', () => {
  let component: ToDoListCanvasComponent;
  let fixture: ComponentFixture<ToDoListCanvasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListCanvasComponent]
    });
    fixture = TestBed.createComponent(ToDoListCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
