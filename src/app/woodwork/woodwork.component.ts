import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-woodwork',
  templateUrl: './woodwork.component.html',
  styleUrls: ['./woodwork.component.less']
})
export class WoodworkComponent implements OnInit {

  constructor() { }

  imageUrlArray = [
    '/assets/images/kaite-table-3.jpg',
    '/assets/images/katie-feenie-table.jpg',
    '/assets/images/katie-table-2.jpg'
  ];

  ngOnInit() {
  }

}
