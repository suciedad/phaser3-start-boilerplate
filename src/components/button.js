import { GameObjects } from 'phaser';

const DEFAULT_BG_COLOR = 0x1976d2;
const DEFAULT_BG_RADIUS = 5;
const DEFAULT_TEXTURE_NAME = 'default-button-background';

// TODO: research setOrigin
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
    super(scene, x, y);

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

    this.scene.add.existing(this);

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
    const { width, height, scene } = this;
    const graphics = scene.make.graphics();
    // TODO: try to remove random naming
    const name = DEFAULT_TEXTURE_NAME + Math.random();

    // Make button background from graphics
    graphics
      .fillStyle(DEFAULT_BG_COLOR, 1)
      .fillRoundedRect(0, 0, width, height, DEFAULT_BG_RADIUS)
      .generateTexture(name, width, height)
      .destroy();

    const renderedBackground = scene.add.image(0, 0, name);

    this.add(renderedBackground);
  }

  renderText() {
    const { text, scene } = this;

    const renderedText = scene.add.text(0, 0, text).setOrigin(0.5);

    this.add(renderedText);
  }
}
