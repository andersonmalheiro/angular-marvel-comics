import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComicsService } from './services';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [ComicsService],
})
export class ApiModule {}
