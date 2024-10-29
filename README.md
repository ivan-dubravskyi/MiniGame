# MiniGame

This mini-game is built using Angular 17, RxJS, Angular Material, HTML5, and CSS3. The game logic combines asynchronous event management with RxJS timers to create a reaction-based gameplay experience.

## Dependencies
The following dependencies are required to run the project: 
- Angular 17, 
- Angular Material: For UI components like dialog and input fields, 
- RxJS: For managing game events and timers reactively,


Install dependencies using: `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Gameplay Overview

The objective of the game is to click on randomly highlighted cells within a grid before the timer expires:
- Gameplay:
  - The player sets a reaction time (in milliseconds) before starting. 
  - A random cell in the grid will turn yellow each turn. 
  - If the player clicks the yellow cell within the set time, they score a point, and the cell turns green. 
  - If they miss or are too slow, the computer scores, and the cell turns red. 
- Game End:
  - The first to reach 10 points (player or computer) wins. 
  - A modal will display the result, with options to reset and play again
