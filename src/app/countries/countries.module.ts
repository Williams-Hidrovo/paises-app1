import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCoutryPageComponent } from './pages/by-coutry-page/by-coutry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCoutryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
  ],
  imports: [CommonModule, CountriesRoutingModule, SharedModule],
})
export class CountriesModule {}
