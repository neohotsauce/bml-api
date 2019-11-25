const rp = require('request-promise');
const tough = require('tough-cookie');
const jwt = require('jsonwebtoken');
const config = require('config');

const genToken = req => {
  const j = rp.jar();
  let { body } = req;
  let options = {
    body,
    uri: 'https://www.bankofmaldives.com.mv/internetbanking/api/login',
    method: 'POST',
    json: true,
    jar: j,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'PostmanRuntime/7.15.2'
    }
  };
  return new Promise(async (resolve, reject) => {
    try {
      // login
      let resp = await rp(options);
      if (!resp.success) return reject(resp);

      // get profiles
      options = {
        method: 'GET',
        uri: 'https://www.bankofmaldives.com.mv/internetbanking/api/profile',
        jar: j,
        json: true,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PostmanRuntime/7.15.2'
        }
      };
      resp = await rp(options);
      if (!resp.success) return reject(resp);

      // set profile
      const defaultProfile = resp.payload.profile.filter(profile => {
        return profile.type === 'Default';
      });
      const profileId = defaultProfile[0].profile;
      body = {
        profile: profileId
      };
      options = {
        body,
        uri: 'https://www.bankofmaldives.com.mv/internetbanking/api/profile',
        method: 'POST',
        json: true,
        jar: j,
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'PostmanRuntime/7.15.2'
        }
      };
      resp = await rp(options);
      if (!resp.success) return reject(resp);

      // generate token
      const payload = { jar: j };
      return jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) return reject(err);
          return resolve(token);
        }
      );
    } catch (err) {
      return reject(err);
    }
  });
};

const setAuthJar = req => {
  const token = req.header('x-auth-token');

  return new Promise((resolve, reject) => {
    if (!token) {
      return reject('No token, authorization denied');
    }
    // verify token
    return jwt.verify(token, config.get('jwtSecret'), (err, decoded) => {
      if (err) return reject(err);
      const tokenJar = decoded.jar;
      const jar = rp.jar();
      tokenJar._jar.cookies.map(cookie => {
        let resCookie = cookie;
        delete resCookie.lastAccessed;
        delete resCookie.creation;
        resCookie = new tough.Cookie(resCookie);
        resCookie = resCookie.cookieString();
        return jar.setCookie(resCookie, 'https://www.bankofmaldives.com.mv');
      });
      return resolve(jar);
    });
  });
};

const getOptions = (uri, method, jar, body) => {
  if (!body) {
    const options = {
      uri,
      method,
      jar,
      json: true,
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'PostmanRuntime/7.15.2'
      }
    };
    return options;
  }
  const options = {
    uri,
    method,
    jar,
    body,
    json: true,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'PostmanRuntime/7.15.2'
    }
  };
  return options;
};

module.exports = { setAuthJar, genToken, getOptions };
