// 密码加密中间件
 async function encryptPassword (req, res, next) {
  try {
    const { password } = req.body;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
}

export { encryptPassword }