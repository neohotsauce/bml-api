const express = require('express');
const rp = require('request-promise');
const { setAuthJar, getOptions } = require('../../middleware/helpers');

let j = rp.jar();
const router = express.Router();

// @route   GET api/contact
// @desc    get all contacts
// @access  private

router.get('/', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      'https://www.bankofmaldives.com.mv/internetbanking/api/contacts',
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   GET api/contact/:id
// @desc    get details for the selected contact
// @access  private

router.get('/:id', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/contacts/detail/${req.params.id}`,
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   DELETE api/contact/:id
// @desc    delete contact by id
// @access  private

router.delete('/:id', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/contacts/${req.params.id}`,
      'POST',
      j,
      { _method: 'delete' }
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   GET api/contact/validate/:accNum
// @desc    validate account by account number
// @access  private

router.get('/validate/:accNum', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/validate/account/${req.params.accNum}`,
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   POST api/contact
// @desc    add new bml contact
// @access  private

router.post('/', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/contacts/`,
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
