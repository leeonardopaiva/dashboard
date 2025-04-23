import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, HeaderComponent],
  template: `
    <app-header></app-header>
    <nav class="navbar">
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/products">Produtos</a>
      <a routerLink="/product-form">Cadastro</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar {
      background-color: #f8f9fa;
      padding: 1rem;
      margin-bottom: 1rem;
    }
    .navbar a {
      margin-right: 1rem;
      text-decoration: none;
      color: #007bff;
    }
    .navbar a:hover {
      color: #0056b3;
    }
  `]
})
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
