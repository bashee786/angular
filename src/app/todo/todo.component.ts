import { PipeCollector } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

// @Pipe({ name: 'searchByName' })
// export class SearchByNamePipe implements PipeTransform {
//   transform(todo: Todo[], searchText: string) {
//     return todo.filter(tod => tod.description.indexOf(searchText) !== -1);
//   }
// }

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public date: Date
  ) {

  }
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {

  searchedText = String;
  id = 1;
  p: Number = 1;
  count: Number = 2;

  todos : Todo[]
  message : String
  updateMessage : String
  constructor(private service:TodoDataService) { }

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos(){
  this.service.retriveAll('Bashee').subscribe(
    response =>  {
      this.todos=response;
    }
  )
  }
  deleteOne(id){
  this.service.deleteOne('basheera', id).subscribe(
    response =>  {
      //this.todos=response;
      console.log(id);
      console.log(response);
      this.message="Deleted Succesfully!!";
      this.refreshTodos();
    }
  )
}
updateOne(id) {
  this.service.updateOne('Bashee',id,this.todos).subscribe(
    response => {
      this.updateMessage = "Updated successfully";
    }
  )
}
save(id) {
  this.service.updateOne('Bashee',id,this.todos).subscribe(
    response => {
      this.updateMessage = "Updated successfully";
    }
  )
}
}