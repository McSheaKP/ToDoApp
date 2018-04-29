import { Injectable } from '@angular/core';


@Injectable()
export class TodohandlerService {

  

  addNewItem(array, item) {
    array.push(item);
    return array;
  }

  deleteItem(array, index) {
    array.splice(index, 1);
    return array;
  }

  constructor() { }

}
