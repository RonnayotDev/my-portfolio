import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  data = [
    {
      title : 'Movies App using Angular RESTAPI',
      date : 'July 2022',
      link : 'https://movies-app-smoky-gamma.vercel.app/'
    },
    {
      title : 'Crud Application using Angular RESTAPI',
      date : 'July 2022',
      link : 'https://github.com/RonnayotDev/crud-angular'
    },
    {
      title : 'Crud Application using ReactJS RESTAPI',
      date : 'June 2022',
      link : 'https://crud-react-mui-ten.vercel.app/'
    },
    {
      title : 'Business Website Fully Responsive using ReactJS',
      date : 'June 2022',
      link : 'https://frontality-web-ko5z71bp0-ronnayotdev.vercel.app/'
    },
    {
      title : 'Landing Page Fully Responsive using HTML/CSS/JS',
      date : 'May 2021',
      link:'https://ronnayotdev.github.io/WebJS-Fullyresponsive/'
    },
    {
      title : 'Landing Page Agency Website using HTML/CSS/JS',
      date : 'Jan 2021',
      link :'https://ronnayotdev.github.io/AgencyWeb/'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
