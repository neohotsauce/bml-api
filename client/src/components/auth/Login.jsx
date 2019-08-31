/* eslint-disable react/jsx-one-expression-per-line */
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    login(username, password);
  };
  return (
    <Fragment>
      <div className="xy-center">
        <div className="px-3 w-100 text-center">
          <h2 className="text-center s-font mb-4">
            <span className="w-color">Swift</span>
            <span className="l-color">Bml</span>
          </h2>
          <form
            className="w-bg p-3 rounded-15 b-white maxw-420px mx-auto"
            id="login-form"
            onSubmit={e => onSubmit(e)}
          >
            <p className="s-color">
              Send money, pay on your terms, and shop easily all with
              <span className="p-color"> SwiftBml</span>.
            </p>
            <div className="input-group  mb-3 mt-2 no-joint-border">
              <input
                name="username"
                value={username}
                onChange={e => onChange(e)}
                type="text"
                className="form-control"
                placeholder="Username"
                aria-describedby="username"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="username">
                  <i className="far fa-user" />
                </span>
              </div>
            </div>

            <div className="input-group mt-2 mb-3 no-joint-border">
              <input
                name="password"
                value={password}
                onChange={e => onChange(e)}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="username">
                  <i className="fas fa-fingerprint" />
                </span>
              </div>
            </div>
            <p className="g-color mb-0">
              Dont&apos;t have an account?
              <span className="s-color"> Sign up</span>
            </p>
          </form>
          <button
            type="submit"
            className="btn p-bg p-b w-color rounded-15 w-100 py-3 mt-3 font-weight-bold maxw-420px"
            form="login-form"
          >
            LOG IN
          </button>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  null,
  { login }
)(Login);
