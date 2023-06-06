const login_mod = require('../models/login.models');

describe('login test', () => {
  it('login Confirm', () => {
    if(!login_mod.loginConfirm("123", "123")){
      throw new Error("login error");
    }
  });
});