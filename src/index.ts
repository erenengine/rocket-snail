import { AssetLoader, Renderer } from '@erenengine/2d';
import Game from "./core/Game.js";
import LoadingScreen from './ui/LoadingScreen.js';

const renderer = new Renderer('720x1280');
const loadingScreen = new LoadingScreen().addTo(renderer.stage);

await AssetLoader.load([
  { alias: 'background', src: 'assets/background/galaxy.png' },
  { alias: 'junk1', src: 'assets/obstacles/junk1.png' },
  { alias: 'junk2', src: 'assets/obstacles/junk2.png' },
  { alias: 'snail', src: 'assets/snail/snail.png' },
  { alias: 'start/start_button', src: 'assets/start/start_button.png' },
  { alias: 'start/title_logo', src: 'assets/start/title_logo.png' },
  { alias: 'gameover/game_over_title', src: 'assets/gameover/game_over_title.png' },
  { alias: 'gameover/retry_button', src: 'assets/gameover/retry_button.png' },
], (progress) => loadingScreen.setProgress(progress));

loadingScreen.remove();
new Game(renderer.stage).start();
