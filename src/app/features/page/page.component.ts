import { Component, OnInit, OnDestroy } from '@angular/core';
import { Item } from 'src/app/models/item';
import { DataService } from 'src/app/service/data.service';
import { Subscription, catchError, map, tap } from 'rxjs';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnInit, OnDestroy {
  items: Item[] = [];

  subs = new Subscription();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subs.add(
      this.dataService.getItems().subscribe((items) => (this.items = items))
    );
  }

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

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
