import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // Server api endpoint
  private landmarksUrl = 'http://localhost:1337/landmarks';

  httpOptions = {
    headers: new HttpHeaders({
      'X-Parse-Application-Id': 'app'
    })
  };

  constructor(
    private http: HttpClient) { }

  // Upload image
  uploadImage(landmarkId: string, formData: FormData): Observable<any> {
    const url = `${this.landmarksUrl}/${landmarkId}/image`;
    return this.http.post<any>(url, formData, this.httpOptions);
  }

}
