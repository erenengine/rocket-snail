import { GameObject } from '@erenengine/2d';
import GameOverScreen from 'src/ui/GameOverScreen';
import HUD from 'src/ui/HUD';
import StartScreen from 'src/ui/StartScreen';

export default class Game {
  private startScreen: StartScreen;
  private gameOverScreen: GameOverScreen;
  private hud: HUD;

  constructor(private stage: GameObject) {
    this.startScreen = new StartScreen().addTo(this.stage);
    this.gameOverScreen = new GameOverScreen().addTo(this.stage);
    this.hud = new HUD().addTo(this.stage);
    this.hideAllScreens();
  }

  private hideAllScreens() {
    [this.startScreen, this.gameOverScreen, this.hud].forEach(screen => screen.hide());
  }

  start() {
    this.hideAllScreens();
    this.startScreen.show();
  }

  startGame() {
    this.hideAllScreens();
    this.hud.show();
  }

  endGame() {
    this.hideAllScreens();
    this.gameOverScreen.show();
  }

  update(delta: number) { }
}