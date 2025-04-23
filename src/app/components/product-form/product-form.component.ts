import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
navigate(arg0: string[]) {
throw new Error('Method not implemented.');
}
  product: Product = { name: '', price: 0, description: '' };
  isEdit = false;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      const product = this.productService.getProductById(+id);
      if (product) {
        this.product = { ...product };
      }
    }
  }

  save() {
    if (this.isEdit) {
      this.productService.updateProduct(this.product);
    } else {
      this.productService.addProduct(this.product);
    }
    this.router.navigate(['/products']);
  }
}
