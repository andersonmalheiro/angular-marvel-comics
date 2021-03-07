import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicsListComponent } from './comics-list';
import { ComicComponent } from './comic';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'comics' },
  {
    path: 'comics',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ComicsListComponent,
      },
      {
        path: ':id',
        component: ComicComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
