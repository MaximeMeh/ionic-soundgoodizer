import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicsDetailPageRoutingModule } from './musics-detail-routing.module';

import { MusicsDetailPage } from './musics-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicsDetailPageRoutingModule
  ],
  declarations: [MusicsDetailPage]
})
export class MusicsDetailPageModule {}
