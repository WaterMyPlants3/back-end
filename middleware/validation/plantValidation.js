const { validate } = require("../../util/validator/validator");

//species string

module.exports = { validatePlant };

const validationSchema = {
  species: {
    required: true,
    match: /^[\w\s]{4,20}$/i,
    message: {
      match:
        "species must be 4-20 characters consist of letters, digits, _, and spaces",
      required: "species is required"
    }
  }
};

function validatePlant(req, res, next) {
  validate(req.body, validationSchema);
  next();
}
