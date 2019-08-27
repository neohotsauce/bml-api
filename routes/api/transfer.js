const express = require('express');
const rp = require('request-promise');
const { setAuthJar, getOptions } = require('../../middleware/helpers');

let j = rp.jar();
const router = express.Router();

// @route   POST api/transfer
// @desc    make a transfer
// @access  private

router.post('/', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/transfer`,
      'POST',
      j
    );
    options.form = req.body;
    options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

module.exports = router;
