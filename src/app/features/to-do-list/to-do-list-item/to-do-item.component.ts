import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss'],
})
export class ToDoListItemComponent implements OnChanges {
  @Input() item?: Item = {};

  @Output() update = new EventEmitter<Item>();

  @Output() check = new EventEmitter<Item>();

  @Output() delete = new EventEmitter<number | string | null>();

  save = new EventEmitter<any>();

  @Output() itemImage = new EventEmitter<Item>();

  showContent = false;


  toggleView(){
    this.showContent = !this.showContent;
  }

  form = this.fb.group({
    task: this.fb.control<string>(''),
    description: this.fb.control<string>(''),
    check: this.fb.control<boolean>(false),
    id: this.fb.control<number | string | null>(null),
    date: this.fb.control<string>('', Validators.required),
  });

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    const { item } = changes;

    if (item) {
      this.form.patchValue(this.item || {});
    }
  }

  onCheck() {
    this.form.patchValue({ check: !this.form.value.check });

    this.check.emit(this.form.value);
  }

  onSave() {
    this.update.emit(this.form.value);
    this.save.emit();
  }

  onDelete() {
    this.delete.emit(this.form.value.id);
  }

  getImageData(imageDataUrl: string) {
    debugger;
    this.itemImage.emit({ ...this.item, imageDataUrl });
  }
}
