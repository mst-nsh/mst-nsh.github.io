import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '@src/app/footer/footer.component';
import { HeaderComponent } from '@src/app/header/header.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, MatToolbarModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mst-nsh';

  shieldsUrls = [
    'https://img.shields.io/badge/-TypeScript-555?style=flat-square&logo=TypeScript',
    'https://img.shields.io/badge/-JavaScript-555?style=flat-square&logo=JavaScript',
    'https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=Angular',
    'https://img.shields.io/badge/-Vue.js-555?style=flat-square&logo=Vue.js',
    'https://img.shields.io/badge/-Nuxt.js-555?style=flat-square&logo=Nuxt.js',
    'https://img.shields.io/badge/-Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code',
    'https://img.shields.io/badge/-MacBook-555?style=flat-square&logo=Apple',
  ];
}
