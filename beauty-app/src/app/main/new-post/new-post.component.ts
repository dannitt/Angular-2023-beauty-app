import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  postList: Post[] = [];
  constructor(private apiService: ApiService, private userService: UserService, private router: Router) {
   
  }
  
  newPostSubmitHandler(form: NgForm): void {
    if(form.invalid){
      return;
    }
    const {title, content, nickName, date} = form.value;
      console.log(form.value)
     this.apiService.createPost(title, content, nickName, date )
      .subscribe(() => {
      this.router.navigate(['/catalog'])
    })
  }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(posts =>{
      this.postList = Object.values(posts); 
    })
  }
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}
