import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataJsonService {

  constructor(
    private http: HttpClient
  ) { }

  getNews() {
    return this.http.get<any>("/assets/json/sources.json")
  }

}
