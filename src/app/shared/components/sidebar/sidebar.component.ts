import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { SearchComponent } from "../../../components/search-component/search-component.component";
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, FormsModule, SearchComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})

export class SidebarComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  constructor(private productService: ProductService, private searchService: SearchService) {}

onSearch(term: string) {
  this.searchService.setSearchTerm(term); // envia o termo para o serviço
  this.updatePagination();
}

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.filteredProducts = this.products;
      this.updatePagination();
    });
  }

 /* onSearch(term: string) {
  this.currentPage = 1;
  if (term.trim() === '') {
    this.filteredProducts = this.products;
  } else {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
  }
  this.updatePagination();
} */

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
