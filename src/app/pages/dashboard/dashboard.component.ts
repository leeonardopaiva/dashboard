import { Component } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";
import { ProductsComponent } from "../../components/products/products.component";

@Component({
  selector: 'app-dashboard',
  imports: [CardsComponent, ProductsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
