import { Component } from '@angular/core';
import { Subscription, timer } from "rxjs";
import { CommonModule } from "@angular/common";
import { MatCard } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { GameOverDialogComponent } from "./game-over-dialog/game-over-dialog.component";
import { ScoreComponent } from "./score/score.component";
import { GameGridComponent } from "./game-grid/game-grid.component";
import { GameConfig, Grid } from "../core/utils";
import {TimerStartComponent} from "./timer-start/timer-start.component";

@Component({
  selector: 'app-mini-game',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    GameGridComponent,
    ScoreComponent,
    TimerStartComponent
  ],
  templateUrl: './mini-game.component.html',
  styleUrl: './mini-game.component.css'
})
export class MiniGameComponent {
  grid = new Grid(GameConfig.GRID_LENGTH);
  reactionTime = GameConfig.REACTION_TIME_DEFAULT;
  playerScore = 0;
  computerScore = 0;

  private activeCellIndex: number | null = null;
  private timerSubscription: Subscription | null = null;

  constructor(private dialog: MatDialog) {}

  startGame(reactionTime: number) {
    this.reactionTime = reactionTime;
    this.resetGame();
    this.nextTurn();
  }

  onCellClick(index: number) {
    if (index === this.activeCellIndex) {
      this.grid.cellMarkWin(index);
      this.playerScore++;
      this.clearTimer();
      this.nextTurn();
    }
  }

  private resetGame() {
    this.playerScore = 0;
    this.computerScore = 0;
    this.activeCellIndex = null;
    this.clearTimer();
    this.grid.clear();
  }

  private endGame() {
    this.dialog.open(GameOverDialogComponent, {
      minHeight: '150px',
      minWidth: '200px',
      data: {
        resultMessage: this.playerScore > this.computerScore ? 'You won!' : 'You lost!'
      },
      disableClose: true
    }).afterClosed()
      .subscribe(() => this.resetGame());
  }

  private clearTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  private nextTurn() {
    if (this.playerScore >= GameConfig.WIN_SCORE || this.computerScore >= GameConfig.WIN_SCORE) {
      this.endGame();
      return;
    }

    this.activeCellIndex = Math.floor(Math.random() * GameConfig.GRID_LENGTH);
    this.grid.cellMarkActive(this.activeCellIndex);

    this.timerSubscription = timer(this.reactionTime).subscribe(() => {
      if (this.activeCellIndex !== null) {
        this.grid.cellMarkLose(this.activeCellIndex);
        this.computerScore++;
        this.nextTurn();
      }
    });
  }
}
