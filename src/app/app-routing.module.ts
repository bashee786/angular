import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';
import { TodocreateComponent } from './todocreate/todocreate.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    {path:'welcome/:name', component:WelcomeComponent},
    {path:'' , component:LoginComponent},
    {path:'todo',component:TodoComponent},
    {path:'logout',component:LogoutComponent},
    {path:'login',component:LoginComponent},
    {path:'create',component:TodocreateComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
