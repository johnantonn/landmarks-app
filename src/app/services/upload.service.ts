import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  // Server api endpoint
  private landmarksUrl = 'http://localhost:1337/landmarks';

  httpOptions = {
    headers: new HttpHeaders({
      'X-Parse-Application-Id': 'app',
      sessionToken: this.authService.getUserSessionToken()
    })
  };

  constructor(
    private http: HttpClient, private authService: AuthService) { }

  // Upload image
  uploadImage(landmarkId: string, formData: FormData): Observable<any> {
    const url = `${this.landmarksUrl}/${landmarkId}/image`;
    return this.http.post<any>(url, formData, this.httpOptions);
  }

}
