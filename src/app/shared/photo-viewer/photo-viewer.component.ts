import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.less']
})
export class PhotoViewerComponent implements OnInit {

  @Input('photos') photos: string[];

  constructor() { }

  ngOnInit() {
  }

}
