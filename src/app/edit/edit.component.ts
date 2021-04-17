import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {BlogsService} from '../blogs.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  edit=new FormGroup({
    title: new FormControl(''),
    content: new FormControl('')
  })
  constructor(private router:ActivatedRoute, private blog:BlogsService) { }
editdata:any={};
  ngOnInit(): void {
console.log(this.router.snapshot.params.id)
this.blog.getPostById(this.router.snapshot.params.id).subscribe((result)=>{
  this.editdata=result;
  this.edit=new FormGroup({
    title: new FormControl(this.editdata.title),
    content: new FormControl(this.editdata.content)
  })
})
  }
update(){
  this.blog.updatePost(this.router.snapshot.params.id,this.edit.value).subscribe((result)=>{
console.log(result);
  })
  this.edit.reset({});

}
}
