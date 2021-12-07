import { Scene } from 'phaser';
import { Button } from '../components/button';
import { APP_SIZE } from '../constants/app';
import { SCENE_KEY } from '../constants/scene-key';
import { MAIN } from '../locales/main';

const TEXT_STYLE = {
  fill: '#380e00',
  fontSize: '18px',
  fontFamily: "'Press Start 2P', cursive",
};

const BUTTON_SIZE = {
  WIDTH: 255,
  HEIGHT: 70,
};

export class MainMenu extends Scene {
  constructor() {
    super({ key: SCENE_KEY.MAIN_MENU });

    this.buttons = {
      start: null,
      selectLevel: null,
      options: null,
    };

    this.logo = null;
  }

  preload() {}

  create() {
    const nineSliceSprites = {
      topLeft: 'top-left',
      topRight: 'top-right',
      bottomLeft: 'bottom-left',
      bottomRight: 'bottom-right',
      top: 'top',
      bottom: 'bottom',
      left: 'left',
      right: 'right',
      bg: 'bg',
    };

    this.buttons.start = new Button(
      this,
      APP_SIZE.WIDTH * 0.5,
      APP_SIZE.HEIGHT * 0.5 - 55 - 20,
      BUTTON_SIZE.WIDTH,
      BUTTON_SIZE.HEIGHT,
      MAIN.START_GAME.toUpperCase(),
      TEXT_STYLE,
      'main-menu-button',
      this.startClickHandler,
    );

    this.buttons.selectLevel = new Button(
      this,
      APP_SIZE.WIDTH * 0.5,
      APP_SIZE.HEIGHT * 0.5 + 20,
      BUTTON_SIZE.WIDTH,
      BUTTON_SIZE.HEIGHT,
      MAIN.SELECT_LEVEL,
      {
        fontSize: 22,
        fill: '#fff',
        fontFamily: 'Arial',
        stroke: '#29366f',
        strokeThickness: 8,
      },
      nineSliceSprites,
      this.selectLevelHandler,
    );

    this.buttons.selectLevel = new Button(
      this,
      APP_SIZE.WIDTH * 0.5,
      APP_SIZE.HEIGHT * 0.5 + 20 + 70 + 30,
      BUTTON_SIZE.WIDTH,
      BUTTON_SIZE.HEIGHT,
      MAIN.OPTIONS,
      null,
      null,
      this.optionsClickHandler,
    );
  }

  startClickHandler() {
    console.log('Start Game!');
  }

  selectLevelHandler() {
    console.log('Select Level!');
  }

  optionsClickHandler() {
    console.log('Open Options!');
  }
}
