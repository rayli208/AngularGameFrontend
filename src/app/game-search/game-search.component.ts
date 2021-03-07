import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from '../models/game';
import { CollectionService } from '../services/collection.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-game-search',
  templateUrl: 'game-search.component.html',
  styleUrls: ['game-search.component.scss']
})

export class GameSearchComponent implements OnInit {
  form: FormGroup;
  platforms: Platform[];
  games: Game[];
  collectionIds: number[];

  constructor(private searchService: SearchService, private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.loadPlatform();
    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      platformId: new FormControl('', [Validators.required]),
      gameName: new FormControl('', [Validators.required]),
    });
    this.collectionService.getCollection().subscribe(userCollection => {
      this.collectionIds = userCollection.map(c => { return c.gameId});
    })
  }

  loadPlatform() {
    this.searchService.getPlatforms().subscribe(platforms => {
      this.platforms = platforms;
    });
  }

  alreadyInCollection(gameId) {
    return this.collectionIds.includes(gameId);
}
  searchGame(form){
    this.searchService.searchGames(form.value.gameName, form.value.platformId).subscribe(games => {
      this.games = games;
    });
  }
  
  addGameToCollection(id) {
    this.collectionService.addGameToCollection(id).subscribe(() => {
      alert("Game has been added to your collection");
      this.collectionIds.push(id);
    }, (error) => {
      alert(error.error);
    });
  }
}
