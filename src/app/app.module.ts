import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { StoryComponent } from './components/wrapper/subComponents/story/story.component';
import { NavMenuComponent } from './components/header/nav-menu/nav-menu.component';
import { GalleryComponent } from './components/header/nav-menu/navContent/gallery/gallery.component';
import { ShopComponent } from './components/header/nav-menu/navContent/shop/shop.component';
import { StoryNavComponent } from './components/header/nav-menu/navContent/story-nav/story-nav.component';
import { ShopComponentComponent } from './components/wrapper/subComponents/shop-component/shop-component.component';
import { GalleryComponentComponent } from './components/wrapper/subComponents/gallery-component/gallery-component.component';


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
    GalleryComponent,
    ShopComponentComponent,
    GalleryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
