import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicsPage } from './musics.page';

const routes: Routes = [
  {
    path: '',
    component: MusicsPage,
  },
  {
    path: 'musics-detail',
    loadChildren: () => import('./musics-detail/musics-detail.module').then( m => m.MusicsDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicsPageRoutingModule {}
