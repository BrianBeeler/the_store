import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { WoodworkComponent } from './woodwork/woodwork.component';
import { CardComponent } from './woodwork/card/card.component';
import { EnlargedComponent } from './woodwork/enlarged/enlarged.component';
import { ContactUsModalComponent } from './contact-us-modal/contact-us-modal.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { InMemoryPageComponent } from './in-memory-page/in-memory-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    FooterComponent,
    HomePageComponent,
    WoodworkComponent,
    CardComponent,
    EnlargedComponent,
    ContactUsModalComponent,
    AboutPageComponent,
    InMemoryPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
