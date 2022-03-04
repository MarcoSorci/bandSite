import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponentComponent } from './components/wrapper/subComponents/gallery-component/gallery-component.component';
import { ShopComponentComponent } from './components/wrapper/subComponents/shop-component/shop-component.component';
import { StoryComponent } from './components/wrapper/subComponents/story/story.component';

const routes: Routes = [
  { path: '', redirectTo: '/story', pathMatch: 'full' },
  { path: 'story', component:StoryComponent },
  { path: 'shop', component: ShopComponentComponent},
  { path: 'gallery', component: GalleryComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
