import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GameComponent],
  declarations: [GameComponent]
})
export class GameModule { }
