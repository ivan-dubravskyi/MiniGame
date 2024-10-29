import { CellColor } from "../enums";
import { Cell } from "../models";

export class Grid {

  cells: Cell[] = [];

  constructor(length: number) {
    this.cells = this.generateGrid(length);
  }

  clear() {
    this.cells.forEach(cell => (cell.color = CellColor.DEFAULT));
  }

  cellMarkActive(index: number) {
    this.cells[index].color = CellColor.ACTIVE;
  }

  cellMarkWin(index: number) {
    this.cells[index].color = CellColor.WIN;
  }

  cellMarkLose(index: number) {
    this.cells[index].color = CellColor.LOSE;
  }

  private generateGrid(gridLength: number): Cell[] {
    return Array.from({ length: gridLength }, () => ({ color: CellColor.DEFAULT }));
  }

}
