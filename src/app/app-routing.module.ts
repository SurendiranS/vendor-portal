import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {InvoiceComponent} from './invoice/invoice.component';
import {PaymentComponent} from './payment/payment.component'
import { CreditMemoComponent } from './credit-memo/credit-memo.component';
import { QuotationComponent } from './quotation/quotation.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { GoodsReceiptComponent } from './goods-receipt/goods-receipt.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';



const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'profile-update', component:ProfileUpdateComponent},
  {path:'quotation', component:QuotationComponent},
  {path:'purchase', component:PurchaseOrderComponent},
  {path:'goods-receipt', component:GoodsReceiptComponent},
  {path:'credit-debit',component:CreditMemoComponent},
  {path:'payment-aging',component:PaymentComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'profile-view', component:ProfileViewComponent},
  {path:'credit-credit', component:CreditMemoComponent},
  {path:'**', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
