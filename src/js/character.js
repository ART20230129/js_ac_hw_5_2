export default class Character {
  constructor(name, type, health = 100, level = 1) {
    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Error: inappropriate parameter length/type name!');
    } else {
      this.name = name;
    }

    const typeHero = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!typeHero.includes(type)) {
      throw new Error('Error: Inappropriate character type!');
    } else {
      this.type = type;
    }

    this.health = health;
    this.level = level;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error('You cannot raise the level of the deceased');
    } else {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Unit is dead');
    }
  }
}
