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
  }
    // return this.httpClient.get('https://api.sportsdata.io/v3/mma/scores/json/Fighters?key=e30e776ea4584c1a9119b46eb8f5eb90')

  // getVids() {
  //   return this.httpClient.get(`https://www.scorebat.com/video-api/v1/`)
  // }

}



