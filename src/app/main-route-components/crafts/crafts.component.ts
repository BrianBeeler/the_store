import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.less']
})
export class CraftsComponent implements OnInit {

  constructor() { }

  autoPlay = true;

  slideshowHeight = this.getSlideshowHeight() + 'px';
  pauseTop = ((this.getSlideshowHeight() / 2) + 5) + 'px';

  imageUrlArray = [
    '/assets/images/kaite-table-3-optimized.jpg',
    '/assets/images/finished-table-optimized.jpg',
    '/assets/images/thingy-optimized.jpg',
    '/assets/images/coffee-table-optimized.jpg',
    '/assets/images/beeler-optimized.jpg',
    '/assets/images/wood-ky-optimized.jpg',
    '/assets/images/uk_sign-optimized.jpg',
    '/assets/images/coasters-optimized.jpg',
    '/assets/images/foundation-optimized.jpg',
    '/assets/images/simple_rules-optimized.jpg',
    '/assets/images/be_still-optimized.jpg'
  ];

  handleAutoPlay($event: MouseEvent) {
    const targetEl: HTMLElement = ( $event.target as HTMLInputElement);

    if (targetEl.classList.contains('slides') || targetEl.classList.contains('pause-button') ) {
      this.autoPlay = !this.autoPlay;
    }

  }

  @HostListener('window.resize', ['$event'])
  onResize(event) {
    const height = this.getSlideshowHeight();
    this.slideshowHeight = height + 'px';
    this.pauseTop = ((height / 2) + 5) + 'px';
  }

  getSlideshowHeight() {
    return (window.innerWidth < 720 ? ((window.innerWidth - 5) / 1.44) : 475);
  }

  ngOnInit() {
  }

}
