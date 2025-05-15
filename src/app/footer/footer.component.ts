import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from './../theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isDarkTheme$!: Observable<boolean>;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }
}
