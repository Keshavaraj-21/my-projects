const my_db = require("../connection/db");
const logger = require("../logger/logger");

var SignupForm = async (object) => {
  try {
    var val = await my_db
      .add(object, "housing-software")
      .then((data) => {
        logger.info("Your Data was posted sucessfully!!!");
        return data;
      })
      .catch((err) => {
        logger.error("error", "Your response from database");
        return err;
      });
  } catch (error) {
    console.log("OOPS!!!Error");
  }
  return val;
};

module.exports = { SignupForm };
