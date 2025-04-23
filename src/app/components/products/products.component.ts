import { Component, Input, OnInit } from '@angular/core';
import { CommonModule,  } from '@angular/common';
import { FormsModule } from '@angular/forms'; //
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() showButton: boolean = true;

  products: Product[] = [];
  filteredProducts: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  searchTerm: string | any;

  constructor(private productService: ProductService, private searchService: SearchService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.filteredProducts = products;
      this.updatePagination();
    });

    // Escuta o termo de busca vindo do sidebar (ou qualquer outro)
    this.searchService.searchTerm$.subscribe(term => {
      this.onSearch(term);
    });
  }

 onSearch(term: string) {
  this.currentPage = 1;
  if (term.trim() === '') {
    this.filteredProducts = this.products;
  } else {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
  }
  this.updatePagination();
}

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.currentPage = Math.min(this.currentPage, this.totalPages || 1);
  }

  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }



}
