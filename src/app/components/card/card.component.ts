import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  tasksList: string[] = [];

  constructor() {

    // this.tasksList.push()
  }

  get oldTasks() {
    return localStorage.getItem('tasks');
  }

  onNewTask( tarea: string) {

    localStorage.setItem('tasks', tarea)
    this.tasksList.push( tarea );
  }

  removeTask(index: number): void {

    this.tasksList.splice(index,1);
  }
}
