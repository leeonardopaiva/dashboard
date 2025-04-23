import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { CardsComponent } from "./components/cards/cards.component";
import { ProductsComponent } from "./components/products/products.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./shared/components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
