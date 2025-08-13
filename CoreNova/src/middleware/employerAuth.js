
const auth = require('./auth');

const employerAuth = async (req, res, next) => {
  auth(req, res, () => {
    if (req.user.role !== 'employer' && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied. Employer role required.' });
    }
    next();
  });
};

module.exports = employerAuth;
