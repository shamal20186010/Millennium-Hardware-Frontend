import { Routes } from '@angular/router';
import { ManagCustomerComponent } from './manag-customer/manag-customer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';

export const routes: Routes = [
    {
        path: "",
        component: DashbordComponent
    },
     {
        path: "manage-customer",
        component: ManagCustomerComponent
    },
    {
        path: "admin-dashbord",
        component: AdminDashbordComponent
    }
];
