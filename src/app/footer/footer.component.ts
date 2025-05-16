import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { ThemeService } from './../theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  isDarkTheme$!: Observable<boolean>;
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }

  openZenn() {
    window.open('https://zenn.dev/mst_nishio');
  }
  openGithub() {
    window.open('https://github.com/mst-nsh');
  }
}
