import { Component, OnInit } from '@angular/core';
import {BlogsService} from '../blogs.service';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
date=new Date();
  constructor(private blog:BlogsService) { }
blogPosts:any=[];
  ngOnInit(): void {
    this.blog.getPost().subscribe((result)=>{
      this.blogPosts=result;
    })
  }
  delete(item: any){
    this.blogPosts.splice(item-1,1);

    this.blog.deletePost(item).subscribe(()=>{
    })
  }
  
}
