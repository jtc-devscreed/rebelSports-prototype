import { DataJsonService } from './../service/data-json.service';
import { ActivatedRoute } from '@angular/router';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonInfiniteScroll)infiniteScroll: IonInfiniteScroll;


  // declare object
  datas: any [] ;


  constructor(
    private nav: NavController,
    private actRoute: ActivatedRoute,
    private dataAPI: DataJsonService
  ) {}


  ngOnInit() {
    this.readData();
  }

  
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

  // ionViewDidEnter() {
  //   // this.serviceApi.getNews().subscribe((data) => {
  //   //   this.articles = data['articles'];
  //   //   console.log (data);
  //   // });
  // }

  viewDetails(id){
     this.nav.navigateForward(['articles/' + id]);
  }

  //function for json
  readData() {
    this.dataAPI.getNews().subscribe((data)=>{
      console.log(data);
      this.datas = data.news;
    }) 

  }

}