import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameSearchComponent } from './game-search.component';

const routes: Routes = [
  {
    path: '',
    component: GameSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameSearchRoutingModule { }
