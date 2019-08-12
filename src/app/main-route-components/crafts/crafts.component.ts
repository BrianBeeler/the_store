import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.less']
})
export class CraftsComponent implements OnInit {

  constructor() { }

  @HostListener('window.resize', ['$event'])
  onResize(event) {
    this.slideshowHeight = this.getSlideshowHeight();
  }

  getSlideshowHeight() {
    return (window.innerWidth < 720 ? ((window.innerWidth - 5)/ 1.44) : 500)+'px';
  }
  slideshowHeight = this.getSlideshowHeight();

  imageUrlArray = [
    '/assets/images/kaite-table-3.jpg',
    '/assets/images/finished-table.jpg',
    '/assets/images/thingy.jpg',
    '/assets/images/coffee-table.jpg',
    '/assets/images/beeler.jpg',
    '/assets/images/wood-ky.jpg',
    '/assets/images/uk_sign.jpg',
    '/assets/images/coasters.jpg',
    '/assets/images/foundation.jpg',
    '/assets/images/simple_rules.jpg',
    '/assets/images/be_still.jpg'
  ];

  ngOnInit() {
  }

}
