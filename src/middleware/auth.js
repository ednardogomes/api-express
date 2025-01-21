import authController from '../auth/controller/auth-controller';

const auth = async (req, res, next) => {
  const authorization = await authController;
  console.log(authorization);
  return authorization;
};

export default auth;
