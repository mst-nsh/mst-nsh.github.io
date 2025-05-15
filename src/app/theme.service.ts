import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkTheme = new BehaviorSubject<boolean>(false);
  isDarkTheme$ = this.isDarkTheme.asObservable();

  constructor() {
    // ローカルストレージから設定を取得
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.setDarkTheme(savedTheme === 'true');
    } else {
      // システムのダークモード設定を確認
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      this.setDarkTheme(prefersDark);
    }
  }

  setDarkTheme(isDark: boolean): void {
    this.isDarkTheme.next(isDark);
    localStorage.setItem('darkMode', isDark.toString());

    if (isDark) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }

  toggleTheme(): void {
    this.setDarkTheme(!this.isDarkTheme.value);
  }
}
