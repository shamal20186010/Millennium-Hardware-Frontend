import { Routes } from '@angular/router';
import { ManagCustomerComponent } from './manag-customer/manag-customer.component';
import { DashbordComponent } from './dashbord/dashbord.component';

export const routes: Routes = [
    {
        path: "",
        component: DashbordComponent
    },
     {
        path: "manage-customer",
        component: ManagCustomerComponent
    }
];
