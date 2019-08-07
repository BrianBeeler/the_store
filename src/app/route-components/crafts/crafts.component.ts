import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.less']
})
export class CraftsComponent implements OnInit {

  constructor() { }

  imageUrlArray = [
    '/assets/images/kaite-table-3.jpg',
    '/assets/images/katie-feenie-table.jpg',
    '/assets/images/katie-table-2.jpg'
  ];

  ngOnInit() {
  }

}
