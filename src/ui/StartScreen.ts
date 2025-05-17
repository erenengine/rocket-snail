import { Button, GameObject, Sprite } from '@erenengine/2d';

export default class StartScreen extends GameObject {
  constructor() {
    super(0, 0);
    this.layer = 'ui';
    this.add(new Sprite(0, -340, 'start/title_logo'));
    this.add(new Button(0, 340, 'start/start_button', () => {
      console.log('Start button clicked');
    }));
  }
}