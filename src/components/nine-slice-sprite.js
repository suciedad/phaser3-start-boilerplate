import { GameObjects } from 'phaser';

export class NineSliceSprite extends GameObjects.Container {
  constructor(scene, pos, size, spriteKeys) {
    super(scene);

    this.scene = scene;
    this.sprite = {
      topLeft: null,
      top: null,
      topRight: null,
      left: null,
      bg: null,
      right: null,
      bottomLeft: null,
      bottom: null,
      bottomRight: null,
    };

    const { x, y } = pos;
    const { width, height } = size;
    const {
      topLeft,
      top,
      topRight,
      left,
      bg,
      right,
      bottomLeft,
      bottom,
      bottomRight,
    } = spriteKeys;

    this.setSize(width, height);
    this.setPosition(x, y);

    this.sprite.topLeft = this.scene.add.sprite(0, 0, topLeft);
    this.sprite.topRight = this.scene.add.sprite(0, 0, topRight);
    this.sprite.bottomLeft = this.scene.add.sprite(0, 0, bottomLeft);
    this.sprite.bottomRight = this.scene.add.sprite(0, 0, bottomRight);

    this.sprite.topLeft.setOrigin(0, 0);
    this.sprite.topRight.setOrigin(0, 0);
    this.sprite.bottomLeft.setOrigin(0, 0);
    this.sprite.bottomRight.setOrigin(0, 0);

    const contentSize = {
      width: width - this.sprite.topLeft.width - this.sprite.topRight.width,
      height:
        height - this.sprite.topLeft.height - this.sprite.bottomLeft.height,
    };

    this.sprite.topRight.setPosition(
      this.sprite.topLeft.width + contentSize.width,
      0,
    );
    this.sprite.bottomLeft.setPosition(
      0,
      this.sprite.topLeft.height + contentSize.height,
    );
    this.sprite.bottomRight.setPosition(
      this.sprite.topLeft.width + contentSize.width,
      this.sprite.topLeft.height + contentSize.height,
    );

    // TODO - rework tileSprite height
    this.sprite.top = this.scene.add
      .tileSprite(this.sprite.topLeft.width, 0, contentSize.width, 20, top)
      .setOrigin(0, 0);
    this.sprite.bottom = this.scene.add
      .tileSprite(
        this.sprite.topLeft.width,
        this.sprite.topLeft.height + contentSize.height,
        contentSize.width,
        20,
        bottom,
      )
      .setOrigin(0, 0);
    this.sprite.left = this.scene.add
      .tileSprite(0, this.sprite.topLeft.height, 20, contentSize.height, left)
      .setOrigin(0, 0);
    this.sprite.right = this.scene.add
      .tileSprite(
        this.sprite.topLeft.width + contentSize.width,
        this.sprite.topLeft.height,
        20,
        contentSize.height,
        right,
      )
      .setOrigin(0, 0);

    this.sprite.bg = this.scene.add
      .tileSprite(
        this.sprite.topLeft.width,
        this.sprite.topLeft.height,
        contentSize.width,
        contentSize.height,
        bg,
      )
      .setOrigin(0, 0);

    this.add([
      this.sprite.bg,
      this.sprite.top,
      this.sprite.bottom,
      this.sprite.left,
      this.sprite.right,
      this.sprite.topLeft,
      this.sprite.topRight,
      this.sprite.bottomLeft,
      this.sprite.bottomRight,
    ]);

    this.scene.add.existing(this);
  }
}
