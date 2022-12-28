import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { CounterComponent } from './counter/counter.component';
import { IconComponent } from './icon/icon.component';
import { BoxComponent } from './box/box.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './state/game.reducer';
import { HttpClientModule } from '@angular/common/http';
import { CountdownComponent } from './countdown/countdown.component';
import { BannerComponent } from './banner/banner.component';
import { ScoresComponent } from './scores/scores.component';
import { GameEffects } from './state/game.effects';
import { EffectsModule } from '@ngrx/effects';
import { ScoresService } from './services/scores.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IconComponent,
    BoxComponent,
    CountdownComponent,
    BannerComponent,
    ScoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot({ gameState: gameReducer }),
    EffectsModule.forRoot([GameEffects]),
  ],
  providers: [ScoresService],
  bootstrap: [AppComponent],
})
export class AppModule {}
