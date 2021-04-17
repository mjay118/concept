import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {component: CreatePostComponent , path:'post'},
  {component: EditComponent , path:'edit/:id'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
