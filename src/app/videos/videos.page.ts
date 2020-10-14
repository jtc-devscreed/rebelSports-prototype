import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ServiceapiService } from './../services/serviceapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  articles;
  videoDetails;
  isLoading = false;
  constructor(
    public serviceApi: ServiceapiService,
    public activeRoutes: ActivatedRoute,
    public loadingController: LoadingController
  ) {
   }

     ngOnInit() {
       this.readData();
      }

      readData(){ 
        // this.serviceApi.readData().subscribe((data) => {
        //   this.videoDetails = data;
        //   console.log(data);
        // });
      }

      async presentLoading() {
        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          duration: 2000
        });
        await loading.present();

        const {} = await loading.onDidDismiss();
        console.log(this.videoDetails);
        this.isLoading = true;
        this.readData();
      }

      loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.component();

      if (this.articles.length === 7) {
        event.target.disabled = true;
      }
    }, 500);
}
}
