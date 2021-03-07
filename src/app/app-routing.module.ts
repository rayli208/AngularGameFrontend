import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { 
    path: 'collection', 
    canActivate: [AuthGuardService],
    loadChildren: () => import('./collection/collection.module').then(m => m.CollectionModule)
  },
  { path: 'game-details/:id', 
    canActivate: [AuthGuardService],
    loadChildren: () => import('./game-details/game-details.module').then(m => m.GameDetailsModule)
  },
  { path: 'game-search', 
    canActivate: [AuthGuardService],
    loadChildren: () => import('./game-search/game-search.module').then(m => m.GameSearchModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
