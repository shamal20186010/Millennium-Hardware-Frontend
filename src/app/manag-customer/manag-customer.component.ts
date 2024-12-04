import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-manag-customer',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './manag-customer.component.html',
  styleUrl: './manag-customer.component.css'
})
export class ManagCustomerComponent {

  constructor(private router: Router) { }

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
