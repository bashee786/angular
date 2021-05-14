import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/todo/todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retriveAll(username) {
  return this.http.get<Todo[]>(`http://localhost:8090/user/${username}/todos`)
    
  }
  deleteOne(username,id) {
    console.log(username + id);
  return this.http.delete(`http://localhost:8090/user/${username}/${id}`)

  
}
updateOne(username,id,todos) {
  return this.http.put(`http://localhost:8090/user/${username}/${id}`,todos)
}
createTodo(todo: object): Observable<object> {​​​​​​​​  
    return this.http.post(`http://localhost:8090/post/data`, todo);  
  }​​​​​​​​ 


}