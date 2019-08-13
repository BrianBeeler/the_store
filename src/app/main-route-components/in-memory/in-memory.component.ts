import { Component, OnInit } from '@angular/core';
import { ViewFigure } from 'src/app/shared/models/viewFigure';

@Component({
  selector: 'app-in-memory',
  templateUrl: './in-memory.component.html',
  styleUrls: ['./in-memory.component.less']
})
export class InMemoryComponent implements OnInit {

  constructor() { }

  inMemoryPhotos: {}[] = [
    new ViewFigure('assets/images/mini-golf-optimized.jpg', '', ''),
    new ViewFigure('assets/images/emily-photo-optimized.jpg', '', ''),
    new ViewFigure('assets/images/molly_harlan-optimized.jpg', '', '')
  ];

  ngOnInit() {
  }

}
