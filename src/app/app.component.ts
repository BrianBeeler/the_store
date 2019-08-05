import { Component } from '@angular/core';
import { NavigationLink } from './navigation/navigation.link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  updatePage(link:NavigationLink) {
    this.currentPage = link.link;
  }

  title = 'theStore';
  currentPage = '/#/home-page';
}
