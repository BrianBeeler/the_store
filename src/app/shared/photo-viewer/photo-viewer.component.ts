import { Component, OnInit, Input } from '@angular/core';
import { ViewFigure } from 'src/app/shared/models/viewFigure';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.less']
})
export class PhotoViewerComponent implements OnInit {

  @Input() photos: ViewFigure[];

  constructor() { }

  ngOnInit() {
  }

}
