import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { StoryComponent } from './components/wrapper/subComponents/story/story.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StoryNavComponent } from './nav-menu/navContent/story-nav/story-nav.component';
import { ShopComponent } from './nav-menu/navContent/shop/shop.component';
import { GalleryComponent } from './nav-menu/navContent/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    StoryComponent,
    NavMenuComponent,
    StoryNavComponent,
    ShopComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
