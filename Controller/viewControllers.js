const path = require('path')
/* LogIn PAGE */

exports.getLoginForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'login.html'))
}

/* SIGNUP PAGE */

exports.getHome = (req, res)=> {
    res.sendFile(path.join(__dirname, '../', 'views', 'home.html'))
}


