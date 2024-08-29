import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'To do list!';
  toDos: any[] = [];
  addTodo(item: string) {
    this.toDos.push({ id: this.toDos.length, name: item });
    console.log(this.toDos);
  }
  removeTodo(id: number) {
    this.toDos = this.toDos.filter((todo) => todo.id !== id);
  }
}
