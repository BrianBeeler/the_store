import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {
    
    // On Navigation End, Set Page Title
    router.events.subscribe( (event: Event) => {
      if (event instanceof NavigationEnd) {
        this.setCurrentTitle();
      }
    })
  
  }

  setCurrentTitle() {
    this.setTitle(this.router.url);
  }

  getPageTitle(url: string) {

    let pageTitle = 'The Store';
    
    if (url === '/' || url === '/home') {
      pageTitle += ' - Home';
    } else if (url === '/crafts') {
      pageTitle += ' - Crafts';
    } else if (url === '/about') {
      pageTitle += ' - About';
    } else if (url === '/in-memory') {
      pageTitle += ' - In Memory';
    }

    return pageTitle;
  }


  public setTitle ( url: string) {
    let newTitle = this.getPageTitle(url);
    this.titleService.setTitle(newTitle);
  }

  ngOnInit() {
    this.setCurrentTitle();
  }

}
