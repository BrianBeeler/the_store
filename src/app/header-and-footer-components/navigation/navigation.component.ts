import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationLink } from './navigation.link.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})



export class NavigationComponent implements OnInit {

  @Output() changePage = new EventEmitter();

  constructor() { }

  show:boolean = false;
  
  toggleCollapse() {
    this.show = !this.show;
  }

  activeOptions = {
    exact: true,

  };

  navLinks: NavigationLink[] = [
    new NavigationLink('Home', '', true),
    new NavigationLink('Woodwork', '/crafts', false),
    new NavigationLink('About', '/about', false),
    new NavigationLink('In Memory', '/in-memory', false)
  ] 

  ngOnInit() {
    console.log(this.navLinks);
  }

}
