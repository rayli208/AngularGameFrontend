import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDetailsComponent } from './game-details.component';

const routes: Routes = [
  {
    path: '',
    component: GameDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameDetailsRoutingModule { }
