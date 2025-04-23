import { CommonModule } from '@angular/common';
import { Post } from '../../models/product';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
      },
      error: (error) => {
        console.error('Erro ao buscar produto:', error);
      }
    });
  }

}
