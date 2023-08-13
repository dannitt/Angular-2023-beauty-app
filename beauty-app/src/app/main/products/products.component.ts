import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Item } from 'src/app/types/catalogItem';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  item: Item | undefined;
  constructor(private apiService: ApiService, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router ) {}

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  ngOnInit(): void {
    this.fetchItem()
  }

  fetchItem():void {
    const id = this.activatedRoute.snapshot.params['itemId'];
    this.apiService.getItem(id).subscribe(item => {
      this.item = item;
      console.log({item})
    })
  }
  buy(form: NgForm): void {
    if(form.invalid){
      return;
    }
    const {email, address, phone } = form.value;
    this.router.navigate(['/catalog'])
    };
  } 

