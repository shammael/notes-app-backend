import { getUserService } from '../../services';

const getUserController = async (req, res) => {
  const { id } = req.query;
  const userDB = await getUserService({ id });
  res.status(200).json({
    username: userDB.username,
    email: userDB.email
  });
};

export default getUserController;