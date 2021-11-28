import { GameObjects } from 'phaser';

const DEFAULT_BG_COLOR = 0x1976d2;
const DEFAULT_BG_RADIUS = 5;
const DEFAULT_TEXTURE_NAME = 'default-button-background';

// TODO: research setPosition setOrigin cases
export class Button extends GameObjects.Container {
  constructor(
    scene,
    x,
    y,
    width,
    height,
    text,
    style,
    nineSliceSprite,
    onClick,
  ) {
    super(scene);

    this.scene = scene;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.style = style;
    this.nineSliceSprite = nineSliceSprite;
    this.onClick = onClick;

    this.renderBackground();
    this.renderText();

    this.setInteractive({ useHandCursor: true });
    this.on('pointerdown', () => this.onClick());
  }

  renderBackgroundMethod() {
    return this.nineSliceSprite ? 'nine-slice' : 'default';
  }

  renderBackground() {
    const method = this.renderBackgroundMethod();

    switch (method) {
      case 'nine-slice':
        this.renderNineSliceBackground();
        break;

      default:
        this.renderDefaultBackground();
        break;
    }
  }

  renderNineSliceBackground() {}

  renderDefaultBackground() {
    const { x, y, width, height, scene } = this;
    const graphics = scene.make.graphics();
    // TODO: try to remove random naming
    const name = DEFAULT_TEXTURE_NAME + Math.random();

    graphics
      .fillStyle(DEFAULT_BG_COLOR, 1)
      .fillRoundedRect(0, 0, width, height, DEFAULT_BG_RADIUS)
      .generateTexture(name, width, height)
      .destroy();

    scene.add.image(x, y, name);
  }

  renderText() {
    const { x, y, text, scene } = this;

    scene.add.text(x, y, text).setOrigin(0.5);
  }
}
