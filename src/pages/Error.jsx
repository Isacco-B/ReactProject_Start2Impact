import React from "react";
import { Link } from "react-router-dom";
import Icon404 from '../asset/img/404.svg'

function Error() {
  return (
    <section className="error-page">
      <div className="error-container">
        <h1>oops! it's a dead end</h1>
        <img src={Icon404} alt="profile picture" />
        <Link to="/" className="btn btn-primary">
          HomePage
        </Link>
      </div>
    </section>
  );
}
export default Error;
