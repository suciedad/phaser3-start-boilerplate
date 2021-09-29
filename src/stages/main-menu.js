import { Scene } from 'phaser';
import { APP_SIZE } from '../constants/app';
import { SCENE_KEY } from '../constants/scene-key';

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

  preload() { }

  create() {
    this.buttons.start = this.add.sprite(APP_SIZE.WIDTH * 0.5, APP_SIZE.HEIGHT * 0.5 - 55 - 20, 'main-menu-button')
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => this.startClickHandler());

    this.buttons.selectLevel = this.add.sprite(APP_SIZE.WIDTH * 0.5, APP_SIZE.HEIGHT * 0.5 + 20, 'main-menu-button')
      .setInteractive({ useHandCursor: true })
      .on('pointerdown', () => this.selectLevelHandler());

    const startText = this.add.text(0, APP_SIZE.HEIGHT * 0.5 - 55 - 36, 'TEXT.START', TEXT_STYLE);
    const selectText = this.add.text(0, APP_SIZE.HEIGHT * 0.5 + 3, 'TEXT.SELECT', TEXT_STYLE);

    startText.x = APP_SIZE.WIDTH * 0.5 - startText.width * 0.5;
    selectText.x = APP_SIZE.WIDTH * 0.5 - selectText.width * 0.5;
  }

  startClickHandler() {
    console.log('Start Game!')
  }

  selectLevelHandler() {
    // this.scene.start(SCENE_KEY.LEVEL_SELECTION);
  }
}
