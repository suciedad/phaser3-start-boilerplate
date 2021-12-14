import { Actions, Scene } from 'phaser';
import { Button } from '../components/button';
import { PLACEMENT, Tooltip } from '../components/tooltip';
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
      0,
      0,
      BUTTON_SIZE.WIDTH,
      BUTTON_SIZE.HEIGHT,
      MAIN.START_GAME.toUpperCase(),
      TEXT_STYLE,
      'main-menu-button',
      this.startClickHandler.bind(this),
    );

    this.buttons.selectLevel = new Button(
      this,
      0,
      0,
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

    this.buttons.options = new Button(
      this,
      0,
      0,
      BUTTON_SIZE.WIDTH,
      BUTTON_SIZE.HEIGHT,
      MAIN.OPTIONS,
      null,
      null,
      this.optionsClickHandler,
    );

    this.popoverButton = new Button(this, 150, 100, 100, 40, 'HOVER ME');

    this.popover = new Tooltip(
      this,
      this.popoverButton,
      150,
      70,
      nineSliceSprites,
      PLACEMENT.BOTTOM_LEFT,
      20,
    );

    Actions.GridAlign(
      [this.buttons.start, this.buttons.selectLevel, this.buttons.options],
      {
        x: APP_SIZE.WIDTH * 0.5,
        y: 300,
        height: -1,
        cellHeight: BUTTON_SIZE.HEIGHT + 40,
        position: 6,
      },
    );
  }

  startClickHandler() {
    console.log('Start Game!');
    this.scene.start(SCENE_KEY.DEMO_GAME_SCENE);
  }

  selectLevelHandler() {
    console.log('Select Level!');
  }

  optionsClickHandler() {
    console.log('Open Options!');
  }
}
