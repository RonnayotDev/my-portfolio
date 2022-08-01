import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  imageSrc6 : any = '../assets/img/me.jpg';  
  imageAlt6 : any = 'Profile'
  
  imagecardEXP1 : any ="../assets/img/accenture2.png"
  imagecardEXP2 : any ="../assets/img/icw-logo-black.png"
  imageSkills : any

  // dataCard = [
  //   {
  //     imageEXP : '../assets/img/accenture2.png',
  //     nameEXP :'Accenture',
  //     dateEXP :'Oct 16 2021 - Present',
  //     TitleEXP:'Application Development Associate'
  //   },
  //   {
  //     imageEXP : '../assets/img/icw-logo-black.png',
  //     nameEXP :'IC Web',
  //     dateEXP :'Dec 26 2020 - Oct 16 2021',
  //     TitleEXP:'Web Developer'
  //   }
  // ]
  constructor() { 
    this.imageSkills = {
      img : [
        '../assets/img/html.svg',
        '../assets/img/css.svg',
        '../assets/img/js.svg',
        '../assets/img/typescript.svg',
        '../assets/img/angular.png',
        '../assets/img/react.svg',
        '../assets/img/nextJS.svg',
        '../assets/img/git.svg',
        '../assets/img/api.svg',
        '../assets/img/sql.svg',
        '../assets/img/firebase.svg',
        '../assets/img/seo.svg',
      ] 
    }
  }

  ngOnInit(): void {
  }

}
