import {Component, EventEmitter, Input, Output} from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-timer-start',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './timer-start.component.html',
  styleUrl: './timer-start.component.css'
})
export class TimerStartComponent {
  @Input({ required: true }) reactionTime: number = 0;
  @Output() start = new EventEmitter<number>();
}
