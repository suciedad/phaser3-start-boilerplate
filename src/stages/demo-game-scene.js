import { GameObjects, Scene } from 'phaser';

import { APP_SIZE } from '../constants/app';
import { PLAYER } from '../constants/game';
import { SCENE_KEY } from '../constants/scene-key';
import { HpMixin, RewardMixin, composeMixins } from '../mixins';
import { HP_EVENTS } from '../mixins/hp-mixin';

export class DemoGameScene extends Scene {
  constructor() {
    super({ key: SCENE_KEY.DEMO_GAME_SCENE });
  }

  create() {
    this.player = this.physics.add.sprite(
      APP_SIZE.WIDTH * 0.5,
      APP_SIZE.HEIGHT * 0.5,
      'blue-player',
    );
    this.player.setCollideWorldBounds(true);

    this.upKey = this.input.keyboard.addKey('UP');
    this.downKey = this.input.keyboard.addKey('DOWN');
    this.leftKey = this.input.keyboard.addKey('LEFT');
    this.rightKey = this.input.keyboard.addKey('RIGHT');

    this.pointer = this.input.activePointer;

    const RewardableHpHero = composeMixins(
      HpMixin(100, 75),
      RewardMixin({ shards: 7 }),
    )(GameObjects.Image);
    const hero = new RewardableHpHero(this, 100, 500, 'yellow-player');
    hero.on(HP_EVENTS.TAKE_DAMAGE, ({ damage, currentHp }) =>
      console.log(`Recieve ${damage} damage. Now ${currentHp} HP.`),
    );
    hero.on(HP_EVENTS.KILLED, ({ damage }) => {
      console.log(`Recieve ${damage} damage. Killed :(`);
      console.log(`Someone take ${hero.getReward().shards} shards from you!`);
    });
    hero.takeDamage(30);
    hero.takeDamage(30);
    hero.takeDamage(30);
    hero.takeDamage(30);
    this.add.existing(hero);
  }

  update() {
    this.player.setVelocity(0);

    if (this.pointer.isDown) {
      this.movePlayerByPointer();
    }

    if (this.leftKey.isDown) {
      this.player.setVelocityX(-PLAYER.VELOCITY_X);
      this.player.flipX = true;
    }

    if (this.rightKey.isDown) {
      this.player.setVelocityX(PLAYER.VELOCITY_X);
      this.player.flipX = false;
    }

    if (this.upKey.isDown) {
      this.player.setVelocityY(-PLAYER.VELOCITY_Y);
    }

    if (this.downKey.isDown) {
      this.player.setVelocityY(PLAYER.VELOCITY_Y);
    }
  }

  movePlayerByPointer() {
    this.physics.moveToObject(
      this.player,
      this.pointer,
      PLAYER.VELOCITY_POINTER,
    );

    this.player.flipX = this.player.body.velocity.x < 0;
  }
}
