import { Component } from '@angular/core';
import { Item } from "./item"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo_app_routing';


  filter: "all" | "active" | "isDone" = "all";

  allItems = [
    { todo: "Wash car", isDone: false },
    { todo: "Get groceries", isDone: false }
  ]
  get items() {
    if (this.filter === "all") {
      return this.allItems
    }
    return this.allItems.filter((item) => this.filter === "isDone" ? item.isDone : !item.isDone)
  }

  addItem(todo: string) {
    this.allItems.unshift({
      todo,
      isDone: false
    })
  }
  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1)
  }
}
