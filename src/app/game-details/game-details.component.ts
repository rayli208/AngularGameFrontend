import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from '../models/game';
import { CollectionService } from '../services/collection.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-game-details',
  templateUrl: 'game-details.component.html',
  styleUrls: ['game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  private routeSub: Subscription;
  public game: Game;
  private isInCollection : boolean = false;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
        const gameId = parseInt(params['id']);
        this.searchService.getGameById(gameId).subscribe(game => {
        this.game = game;
        this.collectionService.getCollection().subscribe(userCollection => {
          this.isInCollection = userCollection.map(c => { return c.gameId}).includes(gameId);
        })
      });
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  addGameToCollection(id) {
    this.collectionService.addGameToCollection(id).subscribe(() => {
      alert("Game has been added to your collection");
        this.isInCollection = true;
    }, (error) => {
      alert(error.error);
    });
  }

}
