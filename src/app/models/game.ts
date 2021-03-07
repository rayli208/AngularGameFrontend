import { Platform } from "@angular/cdk/platform";

export interface Game {
    gameId: number;
    title: string;
    overview: string;
    releaseDate: Date;
    genres: string[];
    publishers: string[];
    platform: Platform;
    imageUrl?: string;
  }