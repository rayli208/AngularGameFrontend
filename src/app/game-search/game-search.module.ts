import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameSearchComponent } from './game-search.component';
import { GameSearchRoutingModule } from './game-search-routing.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [GameSearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    GameSearchRoutingModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})

export class GameSearchModule { }
