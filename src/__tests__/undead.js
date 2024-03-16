import Undead from '../js/undead';

test('character creation Undead', () => {
  const unit = new Undead('Jogi', 'Undead');
  const result = {
    name: 'Jogi',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(unit).toEqual(result);
});
