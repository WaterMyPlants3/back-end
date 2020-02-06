// plantKey
// nickName
// h2oFrequency
const { validate } = require("../../util/validator/validator");

module.exports = { validateUsersPlantsFromUser, validateUsersPlantsFromPlant };

const validationSchemaFromUser = {
  plantKey: {
    required: false,
    message: {
      match: "plantKey must be number",
      required: "plantKey is required"
    }
  },
  nickName: {
    required: false,
    message: {
      match:
        "nickName must be 4-20 characters consist of letters, digits, _, and spaces",
      required: "nickName is required"
    }
  },
  h2oFrequency: {
    message: {
      match: "h2oFrequency must be number",
      required: "h2oFrequency is required"
    }
  }
};

function validateUsersPlantsFromUser(req, res, next) {
  validate(req.body, validationSchemaFromUser);
  next();
}

const validationSchemaFromPlant = {
  userKey: {
    required: true,
    match: /^\d+$/,
    message: {
      match: "userKey must be number",
      required: "userKey is required"
    }
  },
  nickName: {
    required: true,
    match: /^[\w\s]{4,20}$/i,
    message: {
      match:
        "nickName must be 4-20 characters consist of letters, digits, _, and spaces",
      required: "nickName is required"
    }
  },
  h2oFrequency: {
    required: true,
    match: /^\d+$/i,
    message: {
      match: "h2oFrequency must be number",
      required: "h2oFrequency is required"
    }
  }
};

function validateUsersPlantsFromPlant(req, res, next) {
  validate(req.body, validationSchemaFromPlant);
  next();
}
