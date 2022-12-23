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
import { ScoresService } from './services/scores.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CounterComponent, IconComponent, BoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    StoreModule.forRoot({ gameState: gameReducer }),
  ],
  providers: [ScoresService],
  bootstrap: [AppComponent],
})
export class AppModule {}
