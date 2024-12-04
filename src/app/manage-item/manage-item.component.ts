import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-manage-item',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,HttpClientModule],
  templateUrl: './manage-item.component.html',
  styleUrl: './manage-item.component.css'
})
export class ManageItemComponent {
  constructor(private router: Router, private http: HttpClient) { this.loadTable(); }

  public item:any={
    name:"",
    rentalPerDay:"",
    findPerDay:"",
    availability:"",
  };

  itemList: any[] = [];
  itemTemp: any = {};

  loadTable() {
    this.http.get('http://localhost:8080/item/getAll-item').subscribe(
      (response: any) => {
        this.itemList = response;
      },
      (error) => {
        console.error('Failed to load customers:', error);
      }
    );
  }

  deleteItemById(itemID: any) {
    console.log(itemID);
    this.http.delete(`http://localhost:8080/item/delete-item-by-id/${itemID}`).subscribe(data => {
      alert("Item deleted !!!!");
      this.loadTable();
    })

  }

  updateItem(item: any) {
    console.log("update item" + item);
    this.itemTemp = { ...item };
  }
  saveItem() {
    this.http.post("http://localhost:8080/item/update-item",this.itemTemp).subscribe((data)=>{
      alert("Item Updateed!!!!");
  })
  }

  viewHome() {
    this.router.navigate(['']);
  }

  viewaddCustomer() {
    this.router.navigate(['admin-dashbord']);
  }

  viewaddItems() {
    this.router.navigate(['add-item']);
  }
}
