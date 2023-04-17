import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
  return (
    <div className="navbar gap-8 bg-primary text-primary-content">
      <Link className="btn btn-ghost normal-case text-xl" to="/"><a className="btn btn-ghost normal-case text-xl">Module-10</a></Link>
      <Link  className="btn btn-ghost normal-case text-xl" to ="/">Home</Link>
      <Link className="btn btn-ghost normal-case text-xl" to ="/login">Login</Link>
      <Link className="btn btn-ghost normal-case text-xl" to ="/register">Register</Link>

    </div>
  );
};

export default Header;
