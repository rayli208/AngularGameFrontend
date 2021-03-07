import { Platform } from '@angular/cdk/platform';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private authServiceService: AuthServiceService) {}

  public getPlatforms(): Observable<Platform[]>{
    const headers = this.authServiceService.getAuthHeader();
    return this.http.get<Platform[]>(environment.baseUrl + `Platforms`, { headers })
  }

  public getGameById(gameId: number): Observable<Game>{
    const headers = this.authServiceService.getAuthHeader();
    return this.http.get<Game>(environment.baseUrl + `Games/${gameId}`, { headers })
  }

  public searchGames(gameName: string, platformId: number): Observable<Game[]>{
    const headers = this.authServiceService.getAuthHeader();
    return this.http.get<Game[]>(environment.baseUrl + `Games/search/${gameName}?platformId=${platformId}`, { headers })
  }
}
