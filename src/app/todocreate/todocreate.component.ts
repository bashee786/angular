import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {


  public description: string;
  public date: Date;

}

@Component({
  selector: 'app-todocreate',
  templateUrl: './todocreate.component.html',
  styleUrls: ['./todocreate.component.css']
})
export class TodocreateComponent implements OnInit {

  todo: Todo
  constructor(private service: TodoDataService) { }

  ngOnInit() {
  }
  saveform = new FormGroup({
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    date: new FormControl('', [Validators.required, Validators.maxLength(3)])
  });




  saveTodo(saveform) {
    console.log("save form",saveform);
    this.todo = new Todo();
    this.todo.description = this.todoDescription.value;
    // this.todo.date = this.todoDate.value;
    this.save();
  }

  get todoDescription() {
    return this.saveform.get('description');
  }

  get todoDate() {
    return this.saveform.get('date');
  }
  save() {
    console.log("success");
    this.service.createTodo(this.todo)
      .subscribe(data => console.log(data), error => console.log(error));
      console.log("success");
    this.todo = new Todo();
  }
}
