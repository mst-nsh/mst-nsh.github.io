import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContentsComponent } from './contents/contents.component';
import { FooterComponent } from '@src/app/footer/footer.component';
import { HeaderComponent } from '@src/app/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MatToolbarModule,
    ContentsComponent,
    FooterComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
