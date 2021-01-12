import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './component/albums/albums.component';
import { SmartLinkComponent } from './component/smart-link/smart-link.component';

const routes: Routes = [
  { path: '',  redirectTo: '/Albums', pathMatch: 'full' },
  { path: 'Albums', component: AlbumsComponent },

  { path: 'SmartLink/:id', component: SmartLinkComponent },
  {path: 'SmartLink/:id/:name/:marks', component : SmartLinkComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
