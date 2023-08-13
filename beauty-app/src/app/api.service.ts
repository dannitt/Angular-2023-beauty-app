import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from './types/post';
import { Item } from './types/catalogItem';
import { User } from './types/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getItem(id:string) {
    const {apiUrl} = environment;
    return this.http.get<Item>(`${apiUrl}/catalog/${id}`);
  }
  getItems() {
    const {apiUrl} = environment;
    return this.http.get<Item[]>(`${apiUrl}/catalog`);
  }
  getPosts(limit?: number) {
    const {apiUrl} = environment;
    
    return this.http.get<Post[]>(`${apiUrl}/blog`);
  }
  createPost(
    title: string,
    content: string,
    nickName: string,
    date: string
  ) {
    const {apiUrl} = environment;
    return this.http.post<Post>(`${apiUrl}/blog`, {title, content, nickName, date} )
  }
}
