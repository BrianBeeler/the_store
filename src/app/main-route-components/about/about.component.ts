import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewFigure } from 'src/app/shared/models/viewFigure';
import { NgForm } from '@angular/forms';
import { HTTPService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
})
export class AboutComponent implements OnInit {

  constructor(private httpService: HTTPService) { }

  @ViewChild('f', {static: false }) contactUsForm: NgForm;

  shopPhotos: ViewFigure[] = [
    new ViewFigure('assets/images/grandads_shop-optimized.jpg', 'Grandad\'s Woodwork', 'grandads-woodwork')
  ];

  onSubmit() {
    this.httpService.sendEmail('thestorecrafts@gmail.com', 'brianlbeeler@gmail.com', 'This is a test.', 'The is a test!');

  }

  ngOnInit() {
  }

}
