import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer-content',
  templateUrl: './footer-content.component.html',
  styleUrls: ['./footer-content.component.less'],
  encapsulation: ViewEncapsulation.None // So that the footer can be targetted.
})
export class FooterContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
