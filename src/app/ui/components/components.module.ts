import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmptyIndicatorComponent } from './empty-indicator';
import { FiltersComponent } from './filters';
import { FooterComponent } from './footer';
import { LoadingIndicatorComponent } from './loading-indicator';
import { NavbarComponent } from './navbar';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    FiltersComponent,
    FooterComponent,
    EmptyIndicatorComponent,
    LoadingIndicatorComponent,
    NavbarComponent,
  ],
  exports: [
    FiltersComponent,
    FooterComponent,
    EmptyIndicatorComponent,
    LoadingIndicatorComponent,
    NavbarComponent,
  ],
})
export class ComponentsModule {}
