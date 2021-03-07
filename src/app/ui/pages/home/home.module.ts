import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { ComicComponent } from './comic';
import { ComicsListComponent } from './comics-list';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, RouterModule],
  declarations: [HomeComponent, ComicComponent, ComicsListComponent],
  exports: [HomeRoutingModule],
})
export class HomeModule {}
