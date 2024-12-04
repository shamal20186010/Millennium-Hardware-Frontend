import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Customer } from '../models/customer.model';
import { CustomerServiceService } from '../service/customer-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashbord',
  standalone: true,
  imports: [FormsModule, CommonModule,HttpClientModule,RouterLink],
  templateUrl: './admin-dashbord.component.html',
  styleUrl: './admin-dashbord.component.css'
})
export class AdminDashbordComponent {

  public customer:any={
    name:"",
    address:"",
    email:""
  };

  constructor(private http:HttpClient, private router: Router){}

  public addCustomer(){
    this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe((data)=>{
        alert("Customer Added!!!!");
    })
  }

  viewaddItems(){
    this.router.navigate(['add-item']);
  }

  viewaddCustomer(){
    this.router.navigate(['admin-dashbord']);
  }

  viewHome(){
    this.router.navigate(['']);
  }

}
