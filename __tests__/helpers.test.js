/* eslint-disable no-undef */

import Guest from '../src/Guest';
import User from '../src/User1';
import getGreeting from '../src/helpers';

it('getGreeting', () => {
  const guest = new Guest();
  expect(getGreeting(guest)).toBe('Nice to meet you Guest!');

  const user1 = new User('Petr');
  expect(getGreeting(user1)).toBe('Hello Petr!');

  const user2 = new User('Mark');
  expect(getGreeting(user2)).toBe('Hello Mark!');
});
