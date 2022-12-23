import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Observer } from 'rxjs';
import { GameState } from '../models/game';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent {
  gameState$: Observable<GameState>;

  @Input()
  isSelected!: boolean;

  @Input()
  name!: string;

  @Output() selected = new EventEmitter<string>();

  constructor(private store: Store<{ gameState: GameState }>) {
    this.gameState$ = store.pipe(select('gameState'));
    this.gameState$.subscribe(something => console.log(something));
  }

  onSelected() {
    this.selected.emit(this.name);
  }
}
