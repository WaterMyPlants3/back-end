//species string

module.exports = { validatePlant };

function validatePlant(req, res, next) {
  const { species } = req.body;
  if (species) {
    next();
  } else {
    res.status(400).json({ message: "species is required" });
  }
}
