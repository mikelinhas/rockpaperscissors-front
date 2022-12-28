import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GamePhase } from '../models/game';
import { GameState } from '../state/game.reducer';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent {
  gamePhase$: Observable<GamePhase>;

  @Input()
  isSelected!: boolean;

  @Input()
  name!: string;

  @Output() selected = new EventEmitter<string>();

  constructor(private store: Store<GameState>) {
    this.gamePhase$ = store.pipe(select('gamePhase'));
  }

  onSelected() {
    this.selected.emit(this.name);
  }
}
