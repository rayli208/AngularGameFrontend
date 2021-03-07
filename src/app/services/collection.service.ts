import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from 'src/app/models/collection';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient, private authServiceService: AuthServiceService) {}

  getCollection(): Observable<Collection[]>{
    //Provide authentication header into service
    const headers = this.authServiceService.getAuthHeader();
    return this.http.get<Collection[]>(environment.baseUrl + `Collection`, { headers });
  }

  deleteGameInCollection(id): Observable<any>{
    //Provide authentication header into service
    const headers = this.authServiceService.getAuthHeader();
    return this.http.delete<any>(environment.baseUrl + `Collection/${id}`, { headers });
  }

  addGameToCollection(id): Observable<any>{
    //Provide authentication header into service
    const headers = this.authServiceService.getAuthHeader();
    return this.http.post<any>(environment.baseUrl + `Collection/${id}`, {}, { headers });
  }
}
