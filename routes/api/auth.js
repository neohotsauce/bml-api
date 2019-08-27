const express = require('express');
const rp = require('request-promise');
const { setAuthJar, genToken } = require('../../middleware/helpers');

let j = rp.jar();
const router = express.Router();

// @route   GET api/auth
// @desc    test route
// @access  public
router.get('/', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = {
      method: 'GET',
      uri: 'https://www.bankofmaldives.com.mv/internetbanking/api/dashboard',
      jar: j,
      json: true,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.15.2'
      }
    };
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   POST api/auth
// @desc    authenticate user and get token
// @access  Public
router.post('/', async (req, res) => {
  try {
    const token = await genToken(req);
    return res.json(token);
  } catch (err) {
    return res.status(401).json(err);
  }
});

module.exports = router;
