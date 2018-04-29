import { Component, OnInit } from '@angular/core';
import { TodohandlerService } from '../todohandler.service';
import { ENGINE_METHOD_DIGESTS } from 'constants';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor (private todohandlerService: TodohandlerService){}
    addTodo: string = "";
    toDoList: string[] = [];

    addNewToDo(){
      this.toDoList = this.todohandlerService.addNewItem(this.toDoList, this.addTodo);
    }
    
    deleteToDo(i){
      this.todohandlerService.deleteItem(this.toDoList, i);
    }
  }

  //ngOnInt(){
  //}

}
