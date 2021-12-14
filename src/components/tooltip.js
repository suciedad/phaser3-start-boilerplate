import { GameObjects } from 'phaser';

import { NineSlice } from './nine-slice';

const DEFAULT_OFFSET = 10;

export const PLACEMENT = {
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_CENTER: 'top-center',
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  LEFT_CENTER: 'left-center',
  LEFT_TOP: 'left-top',
  LEFT_BOTTOM: 'left-bottom',
  RIGHT_CENTER: 'right-center',
  RIGHT_TOP: 'right-top',
  RIGHT_BOTTOM: 'right-bottom',
};

export class Tooltip extends GameObjects.Container {
  constructor(scene, parent, width, height, sprites, placement, offset) {
    super(scene);

    this.scene = scene;
    this.parent = parent;
    this.width = width;
    this.height = height;
    this.offset = offset || DEFAULT_OFFSET;

    const { x, y } = this.getTooltipPosition(placement);

    this.bg = new NineSlice(scene, x, y, width, height, sprites);

    this.add(this.bg);

    this.scene.add.existing(this);

    this.hideTooltip();

    this.parent.on('pointerover', this.showTooltip.bind(this));
    this.parent.on('pointerout', this.hideTooltip.bind(this));
  }

  showTooltip() {
    this.setVisible(true);
  }

  hideTooltip() {
    this.setVisible(false);
  }

  getTooltipPosition(placement) {
    switch (placement) {
      case PLACEMENT.BOTTOM_CENTER:
        return this.getBottomCenterPosition();

      case PLACEMENT.BOTTOM_LEFT:
        return this.getBottomLeftPosition();

      case PLACEMENT.BOTTOM_RIGHT:
        return this.getBottomRightPosition();

      case PLACEMENT.TOP_CENTER:
        return this.getTopCenterPosition();

      case PLACEMENT.TOP_LEFT:
        return this.getTopLeftPosition();

      case PLACEMENT.TOP_RIGHT:
        return this.getTopRightPosition();

      case PLACEMENT.LEFT_CENTER:
        return this.getLeftCenterPosition();

      case PLACEMENT.LEFT_TOP:
        return this.getLeftTopPosition();

      case PLACEMENT.LEFT_BOTTOM:
        return this.getLeftBottomPosition();

      case PLACEMENT.RIGHT_CENTER:
        return this.getRightCenterPosition();

      case PLACEMENT.RIGHT_TOP:
        return this.getRightTopPosition();

      case PLACEMENT.RIGHT_BOTTOM:
        return this.getRightBottomPosition();

      default:
        return this.getBottomCenterPosition();
    }
  }

  getTopCoord() {
    return (
      this.parent.y - this.parent.height * 0.5 - this.height * 0.5 - this.offset
    );
  }

  getBottomCoord() {
    return (
      this.parent.y + this.parent.height * 0.5 + this.height * 0.5 + this.offset
    );
  }

  getLeftCoord() {
    return (
      this.parent.x - this.parent.width * 0.5 - this.width * 0.5 - this.offset
    );
  }

  getRightCoord() {
    return (
      this.parent.x + this.parent.width * 0.5 + this.width * 0.5 + this.offset
    );
  }

  getTopCenterPosition() {
    return {
      x: this.parent.x,
      y: this.getTopCoord(),
    };
  }

  // TODO: rework coords getting
  getTopLeftPosition() {
    return {
      x: this.parent.x + (this.width * 0.5 - this.parent.width * 0.5),
      y: this.getTopCoord(),
    };
  }

  getTopRightPosition() {
    return {
      x: this.parent.x + (this.parent.width * 0.5 - this.width * 0.5),
      y: this.getTopCoord(),
    };
  }

  getBottomCenterPosition() {
    return {
      x: this.parent.x,
      y: this.getBottomCoord(),
    };
  }

  getBottomLeftPosition() {
    return {
      x: this.parent.x + (this.width * 0.5 - this.parent.width * 0.5),
      y: this.getBottomCoord(),
    };
  }

  getBottomRightPosition() {
    return {
      x: this.parent.x + (this.parent.width * 0.5 - this.width * 0.5),
      y: this.getBottomCoord(),
    };
  }

  getLeftCenterPosition() {
    return {
      x: this.getLeftCoord(),
      y: this.parent.y,
    };
  }

  getLeftTopPosition() {
    return {
      x: this.getLeftCoord(),
      y: this.parent.y + (this.height * 0.5 - this.parent.height * 0.5),
    };
  }

  getLeftBottomPosition() {
    return {
      x: this.getLeftCoord(),
      y: this.parent.y + (this.parent.height * 0.5 - this.height * 0.5),
    };
  }

  getRightCenterPosition() {
    return {
      x: this.getRightCoord(),
      y: this.parent.y,
    };
  }

  getRightTopPosition() {
    return {
      x: this.getRightCoord(),
      y: this.parent.y + (this.height * 0.5 - this.parent.height * 0.5),
    };
  }

  getRightBottomPosition() {
    return {
      x: this.getRightCoord(),
      y: this.parent.y + (this.parent.height * 0.5 - this.height * 0.5),
    };
  }
}
