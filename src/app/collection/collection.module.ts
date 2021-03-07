import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CollectionRoutingModule,
  ]
})

export class CollectionModule { }
