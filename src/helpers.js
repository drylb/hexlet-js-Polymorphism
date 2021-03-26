// @ts-check
// import Guest from './Guest';
// import User from './User1';
// BEGIN (write your solution here)
const mapping = {
  user: (user) => `Hello ${user.getName()}!`,
  guest: (guest) => `Nice to meet you ${guest.getName()}!`,
};

const greetUser = (userOrGuest) => mapping[userOrGuest.getType()](userOrGuest);

export default greetUser;
// END

/* helpers.js
Реализуйте и экспортируйте по умолчанию функцию,
которая возвращает приветствие для пользователя.
Это приветствие показывается пользователю на сайте.
Если пользователь гость, то выводится "Nice to meet you Guest!",
если не гость, то "Hello <Имя>!", где "<Имя>" это имя реального пользователя.

В этой задаче, способ решения остается на ваше усмотрение.
Используйте знания полученные в этом курсе.

Примеры
import Guest from '../Guest.js';
import User from '../User.js';
import getGreeting from '../helpers.js';

const guest = new Guest();
getGreeting(guest); // 'Nice to meet you Guest!'

const user = new User('Petr');
getGreeting(user); // 'Hello Petr!' */
