import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  @Input() items: Item[] = [];

  @Output() delete = new EventEmitter<number | string | null>();

  @Output() update = new EventEmitter<Item>();

  @Output() check = new EventEmitter<Item>();

  @Output() imageItem = new EventEmitter<Item>()

  constructor() {}

  onDelete(id: number | string | null) {
    this.delete.emit(id);
  }
  onUpdate(item: Item) {
    this.update.emit(item);
  }

  onCheck(item: Item) {
    this.check.emit(item);
  };

   getImageData(imageItem: Item){
    this.imageItem.emit(imageItem)
   }

  sortList() {
    this.items = this.items.sort((a, b) => {
      return a.check === b.check ? 0 : a.check === false ? -1 : 1;
    });
  }
}
