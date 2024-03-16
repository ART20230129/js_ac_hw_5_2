import Bowman from '../js/bowman';

test('character creation Bowman', () => {
  const unit = new Bowman('John', 'Bowman');
  const result = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit).toEqual(result);
});

test('testing type Bowman', () => {
  expect(() => new Bowman('Ror', 'Zerg')).toThrow();
});

test('testing max length "name"', () => {
  expect(() => new Bowman('Bollivariuson', 'Bowman')).toThrow();
});

test('testing min length "name"', () => {
  expect(() => new Bowman('w', 'Bowman')).toThrow();
});

test('testing type "name"', () => {
  expect(() => new Bowman(123, 'Bowman')).toThrow();
});

test('testing function "levelUp"', () => {
  const unit = new Bowman('John', 'Bowman');
  unit.levelUp();
  const result = {
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(unit).toEqual(result);
});

// вариант проверки отдельного свойства (attack)
test('testing function "levelUp" (property "attack")', () => {
  const unit = new Bowman('Terr', 'Bowman');
  unit.levelUp();
  expect(unit.attack).toBe(30);
});

test('testing method "levelUp" (health <0)', () => {
  const unit = new Bowman('Terr', 'Bowman');
  unit.health = -5;
  expect(() => unit.levelUp()).toThrow();
});

test('testing method "levelUp" (health = 0)', () => {
  const unit = new Bowman('Terr', 'Bowman');
  unit.health = 0;
  expect(() => unit.levelUp()).toThrowError('You cannot raise the level of the deceased');
});

test('testing method "damage" (health > 0)', () => {
  const unit = new Bowman('Terr', 'Bowman');
  unit.damage(20);
  expect(unit.health).toBe(85);
});

test('testing method "damage" (health < 0)', () => {
  const unit = new Bowman('Terr', 'Bowman');
  unit.health = -5;
  expect(() => unit.damage(20)).toThrow();
});

test('testing method "damage" (health = 0)', () => {
  const unit = new Bowman('Terr', 'Bowman');
  unit.health = 0;
  expect(() => unit.damage(20)).toThrow();
});
