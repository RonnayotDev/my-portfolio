import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  imageSrc:any = '../assets/img/13485.png';  
  imgAlt:any = 'people-img'

  imageSrc2:any = '../assets/img/icw-logo-black.png'
  imgAlt2:any = 'ic-web'

  imageSrc3:any = '../assets/img/accenture2.png'
  imgAlt3:any = 'accenture'
  constructor() { }

  ngOnInit(): void {
  }

}
