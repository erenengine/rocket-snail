import { GameObject, PhysicsWorld } from '@erenengine/2d';
import GameOverScreen from '../ui/GameOverScreen.js';
import HUD from '../ui/HUD.js';
import StartScreen from '../ui/StartScreen.js';

export default class Game {
  private startScreen: StartScreen;
  private gameOverScreen: GameOverScreen;
  private hud: HUD;

  private world: PhysicsWorld;

  constructor(private stage: GameObject) {
    this.startScreen = new StartScreen().addTo(stage);
    this.gameOverScreen = new GameOverScreen().addTo(stage);
    this.hud = new HUD().addTo(stage);
    this.hideAllScreens();

    this.world = new PhysicsWorld(0, 0).addTo(this.stage);
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
}