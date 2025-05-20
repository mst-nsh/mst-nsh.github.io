import { Component } from '@angular/core';

@Component({
  selector: 'app-contents',
  imports: [],
  templateUrl: './contents.component.html',
  styleUrl: './contents.component.css',
})
export class ContentsComponent {
  shieldsUrls = [
    'https://img.shields.io/badge/-HTML5-555?style=flat-square&logo=html5',
    'https://img.shields.io/badge/-CSS-555?style=flat-square&logo=css',
    'https://img.shields.io/badge/-TypeScript-555?style=flat-square&logo=TypeScript',
    'https://img.shields.io/badge/-JavaScript-555?style=flat-square&logo=JavaScript',
    'https://img.shields.io/badge/-Angular-555?style=flat-square&logo=Angular',
    'https://img.shields.io/badge/-Vue.js-555?style=flat-square&logo=vuedotjs',
    'https://img.shields.io/badge/-Nuxt.js-555?style=flat-square&logo=nuxt',
    'https://img.shields.io/badge/-React-555?style=flat-square&logo=react',
    'https://img.shields.io/badge/-Next.js-555?style=flat-square&logo=nextdotjs',
  ];
}
