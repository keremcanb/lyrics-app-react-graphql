require('dotenv').config();

const { DEV_DB_URI, TEST_DB_URI } = process.env;

module.exports = {
  development: {
    url: DEV_DB_URI
  },

  testing: {
    url: TEST_DB_URI
  }
};
