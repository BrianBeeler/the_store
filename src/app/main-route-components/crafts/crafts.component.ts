import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.less']
})
export class CraftsComponent implements OnInit {

  constructor() { }

  autoPlay = true;

  disableAutoPlay() {
    this.autoPlay = false;
  }

  @HostListener('window.resize', ['$event'])
  onResize(event) {
    let height = this.getSlideshowHeight();
    this.slideshowHeight = height+"px";
    this.pauseTop = ((height/2)+5)+'px';
  }

  getSlideshowHeight() {
    return (window.innerWidth < 720 ? ((window.innerWidth - 5)/ 1.44) : 475);
  }

  
  slideshowHeight = this.getSlideshowHeight()+'px';
  pauseTop = ((this.getSlideshowHeight()/2)+5) + 'px';

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
