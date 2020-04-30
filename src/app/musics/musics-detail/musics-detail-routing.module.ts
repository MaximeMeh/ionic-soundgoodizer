import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicsDetailPage } from './musics-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MusicsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusicsDetailPageRoutingModule {}
