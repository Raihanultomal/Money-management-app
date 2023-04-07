import React from 'react';
import './css/register.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      <div className="container">
        <div className="register">
          <h3>Login page</h3>
          <br />
          <form>
            <h6>Email:</h6>

            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>

            <h6>Password:</h6>
            <div class="form-floating my-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <Link to="/register">Dont't have an account? Register here</Link>
            <button type="submit" class="btn btn-primary my-3 d-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
