import { Platform } from "@angular/cdk/platform";

export interface Collection {
    imageUrl?: string;
    gameId: number;
    title: string;
    platform: string;
  }