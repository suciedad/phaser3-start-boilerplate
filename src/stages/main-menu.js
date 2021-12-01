import { Scene } from 'phaser';
import { Button } from '../components/button';
import { APP_SIZE } from '../constants/app';
import { SCENE_KEY } from '../constants/scene-key';
import { MAIN } from '../locales/main';

const TEXT_STYLE = {
  fill: '#222',
  fontSize: '24px',
};

export class MainMenu extends Scene {
  constructor() {
    super({ key: SCENE_KEY.MAIN_MENU });

    this.buttons = {
      start: null,
      selectLevel: null,
      protocol: null,
    };

    this.logo = null;
  }

  preload() {}

  create() {
    // this.buttons.start = this.add
    //   .sprite(
    //     APP_SIZE.WIDTH * 0.5,
    //     APP_SIZE.HEIGHT * 0.5 - 55 - 20,
    //     'main-menu-button',
    //   )
    //   .setInteractive({ useHandCursor: true })
    //   .on('pointerdown', () => this.startClickHandler());

    // this.buttons.selectLevel = this.add
    //   .sprite(
    //     APP_SIZE.WIDTH * 0.5,
    //     APP_SIZE.HEIGHT * 0.5 + 20,
    //     'main-menu-button',
    //   )
    //   .setInteractive({ useHandCursor: true })
    //   .on('pointerdown', () => this.selectLevelHandler());

    // const startText = this.add.text(
    //   0,
    //   APP_SIZE.HEIGHT * 0.5 - 55 - 36,
    //   MAIN.START_GAME,
    //   TEXT_STYLE,
    // );
    // const selectText = this.add.text(
    //   0,
    //   APP_SIZE.HEIGHT * 0.5 + 3,
    //   MAIN.SELECT_LEVEL,
    //   TEXT_STYLE,
    // );

    // startText.x = APP_SIZE.WIDTH * 0.5 - startText.width * 0.5;
    // selectText.x = APP_SIZE.WIDTH * 0.5 - selectText.width * 0.5;

    this.buttons.start = new Button(
      this,
      APP_SIZE.WIDTH * 0.5,
      APP_SIZE.HEIGHT * 0.5 - 55 - 20,
      255,
      70,
      MAIN.START_GAME,
      TEXT_STYLE,
      'main-menu-button',
      this.startClickHandler,
    );

    this.buttons.selectLevel = new Button(
      this,
      APP_SIZE.WIDTH * 0.5,
      APP_SIZE.HEIGHT * 0.5 + 20,
      255,
      70,
      MAIN.SELECT_LEVEL,
      null,
      null,
      this.selectLevelHandler,
    );
  }

  startClickHandler() {
    console.log('Start Game!');
  }

  selectLevelHandler() {
    console.log('Select Level!');
  }
}
