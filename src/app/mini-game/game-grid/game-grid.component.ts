import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Cell } from "../../core/models";

@Component({
  selector: 'app-game-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-grid.component.html',
  styleUrl: './game-grid.component.css'
})
export class GameGridComponent  {

  @Input({required: true}) grid: Cell[] = [];
  @Output() cellClicked = new EventEmitter<number>();

}
