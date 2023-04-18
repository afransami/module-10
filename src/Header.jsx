import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { AuthContext } from "./providers/AuthProvider";
import Register from "./Register";

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut = ()=>{
    logOut ()
    .then (() =>{})
    .catch(error => console.error(error))
  }

  return (
    <div className="navbar gap-8 bg-primary text-primary-content">
      <Link className="btn btn-ghost normal-case text-xl" to="/"><a className="btn btn-ghost normal-case text-xl">Module-10</a></Link>
      <Link  className="btn btn-ghost normal-case text-xl" to ="/">Home</Link>
      <Link className="btn btn-ghost normal-case text-xl" to ="/orders">Orders</Link>
      <Link className="btn btn-ghost normal-case text-xl" to ="/login">Login</Link>
      <Link className="btn btn-ghost normal-case text-xl" to ="/register">Register</Link>
      {user ? <>
                <span>{user.email}</span>
                <button onClick={handleLogOut} className="btn btn-sm">Sign out</button>
              </>:
              <Link to ="/login"> loging
              </Link>
              }

    </div>
  );
};

export default Header;
