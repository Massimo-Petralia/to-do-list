import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-to-do-list-new-item',
  templateUrl: './to-do-list-new-item.component.html',
  styleUrls: ['./to-do-list-new-item.component.scss'],
})
export class ToDoListNewItemComponent {
  @Output() create = new EventEmitter<Item>();

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    task: this.fb.control<string>(''),
    description: this.fb.control<string>(''),
    check: this.fb.control<boolean>(false),
    id: this.fb.control<number | string | null>(null),
  });

  onCreate() {
    this.create.emit(this.form.value);
    this.form.patchValue({task: null, description: null})
  }
}
