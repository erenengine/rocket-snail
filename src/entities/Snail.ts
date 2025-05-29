import { AnimatedSprite, PhysicsObject } from '@erenengine/2d';

export default class Snail extends PhysicsObject {
  private floatAmplitude = 10;
  private floatSpeed = 0.01;
  private baseY: number;
  private elapsed = 0;

  constructor(x: number, y: number) {
    super(x, y);
    this.baseY = y;
    this.add(new AnimatedSprite(0, 0, 'snail', { fps: 24 }));
  }

  update(dt: number) {
    this.elapsed += dt;
    this.y = this.baseY + Math.sin(this.elapsed * this.floatSpeed) * this.floatAmplitude;
  }
}