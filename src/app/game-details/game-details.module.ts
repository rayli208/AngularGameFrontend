import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './game-details.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [GameDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    GameDetailsRoutingModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class GameDetailsModule { }
