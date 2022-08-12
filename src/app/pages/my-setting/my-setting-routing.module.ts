import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MySettingPage } from './my-setting.page';

const routes: Routes = [
  {
    path: '',
    component: MySettingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MySettingPageRoutingModule {}
