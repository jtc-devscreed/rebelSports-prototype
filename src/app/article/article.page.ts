import { ServiceapiService } from './../services/serviceapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  dataDetails;
  myId;

  isLoading = false;

  constructor(
    public serviceApi: ServiceapiService,
    public activeRoutes: ActivatedRoute,
    public loadingController: LoadingController,
  ) {

   }

  ngOnInit() {
    this.presentLoading();
    this.readData();
    }// ng on init


    readData(){
      this.activeRoutes.params.subscribe((data) => {
        this.myId = parseInt(data.id);
        console.log(data.id);
      });
      this.serviceApi.getNews().subscribe((data)=>{
          this.dataDetails =
          data.articles[this.myId]
        // this.dataTeam = data.sports[0].leagues[0].teams.filter((arr)=>{
        //     return arr.team.id == this.teamId.toString();
        // });
      });
    }

    async presentLoading() {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();

      const { role, data } = await loading.onDidDismiss();
      console.log(this.dataDetails);
      this.isLoading = true;
      this.readData();
    }
  }





