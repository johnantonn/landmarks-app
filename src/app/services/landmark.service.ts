import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Landmark } from '../models/Landmark';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class LandmarkService {

  // Server api endpoint
  private landmarksUrl = 'http://localhost:1337/parse/landmarks';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'app'
    })
  };

  constructor(
    private http: HttpClient, private authService: AuthService) { }

  // GET landmarks from the server
  getLandmarks(): Observable<Landmark[]> {
    return this.http.get<Landmark[]>(this.landmarksUrl, this.httpOptions);
  }

  // GET landmark by id
  getLandmarkById(landmarkId: string): Observable<Landmark> {
    const url = `${this.landmarksUrl}/${landmarkId}`;
    return this.http.get<Landmark>(url, this.httpOptions);
  }

  // PUT: update landmark on the server
  updateLandmark(landmark: Landmark): Observable<any> {
    const url = `${this.landmarksUrl}/${landmark.objectId}`;
    const body = {
      landmark: landmark,
      sessionToken: this.authService.getUserSessionToken()
    }
    return this.http.put(url, body, this.httpOptions);
  }

}
