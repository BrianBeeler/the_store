import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})


export class NavigationComponent implements OnInit {

  activeOptions = {
    exact: true,
  };

  // List of Navigable Pages
  navLinks: {name: string, link: string}[] = [
    { name: 'Home', link: '' },
    { name: 'Crafts', link: '/crafts' },
    { name: 'About', link: '/about' },
    { name: 'In Memory', link: '/in-memory' },
  ];


  constructor() { }

  // Toggle Hamburger Menu
  show = false;

  toggleCollapse() {
    this.show = !this.show;
  }

  // For angular activeRouteOptions

  ngOnInit() {}

}
