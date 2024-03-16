import Daemon from '../js/daemon';

test('character creation Daemon', () => {
  const bowman = new Daemon('John', 'Daemon');
  const result = {
    name: 'John',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(bowman).toEqual(result);
});
