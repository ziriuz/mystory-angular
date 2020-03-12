import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';

//import { PlayerComponent }   from './pages/player/player.component';
import { LayoutModule }      from './pages/layout/layout.module';
import { AudioPlayerModule } from './pages/audioplayer/audioplayer.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { CatalogModule } from './pages/catalog/catalog.module';
import { UIModule } from './ui-components/ui.module';

@NgModule({
  declarations: [
    AppComponent
    //PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    UIModule,
    LayoutModule,
    AudioPlayerModule,
    DashboardModule,
    CatalogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
