import { GameObject } from '@erenengine/2d';

export default class LoadingScreen extends GameObject {
  constructor() {
    super(0, 0);
  }

  setProgress(progress: number) {
    throw new Error('Not implemented');
  }
}