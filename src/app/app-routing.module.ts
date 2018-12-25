import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UsertableComponent } from './components/usertable/usertable.component';

const routes: Routes = [

  { path: 'about', component: AboutComponent  },
  { path: 'data', component: UsertableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
