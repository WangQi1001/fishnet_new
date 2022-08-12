import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageNewPage } from './homepage-new.page';

const routes: Routes = [
  {
    path: '',
    component: HomepageNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageNewPageRoutingModule {}
