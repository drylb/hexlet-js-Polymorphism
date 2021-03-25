// @ts-check

// BEGIN (write your solution here)
class FakeSubscription {
  constructor(user) {
    this.user = user;
  }

  isAdmin() {
    return this.user === 'rakhim@hexlet.io';
  }

  hasProfessionalAccess() {
    return this.isAdmin();
  }

  hasPremiumAccess() {
    return this.isAdmin();
  }
}

export default FakeSubscription;
// END
