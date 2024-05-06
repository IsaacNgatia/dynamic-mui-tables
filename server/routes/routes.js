const {
  getDepartments,
  getOwners,
  getServices,
  getPolicies,
  getTimelines,
} = require("../controllers/getMethod");
const { writeToDb } = require("../controllers/postMethod");

const router = require("express").Router();

router.get("/", function (req, res) {
  res.status(200).json({ status: "success", data: "Backend is working fine" });
});
router.get("/get-departments", getDepartments);
router.get("/get-owners", getOwners);
router.get("/get-services", getServices);
router.get("/get-policies", getPolicies);
router.get("/get-timelines", getTimelines);
router.post("/write-data", writeToDb)

module.exports = router;
