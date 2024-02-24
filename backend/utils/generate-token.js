const jwt = require('jsonwebtoken');

const createSendToken = (res, userId) => {
  try {
    const { JWT_SECRET, JWT_EXPIRES_IN, JWT_COOKIE_EXPIRES_IN, NODE_ENV } =
      process.env;

    if (!JWT_SECRET || !JWT_EXPIRES_IN || !JWT_COOKIE_EXPIRES_IN || !NODE_ENV) {
      throw new Error('Environment variables are missing');
    }

    const cookieExpiresIn = parseInt(JWT_COOKIE_EXPIRES_IN);

    const token = jwt.sign({ userId }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.cookie('jwt', token, {
      expires: new Date(Date.now() + cookieExpiresIn * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createSendToken };
