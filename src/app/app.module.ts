import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app-component/app.component';
import { NavigationComponent } from './header-and-footer-components/navigation/navigation.component';
import { FooterContentComponent } from './header-and-footer-components/footer/footer-content.component';
import { HomeComponent } from './route-components/home/home.component';
import { CraftsComponent } from './route-components/crafts/crafts.component';
import { AboutComponent } from './route-components/about/about.component';
import { InMemoryComponent } from './route-components/in-memory/in-memory.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', 
    component: HomeComponent
  },
  { path: 'crafts', 
    component: CraftsComponent
  },
  { path: 'about', 
    component: AboutComponent
  },
  { path: 'in-memory', 
    component: InMemoryComponent
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
    InMemoryComponent

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SlideshowModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
