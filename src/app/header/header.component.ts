import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './../theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'mst-nsh';

  isDarkTheme$!: Observable<boolean>;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }
  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
