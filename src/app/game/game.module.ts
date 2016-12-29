import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';

import { GameComponent } from './game.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [GameComponent],
  declarations: [GameComponent]
})
export class GameModule { }
