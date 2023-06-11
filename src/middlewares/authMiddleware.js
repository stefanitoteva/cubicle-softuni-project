const jwt = require('../lib/jwt');
const { SECRET } = require('../config/confing');


exports.auth = async(req, res, next) => {
    const token = req.cookies['token'];

    if(token) {
        try {
            const decodedToken = await jwt.verify(token, SECRET);

            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuth = true;
            
            next()
        } catch(err) {
            res.clearCookie('token');

            res.redirect('/users/login');
        }
    } else {
        next();
    }
}