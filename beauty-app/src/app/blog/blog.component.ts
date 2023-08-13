import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  postList: Post[] = [];
  constructor(private apiService: ApiService) {
   
  }
  ngOnInit(): void {
    this.apiService.getPosts().subscribe(posts =>{
      this.postList = Object.values(posts); 

      if (this.postList.length > 3){
        const n = 3;
        this.postList = Object.values(posts).slice(-n);
      }
    })
  }
}

