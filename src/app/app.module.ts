import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app-component/app.component';
import { NavigationComponent } from './header-and-footer-components/navigation/navigation.component';
import { FooterContentComponent } from './header-and-footer-components/footer/footer-content.component';
import { HomeComponent } from './main-route-components/home/home.component';
import { CraftsComponent } from './main-route-components/crafts/crafts.component';
import { AboutComponent } from './main-route-components/about/about.component';
import { InMemoryComponent } from './main-route-components/in-memory/in-memory.component';
import { JumboContainerComponent } from './shared/jumbo-container/jumbo-container.component';
import { PhotoViewerComponent } from './shared/photo-viewer/photo-viewer.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: {
      title: 'The Store - Home'
    }
  },
  { 
    path: 'crafts', 
    component: CraftsComponent,
    data: {
      title: 'The Store - Crafts'
    }
  },
  { 
    path: 'about', 
    component: AboutComponent,
    data: {
      title: 'The Store - About'
    }
  },
  { 
    path: 'in-memory', 
    component: InMemoryComponent,
    data: {
      title: 'The Store - In Memory'
    }
  }
];

@NgModule({
  declarations: 
  [
    // App
    AppComponent,

    // Header and Footer
    NavigationComponent,
    FooterContentComponent,

    // Main Routes
    HomeComponent,
    CraftsComponent,
    AboutComponent,
    InMemoryComponent,

    // Shared
    PhotoViewerComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SlideshowModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
