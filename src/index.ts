import { AssetLoader, GameSettings, Renderer } from '@erenengine/2d';
import Game from "./core/Game.js";
import LoadingScreen from './ui/LoadingScreen.js';

GameSettings.debug = true;
GameSettings.limitFPSWhenUnfocused = true;

const renderer = new Renderer('720x1280');
const loadingScreen = new LoadingScreen().addTo(renderer.stage);

await AssetLoader.load([
  { id: 'background', src: 'assets/images/background/galaxy.png' },
  { id: 'junk1', src: 'assets/images/obstacles/junk1.png' },
  { id: 'junk2', src: 'assets/images/obstacles/junk2.png' },
  { id: 'snail', src: 'assets/images/snail/snail.png', frameWidth: 120, frameHeight: 92 },
  { id: 'start/start_button', src: 'assets/images/ui/start/start_button.png' },
  { id: 'start/title_logo', src: 'assets/images/ui/start/title_logo.png' },
  { id: 'gameover/game_over_title', src: 'assets/images/ui/gameover/game_over_title.png' },
  { id: 'gameover/retry_button', src: 'assets/images/ui/gameover/retry_button.png' },
], (progress) => loadingScreen.setProgress(progress));

loadingScreen.remove();

new Game(renderer.stage).start();
