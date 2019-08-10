import { Component, OnInit } from '@angular/core';
import { ViewFigure } from 'src/app/shared/models/viewFigure';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

  constructor() { }

  shopPhotos: ViewFigure[] = [
    new ViewFigure('assets/images/grandads_shop.jpg', "Grandad's Woodwork")
  ];

  ngOnInit() {
  }

}
