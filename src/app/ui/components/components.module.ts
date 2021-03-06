import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmptyIndicatorComponent } from './empty-indicator';
import { FooterComponent } from './footer';
import { LoadingIndicatorComponent } from './loading-indicator';
import { NavbarComponent } from './navbar';

@NgModule({
  imports: [RouterModule],
  declarations: [
    FooterComponent,
    EmptyIndicatorComponent,
    LoadingIndicatorComponent,
    NavbarComponent,
  ],
  exports: [
    FooterComponent,
    EmptyIndicatorComponent,
    LoadingIndicatorComponent,
    NavbarComponent,
  ],
})
export class ComponentsModule {}
