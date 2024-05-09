import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './body/data/data.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  // { path: '**', component: BodyComponent },
  { path: '', component: BodyComponent },
  { path: 'data', component: DataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
