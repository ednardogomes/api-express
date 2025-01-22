import pkg from 'jsonwebtoken';
const { verify, pgk } = pkg;

const authorization = async (req, res, next) => {
  const secret = process.env.SECRET;

  try {
    const tokenHeader = req.headers['authorization'];
    const tokenSplit = tokenHeader && tokenHeader.split(' ')[1];

    if (!tokenSplit) {
      throw new Error('Informe o token');
    }

    const decodedToken = verify(tokenSplit, secret);

    // req[user] = {
    //   sub: decodedToken.email
    // };

    next();
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      statusCode: 500,
      message: 'Token não válido'
    });
  }
};

export default authorization;
