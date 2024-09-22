const main = {
    home: (req,res) => {
        res.render('home');
    },
    about: (req,res) => {
        res.render('about');
    },
    contact: (req,res) => {
        res.render('contact');
    },
    services: (req,res) => {
        res.render('services');
    },
    login: (req,res) => {
        res.render('login');
    },
}

module.exports = main;