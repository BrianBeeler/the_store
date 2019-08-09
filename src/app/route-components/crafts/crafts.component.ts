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
    '/assets/images/katie-table-2.jpg',
    '/assets/images/be_still.jpg',
    '/assets/images/kentucky_map.jpg',
    '/assets/images/my_foundation.jpg',
    '/assets/images/beeler_squares.jpg',
    '/assets/images/uk_coasters.jpg',
    '/assets/images/wildcat_country.jpg',
    '/assets/images/uk_painting.jpg'
  ];

  ngOnInit() {
  }

}
