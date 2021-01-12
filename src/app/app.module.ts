import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartLinkComponent } from './component/smart-link/smart-link.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { AngMusicPlayerModule } from  'ang-music-player';
import { AlbumsComponent } from './component/albums/albums.component';
@NgModule({
  declarations: [
    AppComponent,
    SmartLinkComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    NgxAudioPlayerModule,
    AngMusicPlayerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
