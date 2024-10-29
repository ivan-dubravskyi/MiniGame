import { Routes } from '@angular/router';
import { MiniGameComponent } from "./mini-game/mini-game.component";

export const routes: Routes = [
  {
    path: '',
    component: MiniGameComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }
];
