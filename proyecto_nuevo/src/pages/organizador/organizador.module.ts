import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrganizadorPage } from './organizador';

@NgModule({
  declarations: [
    OrganizadorPage,
  ],
  imports: [
    IonicPageModule.forChild(OrganizadorPage),
  ],
})
export class OrganizadorPageModule {}
