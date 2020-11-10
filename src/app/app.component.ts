import { Component, OnInit } from '@angular/core';
import { PhotosService } from './services/photos.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  result: String = ''
  private apiUrl = 'localhost:8080/form'
  constructor(private http: HttpClient, private photosService: PhotosService){}

  ngOnInit() {
  }

  processPhoto(): Observable<any> {
    return this.http.post(this.apiUrl, {}, {})
      .pipe(
        tap(data => {
          console.log(data)
        }),
        catchError((err) => {
          this.result = 'Error'
          console.log('Error' + err)
        })
      );
  }
}
