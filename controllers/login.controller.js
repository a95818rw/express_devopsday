const login_mod = require('../models/login.models');

exports.login = async (req, res) => {
    console.log(req.query.status);
    res.render('login', { title : 'login', status : req.query.status});
};

exports.confirm = async (req, res) => {
    const name = req.body.name;
    const pwd = req.body.pwd;

    if(login_mod.loginConfirm(name, pwd)){
      direct = "/login/success?user=" + name;
      res.redirect(direct);
    } else{
      res.redirect('/login?status=error');
    }

  };

exports.success = async (req, res) => {
    const user = req.query.user;
    res.render('loginsucess', { user: user });
};