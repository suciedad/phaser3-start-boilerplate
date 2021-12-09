import { Game } from 'phaser';

import {
  APP_BACKGROUND_COLOR,
  APP_CONTAINER_ID,
  APP_SIZE,
} from './constants/app';
import { addDatGui } from './utils/dat-gui';

import { Loading } from './stages/loading';
import { MainMenu } from './stages/main-menu';
import { DemoGameScene } from './stages/demo-game-scene';

addDatGui();

const GAME_SETTINGS = {
  width: APP_SIZE.WIDTH,
  height: APP_SIZE.HEIGHT,
  parent: APP_CONTAINER_ID,
  backgroundColor: APP_BACKGROUND_COLOR,
  scene: [Loading, MainMenu, DemoGameScene],
  physics: {
    default: 'arcade',
  },
};

new Game(GAME_SETTINGS);
