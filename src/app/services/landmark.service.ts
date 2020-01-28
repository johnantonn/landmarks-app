import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Landmark } from '../models/Landmark';

@Injectable({ providedIn: 'root' })
export class LandmarkService {

  // Server api endpoint
  private landmarksUrl: string = 'http://localhost:1337/parse/landmarks';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': 'app'
    })
  };

  constructor(
    private http: HttpClient) { }

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
    const url = `${this.landmarksUrl}/${landmark.objectId}`
    return this.http.put(url, landmark, this.httpOptions);
  }

  // DELETE: delete landmark from the server
  deleteLandmark(landmark: Landmark): Observable<any> {
    const url = `${this.landmarksUrl}/${landmark.objectId}`;
    return this.http.delete<Landmark>(url, this.httpOptions);
  }

}
