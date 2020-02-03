const { validate } = require("../../util/validator/validator");
// username string
// phoneNumber string
// password string

module.exports = { validateUser };

const validationSchema = {
  username: {
    match: /^\w{4,16}$/i,
    required: true,
    message: {
      match:
        "username must be 4-16 characters consist of letters, digits, and _",
      required: "username is required"
    }
  },
  phoneNumber: {
    match: /^\d{3}-\d{3}-\d{4}$/,
    required: true,
    message: {
      match: "phoneNumber must be in this format, sample:123-456-7890",
      required: "phoneNumber is required"
    }
  },
  password: {
    match: /^[\w\d]{4,16}$/,
    required: true,
    message: {
      match:
        "password must be combination of letters and digits in length of 4-16 characters",
      required: "phoneNumber is required"
    }
  }
};

function validateUser(req, res, next) {
  validate(req.body, validationSchema);
  next();
}
