import { GameObject, Sprite } from '@erenengine/2d';

export default class StartScreen extends GameObject {
  constructor() {
    super(0, 0);
    this.add(new Sprite(0, 0, 'start/title_logo'));
  }
}