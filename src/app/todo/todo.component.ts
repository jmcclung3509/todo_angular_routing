import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Item } from "../item"

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  canEdit: boolean = false;

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>()

  saveItem(todo: string) {
    if (!todo) return;
    this.canEdit = false;
    this.item.todo = todo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
