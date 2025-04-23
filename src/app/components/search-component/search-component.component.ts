import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-component.component.html',
 /*  template: `
  <input
    type="text"
    [(ngModel)]="searchTerm"
    (input)="onSearch()"
    placeholder="Buscar produtos..."
  />
`, */
  styleUrls: ['./search-component.component.css']
})
export class SearchComponent {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
