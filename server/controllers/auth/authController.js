const admin = require('../../firbase');
const currentUser = async (req, res) => {
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);

        res.status(200).json({
            user: firebaseUser,
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Invalid or Expired token',
        });
    }
};

const login = (req, res) => {
    res.json({
        message: 'Hello World',
    });
};
const privateRoute = (req, res) => {
    console.log('token in private route', req.headers.token);
    res.json({
        ok: true,
    });
};

module.exports = { login, currentUser, privateRoute };
