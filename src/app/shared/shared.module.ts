import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';

@NgModule({
  declarations: [HomePageComponent, AboutPageComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [HomePageComponent, AboutPageComponent, SidebarComponent],
})
export class SharedModule {}
