import { GameObject, PhysicsWorld, Sprite } from '@erenengine/2d';
import GameOverScreen from '../ui/GameOverScreen.js';
import HUD from '../ui/HUD.js';
import StartScreen from '../ui/StartScreen.js';
import Snail from '../entities/Snail.js';

export default class Game {
  private startScreen: StartScreen;
  private gameOverScreen: GameOverScreen;
  private hud: HUD;

  private world: PhysicsWorld;
  private snail: Snail;

  constructor(private stage: GameObject) {
    this.startScreen = new StartScreen().addTo(stage);
    this.gameOverScreen = new GameOverScreen().addTo(stage);
    this.hud = new HUD().addTo(stage);
    this.hideAllScreens();

    new Sprite(0, 0, 'background').addTo(this.stage);
    this.world = new PhysicsWorld(0, 0).addTo(this.stage);
    this.snail = new Snail(0, 0).addTo(this.world);
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