import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationLink } from './navigation.link.model'


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})



export class NavigationComponent implements OnInit {

  @Output() changePage = new EventEmitter();

  constructor() { }

  navLinks: NavigationLink[] = [
    new NavigationLink('Home', '/#/home-page', true),
    new NavigationLink('Woodwork', '/#/woodwork-page', false),
    new NavigationLink('About', '/#/about-page', false),
    new NavigationLink('In Memory', '/#/in-memory-page', false)
  ] 

  navTo(event: Event) {
    event.stopImmediatePropagation();
    let newActiveNav;
    // Clicked already current tab, do nothing
    if ( (<HTMLInputElement>event.target).className.includes('active') ) {
      return;
    } else {
      this.navLinks.forEach( (navLink) => {
        if (navLink.link === (<HTMLInputElement>event.target).getAttribute('href')) {
          navLink.setActiveStatus(true);
          newActiveNav = navLink;
        } else {
          navLink.setActiveStatus(false);
        }
      });
      this.changePage.emit(newActiveNav);
    }
  }

  ngOnInit() {
    console.log(this.navLinks);
  }

}
