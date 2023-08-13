import { Component, OnInit } from '@angular/core';
import { Item } from '../types/catalogItem';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemsList: Item[] = [];
  constructor(private apiService: ApiService) {
   
  }
  ngOnInit(): void {
    this.apiService.getItems().subscribe(items =>{
      this.itemsList = Object.values(items);

      if (this.itemsList.length > 3){
        const n = 3;
      this.itemsList = Object.values(items).slice(-n);
      console.log({items})
      }
    });
  }
}
