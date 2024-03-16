import Swordsman from '../js/swordsman';

test('character creation Swordsman', () => {
  const unit = new Swordsman('Jog', 'Swordsman');
  const result = {
    name: 'Jog',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(unit).toEqual(result);
});
