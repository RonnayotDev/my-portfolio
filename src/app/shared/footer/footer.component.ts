import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  imageSrc4:any = '../assets/img/LinkedIn-PNG-HD-Images.png';  
  imgAlt4:any = 'linked'
  imageSrc5:any = '../assets/img/GitHub-Mark.png';  
  imgAlt5:any = 'GitHub-Mark'

  constructor() { }

  ngOnInit(): void {
  }

}
