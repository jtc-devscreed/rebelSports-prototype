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

dataTP;

objects = [
  {
    'id': 1,
    'title': 'Braves',
    'imageUrl': 'assets/images/teamsmlb/Braves.png',
    'W': '35',
    'L': '25',
    'Players': ['Ronald Acuña Jr.',' Freddie Freeman',' Marcell Ozuna', 'Travis d`Arnaud',' Ozzie Albies',' Adam Duvall',' Dansby Swanson',' Nick Markakis', 'Adeiny Hechavarria',' Ian Anderson',' A.J. Miller', ' Josh Tomlin',' Tyler'],
    'Season': '2020 Regular Season',
  },
  {
    'id': 2,
    'title': 'Marlins',
    'imageUrl': 'assets/images/teamsmlb/Marlins.png',
    'W': '31',
    'L': '29',
    'Players': ['Corey Dickerson',' Lewis Brinson',' Starling Marte',' Jesús Aguilar',' Magneuris Sierra',' Brian Anderson',' Garrett Cooper',' Matt Joyce',' Monte Harrison','Miguel Rojas',' Chad Wallach', 'Jon Berti',' Pablo Lopez', 'Yimi Garcia', ' James Hoyt', 'Richard Bleier', 'Brad Boxberger',' Brandon Kintler'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 3,
    'title': 'Phillies',
    'imageUrl': 'assets/images/teamsmlb/Phillies.png',
    'W': '28',
    'L': '32',
    'Players': ['Andrew McCutchen',' Rhys Hoskins',' Bryce Harper',' J.T. Realmuto',' Jean Segura',' Didi Gregorius',' Philip Gosselin',' Scott Kingery',' Roman Quinn',' Jake Arrieta', 'David Hale',' Reggie McClain', ' Jojo Romero',' Blake Parker',' Vince Velasquez', 'Heath Hembree', 'Adam Morgan'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 4,
    'title': 'Nationals',
    'imageUrl': 'assets/images/teamsmlb/Nationals.png',
    'W': '26',
    'L': '34',
    'Players': ['Adam Eaton',' Trea Turner',' Juan Soto',' Juan Soto',' Asdrúbal Cabrera',' Kurt Suzuki',' Eric Thames',' Michael Taylor',' Carter Kieboom',' Luis Garcia',' Josh Harrison',' Victor Robles',' Max Scherzer', 'Wander Suero',' Kyle Finnegan',' Ryne Harper',' James Bourque'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 5,
    'title': 'Mets',
    'imageUrl': 'assets/images/teamsmlb/Mets.png',
    'W': '26',
    'L': '34',
    'Players': ['Brandon Nimmo',' Michael Conforto','J.D Davis',' Dominic Smith',' Robinson Canó',' Pete Alonso',' Jeff McNeil',' Andrés Giménez',' Wilson Ramos',' Rick Porcello',' Jeurys Familia',' Chasen Shreve',' Corey Oswalt'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 6,
    'title': 'Cubs',
    'imageUrl': 'assets/images/teamsmlb/Cubs.png',
    'W': '34',
    'L': '26',
    'Players': ['Ian Happ',' Anthony Rizzo',' Willson Contreras','Kyle Schwarber',' Kris Bryant',' Jason Heyward', 'Javier Báez',' David Bote',' Victor Caratini',' Cameron Maybin',' Craig Kimbrel',' Jeremy Jeffress',' Jason Kipnis',' Yu Darvish'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 7,
    'title': 'Cardinals',
    'imageUrl': 'assets/images/teamsmlb/Cardinals.png',
    'W': '30',
    'L': '28',
    'Players': ['Avisail Garcia',' Christian Yelich','Ryan Braun',' Jedd Gyorko',' Daniel Vogelbach',' Keston Hiura',' Orlando Arcia',' Luis Urías',' Eric Sogard',' Tyrone Peterson',' Jace Peterson',' Jacob Nottingham',' Brett Anderson',' Freddy Peralta',' Justin Topa',' Eric Yardley',' Adrian Houser'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 8,
    'title': 'Reds',
    'imageUrl': 'assets/images/teamsmlb/Reds.png',
    'W': '31',
    'L': '29',
    'Players': ['Shogo Akiyama',' Curt Casali',' Nicholas Castellanos','Joey Votto','Eugenio Suarez','Mike Moustakas','Jesse Winker','Nick Senzel',' Freddy Galvis','Tucker Barnhart',' Brian Goodwin',' Luis Castillo',' Lucas Sims',' Raisel Iglesias',' Michael Lorenzen'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 9,
    'title': 'Brewers',
    'imageUrl': 'assets/images/teamsmlb/Brewers.png',
    'W': '29',
    'L': '31',
    'Players': ['Avisael Garcia',' Christina Yelich',' Jedd Gyorko',' Daniel Vogelbach',' Ryon Healy',' Ben Gamel',' Orlando Hiura',' Tyrone Taylor',' Jacob Nottingham',' Omar Narvaez',' David Freitas',' Brandon Woodruff',' Josh Hader',' Adrian Houser'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 10,
    'title': 'Pirates',
    'imageUrl': 'assets/images/teamsmlb/Pirates.png',
    'W': '19',
    'L': '41',
    'Players': ['Erik Gonzalez',' Adam Frazier',' Kevin Newman',' Josh Bell',' Colin Moran',' Jacob Stallings',' Gregory Polanco',' José Osuna',' Cole Tucker',' Trevor Williams',' Sam Howard',' Tyler Bashlor',' Nik Turley',' Chris Stratton'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 11,
    'title': 'Dodgers',
    'imageUrl': 'assets/images/teamsmlb/Dodgers.png',
    'W': '43',
    'L': '17',
    'Players': ['Mookie Betts',' Clayton Kershaw',' Joe Kelly',' Cody Bellinger',' Enrique Hernandez',' Justin Turner',' Max Muncy',' Will Smith',' Chris Taylor',' A.J.Pollock',' Joc Pederson',' Enrique Hernandez',' Austin Barnes',' Brusdar Graterol'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 12,
    'title': 'Padres',
    'imageUrl': 'assets/images/teamsmlb/Padres.png',
    'W': '37',
    'L': '23',
    'Players': ['Fernando Tatis Jr.',' Manny Machado',' Mike Clevinger',' Eric Hosmer',' Tommy Pham',' Greg Allen',' Mitch Moreland',' Jurickson Profar',' Luis Camposano',' Wil Myers',' Jake Crockenworth',' Jason Castro',' Austin Nola'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 13,
    'title': 'Giants',
    'imageUrl': 'assets/images/teamsmlb/Giants.png',
    'W': '29',
    'L': '31',
    'Players': ['Mike Yastrzemski',' Daniel Robertson',' Alex Dickerson',' Darin Ruf',' Donovan Solano',' Brandon Belt',' Austin Slater',' Steven Duggar',' Wilmer Flores',' Evan Longaria',' Brandon Crawford',' Mauricio Dubon'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 14,
    'title': 'Rockies',
    'imageUrl': 'assets/images/teamsmlb/Rockies.png',
    'W': '26',
    'L': '34',
    'Players': ['Charlie Blackmon',' Raimel Tapia',' Josh Fuentes',' Drew Butera',' Trevor Story',' Elías Díaz',' Ryan McMahon',' Garrett Hampson',' Sam Hilliard',' Tony Wolters',' Kyle Freeland',' Ashton Goudeau',' Tommy Doyle',' José Mujica'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 15,
    'title': 'Diamondbacks',
    'imageUrl': 'assets/images/teamsmlb/Diamondbacks.png',
    'W': '25',
    'L': '35',
    'Players': [' Tim Locastro','Ketel Marte',' Josh VanMeter',' Christian Walker',' Kole Calhoun',' Pavin Smith',' Eduardo Escobar',' Nick Ahmed',' Daulton Varsho',' Wyatt Mathisen',' Carson Kelly'],
    'Season': '2020 Regular Season'
  },
  {
    'id': 16,
    'title': 'Angels',
    'imageUrl': 'assets/images/teamsmlb/Angels.png',
    'W': '25',
    'L': '35',
    'Players': ['Shohei Ohtani',' Mike Trout',' Albert Pujols',' Anthony Rendon',' Jared Walsh',' Taylor Ward',' Jo Adell',' Justin Upton',' Jahmai Jones',' Elliot Soto',' Patrick Sandoval',' Luke Bard',' Cam Bedrosian',' Jacob Barnes',' Hoby Milner',' Hansel'],
    'Season': '2020 Regular Season'
  },

]

  constructor(
    private http: HttpClient
  ) {}



  ngOnInit() {
    this.readData();
  }

  readData() {
    this.http.get<any>('/assets/json/tp.json').subscribe((data) => {
      console.log(data);
      console.log('data');
      this.dataTP = data;
    });
  }

  getTeamsDetails(Object) {
      // alert(object.id)
      console.log(Object.id)
  }

}
