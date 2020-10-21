import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {

  API_KEY = 'ba295f8be41a4fb4bb4c55e84ef45823';

constructor(
    private httpClient: HttpClient
  ) { }

  getNews(){
    return this.httpClient.get(`https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json`)
  } // should be replaced with static contents

}

