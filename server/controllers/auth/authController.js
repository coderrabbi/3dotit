const admin = require('../../firbase');
const currentUser = async (req, res) => {
    try {
        const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
        console.log('FIREBASE CURRENT USER AFTER TOKEN ====>', firebaseUser);
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

module.exports = { login, currentUser };
