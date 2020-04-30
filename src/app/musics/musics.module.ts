import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicsPageRoutingModule } from './musics-routing.module';

import { MusicsPage } from './musics.page';
import { MusicItemComponent } from './music-item/music-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicsPageRoutingModule
  ],
  declarations: [MusicsPage, MusicItemComponent]
})
export class MusicsPageModule {}
