import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,               // standalone
        HttpClientTestingModule,   // mock do HttpClient
        RouterTestingModule        // mock do ActivatedRoute e Router
      ]
    }).compileComponents();
  });

  it(`should have the 'dash-app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dash-app');
  });
});
