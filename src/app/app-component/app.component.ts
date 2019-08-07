import { Component } from '@angular/core';
import { NavigationLink } from '../header-and-footer-components/navigation/navigation.link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {

  updatePage(link:NavigationLink) {
    this.currentPage = link.link;
    console.log('current page:', this.currentPage);
  }

  title = 'theStore';
  currentPage = '/#/home-page';
}
