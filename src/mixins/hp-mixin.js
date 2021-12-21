export const HP_EVENTS = {
  TAKE_DAMAGE: 'take-damage',
  KILLED: 'killed',
};

export const HpMixin = (maxHp, currentHp) => (superclass) =>
  class extends superclass {
    constructor(...args) {
      super(...args);

      this.maxHp = maxHp;
      this.currentHp = currentHp;
    }

    takeDamage(damage) {
      if (this.currentHp > 0) {
        this.emit(HP_EVENTS.TAKE_DAMAGE, { damage, currentHp: this.currentHp });

        const newCurrentHp = this.currentHp - damage;

        if (newCurrentHp <= 0) {
          this.currentHp = 0;

          this.emit(HP_EVENTS.KILLED, { damage });
        } else {
          this.currentHp = newCurrentHp;
        }
      }
    }
  };
