import React from 'react';
import './css/register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="container">
      <div className="register">
        <h3>Register page</h3>
        <br />
        <form>
          <h6>Name:</h6>
          <div class="form-floating mb-3">
            <input
              type="name"
              class="form-control"
              id="floatingInput"
              placeholder="Name"
            />
            <label for="floatingInput">Name</label>
          </div>

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

          <h6>Conform Password:</h6>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Conform Password</label>
          </div>
          <br />
          <Link to="/login">Already have an account? login here</Link>
          <button type="submit" class="btn btn-primary my-3 d-block">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
