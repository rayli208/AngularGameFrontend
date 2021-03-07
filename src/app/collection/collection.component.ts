import { Component, OnInit } from '@angular/core';
import { Collection } from '../models/collection';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: 'collection.component.html',
  styleUrls: ['collection.component.scss']
})

export class CollectionComponent implements OnInit {
  userCollection: Collection[];

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.loadCollection();
  }

  loadCollection() {
    this.collectionService.getCollection().subscribe(userCollection => {
      this.userCollection = userCollection;
    })
  }

  deleteGame(id) {
    this.collectionService.deleteGameInCollection(id).subscribe(() => {
      this.loadCollection();
    }, (error) => {
      alert(error.error);
    });
  }
}
