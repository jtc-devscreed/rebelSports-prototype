import { DataJsonService } from './../service/data-json.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  // @ViewChild(InfiniteScroll)infinitescroll: IonInfiniteScroll;
  datas: any [];
  // dataDetails;
  myId;

  isLoading = false;

  constructor(
    public activeRoutes: ActivatedRoute,
    public loadingController: LoadingController,
    private nav: NavController,
    private dataAPI: DataJsonService
  ) {
   }

  ngOnInit() {
    this.presentLoading();
    this.readData();
    }// ng on init

    
    readData(){
      this.activeRoutes.params.subscribe((params) => {
          console.log(params.id);
         this.myId = parseInt(params.id)
        // console.log(params.id);
      })
      // this.dataAPI.getNews().subscribe((data) => {
      //   // console.log(data);
      //   // this.data = data.news;        
      //   this.datas = data.news;
      //   console.log(data.id);
      // });
      this.dataAPI.getNews().subscribe((data)=>{
          console.log(data.news);
          return this.datas = data.news;
        //   this.DataJsonService = data['news'];
        // this.dataTeam = data.sports[0].leagues[0].teams.filter((arr)=>{
        //     return arr.team.id == this.teamId.toString();
        });
      // });
    }

    async presentLoading() {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();

      const { role, data } = await loading.onDidDismiss();
      // console.log(this.dataDetails);
      this.isLoading = true;
      this.readData();
    }
  }





