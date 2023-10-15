import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/service/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './to-do-list-page.component.html',
  styleUrls: ['./to-do-list-page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy, AfterViewInit {
  items: Item[] = [];

  subs = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subs.add(
      this.dataService.getItems().subscribe((items) => (this.items = items))
    );
  }
  ngAfterViewInit(): void {}

  onAdd(data: Item) {
    this.subs.add(
      this.dataService
        .create(data)
        .subscribe((item) => (this.items = [...this.items, item]))
    );
  }

  onUpdate(item: Item) {
    this.subs.add(
      this.dataService.update(item).subscribe((item) => {
        this.items.map((elem) => (elem.id !== item.id ? elem : item));
      })
    );
  }

  onCheck(item: Item) {
    let propertyToChange: Partial<Item> = {
      check: item.check,
    };
    this.subs.add(
      this.dataService.check(item, propertyToChange).subscribe((item) => {
        this.items = this.items.map((data) =>
          data.check !== item.check && data.id === item.id ? item : data
        );
      })
    );
  }

  onDelete(id: number | string | null) {
    this.subs.add(
      this.dataService.delete(id).subscribe(() => {
        this.items = this.items.filter((elem) => elem.id !== id);
      })
    );
  }

  onImageItem(imageItem: Item) {
    let propertyToChange: Partial<Item> = {
      imageDataUrl: imageItem.imageDataUrl,
    };
    this.subs.add(
      this.dataService
        .UpdateImage(imageItem, propertyToChange)
        .subscribe((item) => {
          this.items = this.items.map((data) =>
            data.imageDataUrl !== item.imageDataUrl && data.id === item.id
              ? item
              : data
          );
        })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
