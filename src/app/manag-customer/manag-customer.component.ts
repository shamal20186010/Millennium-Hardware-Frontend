import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-manag-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink,HttpClientModule],
  templateUrl: './manag-customer.component.html',
  styleUrl: './manag-customer.component.css'
})
export class ManagCustomerComponent {

  constructor(private router: Router, private http: HttpClient) { this.loadTable(); }

  public customer:any={
    name:"",
    address:"",
    email:""
  };

  customerList: any[] = [];
  customerTemp: any = {};
  selectedFile: File | null = null;


  loadTable() {
    this.http.get('http://localhost:8080/customer/getAll-customer').subscribe(
      (response: any) => {
        this.customerList = response;
      },
      (error) => {
        console.error('Failed to load customers:', error);
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  deleteCustomertById(customerID: any) {
    console.log(customerID);
    this.http.delete(`http://localhost:8080/customer/delete-customer-by-id/${customerID}`).subscribe(data => {
      alert("Customer deleted !!!!");
      this.loadTable();
    })

  }

  updateCustomer(customer: any) {
    console.log("update customer" + customer);
    this.customerTemp = { ...customer };
    this.selectedFile = null;

  }
  saveCustomer() {
    this.http.post("http://localhost:8080/customer/add-customer",this.customerTemp).subscribe((data)=>{
      alert("Customer Updateed!!!!");
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
