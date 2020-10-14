import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import { ServiceapiService } from '../services/serviceapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  @ViewChild(IonInfiniteScroll)infiniteScroll: IonInfiniteScroll;
  articles;
  constructor(
    private serviceApi: ServiceapiService,
    private nav: NavController
  ) {}


   loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length == 1000) {
      //   event.target.disabled = true;
      // }
    }, 1000);

  }
  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ionViewDidEnter() {
    this.serviceApi.getNews().subscribe((data) => {
      this.articles = data['articles'];
      console.log (data);
    });
  }


  viewDetails(id){
     this.nav.navigateForward(['articles/' + id]);
  }

}
