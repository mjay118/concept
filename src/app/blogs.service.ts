import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

url="http://localhost:3000/blogs"
  constructor(private http: HttpClient) { }
  getPost(){
return this.http.get(this.url);
  }
  savePost(data: string){
return this.http.post(this.url,data);
  }
  deletePost(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getPostById(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updatePost(id:any,data:string){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
