import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent {


  public item: any = {
    name: "",
    rentalPerDay: "",
    findPerDay: "",
    availability: ""
  };

  constructor(private http: HttpClient, private router: Router) { }

  public addItem() {
    this.http.post("http://localhost:8080/item/add-item", this.item).subscribe((data) => {
      alert("Item Added!!!!");
    })
  }


  viewaddCustomer(){
    this.router.navigate(['admin-dashbord']);
  }

  viewaddItems() {
    this.router.navigate(['add-item']);
  }

  viewHome(){
    this.router.navigate(['']);
  }
}
