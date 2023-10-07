import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Item } from 'src/app/models/item';
import { generateID } from 'src/app/helper/generate-id';

@Component({
  selector: 'app-newItem',
  templateUrl: './newItem.component.html',
  styleUrls: ['./newItem.component.scss'],
})
export class ItemComponent {
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
