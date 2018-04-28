import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  
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

  constructor() {

  }


  ngOnInit() {
  }

}
