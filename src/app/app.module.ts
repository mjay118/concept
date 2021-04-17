import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsService } from './authors.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    CreatePostComponent,
    BlogsComponent,
    EditComponent,
   HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatFormFieldModule ,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
