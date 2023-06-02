exports.getIndex = async (req, res) => {
    res.render('index', { title : 'Express' });
};

exports.health_check = async (req, res) => {
    res.send('ok');
};
