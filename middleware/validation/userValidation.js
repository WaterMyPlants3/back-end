// username string
// phoneNumber string
// password string

module.exports = { validateUser };

function validateUser(req, res, next) {
  const { username, phoneNumber, password } = req.body;
  if (username && phoneNumber && password) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "username, phoneNumber, and password are required" });
  }
}
