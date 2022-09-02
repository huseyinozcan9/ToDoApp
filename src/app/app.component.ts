import { Component } from '@angular/core';
import { Model ,toDoItem} from './model';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model =new Model();
  isDisplay=false;

  getName(){
    return this.model.user;
  }
  getItems(){
    if(this.isDisplay){
      return this.model.items
    }
    return this.model.items.filter(item=>!item.action);
  }
  addItem(value:any){
    if(value!=""){
      this.model.items.push(new toDoItem(value,false))
    }
  }
}
