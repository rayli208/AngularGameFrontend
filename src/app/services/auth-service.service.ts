import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = "JWTToken";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  login(data): Observable<any>{
    //Log in using username and password provided
    //Bad practice to use GET for login and security issue since it exposes user credentials in URL, browser history, and server logs
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get<string>(environment.baseUrl + `/login?username=${data.username}&password=${data.password}`, { headers, responseType: 'text' as 'json'})
  }

  private isValidToken(token: string): boolean {
    return !this.jwtHelper.isTokenExpired(token);
  }

  private getToken() : string {
    const token = sessionStorage.getItem(TOKEN_KEY);
    return token;
  }

  public getUser() : string {
    return this.jwtHelper.decodeToken(this.getToken()).username;
  }

  public validate(token: string): boolean {
    const valid = this.isValidToken(token)
    if (valid) {
      sessionStorage.setItem(TOKEN_KEY, token);  
    }
    return valid;
  }

  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    // true or false
    return this.isValidToken(this.getToken());
  }

  public getAuthHeader() : HttpHeaders {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
    return headers;
  }

  public logout(): void {
    sessionStorage.removeItem(TOKEN_KEY);  
  }
}
