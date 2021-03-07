import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [RouterModule],
  declarations: [],
  exports: [HomeModule],
})
export class PagesModule {}
