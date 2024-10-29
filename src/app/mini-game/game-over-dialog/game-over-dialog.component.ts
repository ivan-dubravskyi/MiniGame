import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-game-over-dialog',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './game-over-dialog.component.html',
  styleUrl: './game-over-dialog.component.css'
})
export class GameOverDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<GameOverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { resultMessage: string }
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
