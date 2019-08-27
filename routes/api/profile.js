const express = require('express');
const rp = require('request-promise');
const { setAuthJar, getOptions } = require('../../middleware/helpers');

let j = rp.jar();
const router = express.Router();

// @route   GET api/profile/dashboard
// @desc    get dashboard data
// @access  private

router.get('/dashboard', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      'https://www.bankofmaldives.com.mv/internetbanking/api/dashboard',
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   GET api/profile/account/:id
// @desc    get details for the selected account
// @access  private

router.get('/account/:id', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/account/${req.params.id}`,
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   GET api/profile/account/:id/history/today
// @desc    get todays history for the selected account
// @access  private

router.get('/account/:id/history/today', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/account/${req.params.id}/history/today`,
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   GET api/profile/account/:id/history/all/from/to
// @desc    get all history for selected dates
// @access  private

router.get('/account/:id/history/all/:from/:to', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/account/${req.params.id}/history/${req.params.from}/${req.params.to}/1`,
      'GET',
      j
    );
    let resp = await rp(options);
    let {
      payload: { currentPage, history }
    } = resp;
    const {
      payload: { totalPages }
    } = resp;

    const pages = [currentPage];
    while (pages.length !== totalPages) {
      currentPage += 1;
      pages.push(currentPage);
    }

    history = pages.map(async page => {
      try {
        options.uri = `https://www.bankofmaldives.com.mv/internetbanking/api/account/${req.params.id}/history/${req.params.from}/${req.params.to}/${page}`;
        resp = await rp(options);
        return resp.payload.history;
      } catch (err) {
        return res.status(401).json(err);
      }
    });

    history = await Promise.all(history);
    history = [].concat(...history);

    return res.json(history);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   GET api/profile/account/:id/history/from/to/page
// @desc    get history for selected dates by page
// @access  private

router.get('/account/:id/history/:from/:to/:page', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/account/${req.params.id}/history/${req.params.from}/${req.params.to}/${req.params.page}`,
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   GET api/profile/account/:id/history/from/to/page
// @desc    get history for selected dates by page
// @access  private

router.get('/account/:id/history/:from/:to/:page', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/account/${req.params.id}/history/${req.params.from}/${req.params.to}/${req.params.page}`,
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

// @route   GET api/profile/account/:id/history/pending
// @desc    get history for selected dates by page
// @access  private

router.get('/account/:id/history/pending', async (req, res) => {
  try {
    j = await setAuthJar(req);
    const options = getOptions(
      `https://www.bankofmaldives.com.mv/internetbanking/api/history/pending/${req.params.id}`,
      'GET',
      j
    );
    const resp = await rp(options);
    return res.json(resp);
  } catch (err) {
    return res.status(401).json(err);
  }
});

module.exports = router;
