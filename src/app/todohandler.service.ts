import { Injectable } from '@angular/core';


@Injectable()
export class TodohandlerService {

  addTodo: string = ""; 
  toDoList: string[] = [];
  
  addNewToDo(){
    let newTodo = this.addTodo;
    this.toDoList.push(newTodo);
    console.log(newTodo);
  }

  deleteToDo(i) {
    this.toDoList.splice(i, 1);
  }

  constructor() { }

}
