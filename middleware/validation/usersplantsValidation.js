// plantKey
// nickName
// h2oFrequency

module.exports = { validateUsersPlantsFromUser, validateUsersPlantsFromPlant };

function validateUsersPlantsFromUser(req, res, next) {
  const { plantKey, nickName, h2oFrequency } = req.body;
  if (plantKey && nickName && h2oFrequency) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "plantKey, nickName, and h2oFrequency are required" });
  }
}

function validateUsersPlantsFromPlant(req, res, next) {
  const { userKey, nickName, h2oFrequency } = req.body;
  if (userKey && nickName && h2oFrequency) {
    next();
  } else {
    res
      .status(400)
      .json({ message: "userKey, nickName, and h2oFrequency are required" });
  }
}
