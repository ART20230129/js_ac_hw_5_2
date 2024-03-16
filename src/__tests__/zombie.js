import Zombie from '../js/zombie';

test('character creation Zombie', () => {
  const unit = new Zombie('Joger', 'Zombie');
  const result = {
    name: 'Joger',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(unit).toEqual(result);
});
