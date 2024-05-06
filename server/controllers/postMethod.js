const { pool } = require("../database/connect");

const writeToDb = async (req, res) => {
  try {
    const { owner, department, policyData, services } = req.body;
    // const [lastEntry] = await pool.execute("SELECT MAX(id) FROM entries");
    const writeEntry = pool.query(
      `INSERT INTO entries (department_id, owner_id) VALUES ( '${owner}', '${department}')`
    );
    return res.status(200).json({ status: "success", data: "lastEntry" });
  } catch (error) {
    console.log(error);
    return;
  }
};
module.exports = {writeToDb};
