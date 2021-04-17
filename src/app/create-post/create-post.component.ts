import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {BlogsService} from '../blogs.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
create=new FormGroup({
  title: new FormControl(''),
  content: new FormControl('')
})
  constructor(private blog: BlogsService) { }

  ngOnInit(): void {
  }
blogs(){
  
  this.blog.savePost(this.create.value).subscribe((result)=>{
 console.log(result);

  })
this.create.reset({});
 }
}
