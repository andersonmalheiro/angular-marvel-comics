import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComicListGridComponent } from './comic-list-grid';
import { EmptyIndicatorComponent } from './empty-indicator';
import { FiltersComponent } from './filters';
import { FooterComponent } from './footer';
import { LoadingIndicatorComponent } from './loading-indicator';
import { NavbarComponent } from './navbar';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    ComicListGridComponent,
    FiltersComponent,
    FooterComponent,
    EmptyIndicatorComponent,
    LoadingIndicatorComponent,
    NavbarComponent,
  ],
  exports: [
    ComicListGridComponent,
    FiltersComponent,
    FooterComponent,
    EmptyIndicatorComponent,
    LoadingIndicatorComponent,
    NavbarComponent,
  ],
})
export class ComponentsModule {}
