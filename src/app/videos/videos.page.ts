import { HttpClient } from '@angular/common/http';
import { DataJsonService } from './../service/data-json.service';
import { LoadingController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  [x: string]: any;

  rule;
  loadData;

  rules = [
    {
        "id": 1,
        "label": "Rule No. 1",
        "title": "Match/Game Length:",
        "img": "assets/images/rules/r1.jpeg",
        "desc": "A single match is composed of two 45 minute halves with a 15 minute break or rest period in between.",
        "owner": "",
        "credits": "Marti Pardo"
    },
    {
        "id": 2,
        "label": "Rule No. 2",
        "title": "Number of Players per Team",
        "img": "/assets/images/rules/r2.jpeg",
        "desc": "A soccer team must have a minimum of 11 players which includes 1 goalkeeper who is the only player allowed to handle ball by hands within the 18 yard box and a maximum of seven (7) players are needed to start a match.",
        "owner": "",
        "credits": "Mica Asato"
    },
    {
        "id": 3,
        "label": "Rule No. 3",
        "title": "Field / Pitches",
        "img": "assets/images/rules/r3.jpg",
        "desc": "A Soccer Field, also known as a Pitch can be made of natural grass or artificial grass. The size of pitches (soccer fields), varies from 100-130 yards long and 50-100 yards wide. A pitch should also have a rectangular mark that shows the outside which is out of bounds. Two 6 yard boxes, Two 18 yard boxes and circle in the center. Also, a spot of penalty place 12 yards out of both goals and center circle must also be visible.",
        "owner": "",
        "credits": "Sergio Souza"
    },
    {
        "id": 4,
        "label": "Rule No. 4",
        "title": "Ball Size",
        "img": "assets/images/rules/r4.jpg",
        "desc": "The ball should also have a circumference of 58-61cm and be of a circular shape.",
        "owner": "",
        "credits": "Pixabay"
    },
    {
        "id": 5,
        "label": "Rule No. 5",
        "title": "Substitutions",
        "img": "assets/images/rules/r5.jpeg",
        "desc": "A team can choose 7 substitute players. Substitutions can be made at any time during match with a maximum of 3 substitutions per side. In the event that all 3 maximum substitutions have already been used and a player having to leave the field for injury, the remaining team members will be forced to play withou a replacement for that player.",
        "owner": "",
        "credits": "Mica Asato"
    },
    {
        "id": 6,
        "label": "Rule No. 6",
        "title": "Referee & 2 Assistant Referee's (Linesmen)",
        "img": "assets/images/rules/r6.jpeg",
        "desc": "Each game must have one referee and 2 assistant referees which are also called, the Linesmen. The job of the referee is to act as the time keeper and to make decisions such as fouls, free kicks, throw ins, penalties and added on time at the end of each half. The referee may consult the assistant referees at any time in the match regarding a decision. It is the Linesmen (Assistant Referees) job to spot offside's in the match, throw ins for either team and also assist the referee in all decision making processes which may be deemed necessary.",
        "owner": "",
        "credits": "Tomas Andreopoulos"
    },
    {
        "id": 7,
        "label": "Rule No. 7",
        "title": "Overtime",
        "img": "assets/images/rules/r7.jpeg",
        "desc": "If the game needs to have an extra time as a result of both teams scores tied at the end of a match. An addition 30 minutes will be added in the form of two 15 minute halves after 90 minutes as overtime.",
        "owner": "",
        "credits": "Marti Pardo"
    },
    {
        "id": 8,
        "label": "Rule No. 8",
        "title": "Penalty Shootout",
        "img": "assets/images/rules/r8.jpeg",
        "desc": "After the overtime and the team scores are still tied, then a penalty shootout must take place.",
        "owner": "",
        "credits": "Tembela Bohle"
    },
    {
        "id": 9,
        "label": "Rule No. 9",
        "title": "Goal Requirements",
        "img": "assets/images/rules/r9.jpeg",
        "desc": "The entire ball must cross the goal line for it to formally called a goal.",
        "owner": "",
        "credits": "Mauricio Mascaro"
    },
    {
        "id": 10,
        "label": "Rule No. 10",
        "title": "Yellow & Red Cards",
        "img": "assets/images/rules/r10.jpeg",
        "desc": "When a player committed a foul, that player could receive a yellow or a red card depending on the weight of the foul which will be  decided by the referee with the referee's discretion. The yellow card is warning while the red card is a dismissal of a certain player who committed a foul. Once a player is sent off, they cannot be replaced.",
        "owner": "",
        "credits": "RF Studio"
    },
    {
        "id": 11,
        "label": "Rule No. 11",
        "title": "Throw Ins, Goal Kicks, & Corner Kicks",
        "img": "assets/images/rules/r11.jpeg",
        "desc": "If a ball goes out of play off an opponent in either of the side lines then a throw in will be given. If it goes out of play off an attacking player on the base line then it is a gold kick. If the ball comes off a defending player, then it will be a corner kick.",
        "owner": "",
        "credits": "Pixabay"
    },
];


constructor(
  private http: HttpClient
) {}
  ngOnInit() {
    this.readData();
  }

readData() {
  this.http.get<any>('/assets/json/sources.json').subscribe((data) => {
    console.log(data);
    console.log('testing101');
    return this.datas = data.rules;
  });

  }

}
