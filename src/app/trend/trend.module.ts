import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrendPageRoutingModule } from './trend-routing.module';

import { TrendPage } from './trend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrendPageRoutingModule
  ],
  declarations: [TrendPage]
})
export class TrendPageModule {}
