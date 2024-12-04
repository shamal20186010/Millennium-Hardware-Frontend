import { Routes } from '@angular/router';
import { ManagCustomerComponent } from './manag-customer/manag-customer.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminDashbordComponent } from './admin-dashbord/admin-dashbord.component';
import { AddItemComponent } from './add-item/add-item.component';
import { ManageItemComponent } from './manage-item/manage-item.component';

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
    },
    {
        path: "add-item",
        component: AddItemComponent
    },
    {
        path: "manage-item",
        component: ManageItemComponent
    }
];
