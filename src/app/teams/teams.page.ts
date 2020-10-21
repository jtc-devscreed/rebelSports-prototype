import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';



@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss']
})
export class TeamsPage implements OnInit {
  [x: string]: any;
  
offside;

dataTP;

offsides = [
  {
      "id": 1,
      "label": "Offside Rules #1",
      "title": "Offside basics",
      "img": "assets/images/offside/o1.jpeg",
      "desc": "An attacking player can be called Offside if he is in front of the last defender when the pass is played through to them. The offside area is designed to discourage players from simply hanging around the opponent’s goal waiting for a tricky pass. ",
      "owner": "",
      "credits": "Tom Fisk"
  },
  {
      "id": 2,
      "label": "Offside Rules #2",
      "title": "No Tricky Passes",
      "img": "assets/images/offside/o2.jpeg",
      "desc": "For a player to be onside, the play must be placed behind the position of the last defender when the ball is played to them. If an attacking player is in front of that last defender then he is deemed to be offside and therefore a free kick for the defending team will be called.",
      "owner": "",
      "credits": "Juan Salamanca"
  },
  {
      "id": 3,
      "title": "Not on their own side of the half.",
      "img": "assets/images/offside/o3.jpeg",
      "desc": "A player cannot be caught offside in their own half of the field. Also, the  goalkeeper does not count as a defender on which he can't be charged of any violation. If the ball is played backwards and the player is in front of the last defender then he is not deemed to be offside.",
      "owner": "",
      "credits": "nmr hrd"
  }

]

  constructor(
    private http: HttpClient
  ) {}



  ngOnInit() {
    this.readData();
  }

  readData() {
    this.http.get<any>('/assets/json/sources.json').subscribe((data) => {
      console.log(data);
      console.log('lilipad! lilipad! takure!!!');
      return this.datas = data.rules;
    });
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

  getTeamsDetails(Object) {
      // alert(object.id)
      console.log(Object.id)
  }

}
