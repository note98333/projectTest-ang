import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Statistices } from './pages/statistices/statistices';
import { Customers } from './pages/customers/customers';
import { Product } from './pages/product/product';
import { Message } from './pages/message/message';
import { Transactions } from './pages/transactions/transactions';

export const routes: Routes = [
    {path:"pages/dashboard",component:Dashboard},
    {path:"pages/statistices",component:Statistices},
    {path:"pages/customers",component:Customers},
    {
        path: 'pages/product',component:Product
    },
    {
        path: 'pages/message',component:Message
    },
    {
        path: 'pages/transactions',component:Transactions
    }
];
