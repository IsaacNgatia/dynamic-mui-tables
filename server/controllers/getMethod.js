const pool = require("../database/connect");

const getDepartments = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM departments");
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    return res.status(500).json({ status: "failed", data: error });
  }
};
const getOwners = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM owners");
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    return res.status(500).json({ status: "failed", data: error });
  }
};
const getServices = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM services");
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    return res.status(500).json({ status: "failed", data: error });
  }
};
const getPolicies = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM legal_policies");
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    return res.status(500).json({ status: "failed", data: error });
  }
};
const getTimelines = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM timelines");
    return res.status(200).json({ status: "success", data: result });
  } catch (error) {
    return res.status(500).json({ status: "failed", data: error });
  }
};

module.exports = {
  getDepartments,
  getOwners,
  getServices,
  getPolicies,
  getTimelines,
};
