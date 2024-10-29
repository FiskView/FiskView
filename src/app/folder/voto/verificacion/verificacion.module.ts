import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificacionPageRoutingModule } from './verificacion-routing.module';

import { VerificacionPage } from './verificacion.page';

import { Camera } from '@ionic-native/camera/ngx';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificacionPageRoutingModule
  ],
  providers: [Camera],
  declarations: [VerificacionPage]
})
export class VerificacionPageModule {}
