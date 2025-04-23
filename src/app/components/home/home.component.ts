import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Input() showItem: boolean = false;

   [x: string]: any;

   products: Product[] = [];
    filteredProducts: any;

    constructor(private productService: ProductService) {}

    ngOnInit() {
      this.productService.getProducts().subscribe((products: Product[]) => {
        this.products = products;
      });


}

}
