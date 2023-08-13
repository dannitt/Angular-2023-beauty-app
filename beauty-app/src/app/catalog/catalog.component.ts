import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Item } from '../types/catalogItem';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  itemsList: Item[] = [];
  constructor(private apiService: ApiService, private userService: UserService) {
   
  }
  ngOnInit(): void {
    this.apiService.getItems().subscribe(items =>{
      this.itemsList = Object.values(items); 
      console.log({items})
      
    })
  }
  get isLogged(): boolean {
    return this.userService.isLogged;
  }
}