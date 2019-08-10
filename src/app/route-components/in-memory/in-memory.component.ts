import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-memory',
  templateUrl: './in-memory.component.html',
  styleUrls: ['./in-memory.component.less']
})
export class InMemoryComponent implements OnInit {

  constructor() { }

  inMemoryImages: string[] = [
    'assets/images/mini-golf.jpg',
    'assets/images/grandads_shop.jpg',
    'assets/images/emily_photo.jpg',
    'assets/images/molly_harlan.jpg'
  ];

  ngOnInit() {
  }

}
