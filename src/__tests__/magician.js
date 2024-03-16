import Magician from '../js/magician';

test('character creation Magician', () => {
  const unit = new Magician('John', 'Magician');
  const result = {
    name: 'John',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(unit).toEqual(result);
});
