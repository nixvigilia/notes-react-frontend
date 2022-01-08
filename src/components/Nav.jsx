import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "../AppState";

const Nav = (props) => {
  const { state, dispatch } = useAppState();
  let navigate = useNavigate();

  return (
    <header className="relative bg-white">
      <h1 className="text-3xl font-bold text-center">Note App</h1>

      <nav className="flex justify-around">
        <Link to="/">
          <div>Home</div>
        </Link>
        {!state.token ? (
          <>
            <Link
              to="/auth/signup"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              <div>Signup</div>
            </Link>
            <Link
              to="/auth/login"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <div>Login</div>
            </Link>{" "}
          </>
        ) : null}
        {state.token ? (
          <div>
            <button
              onClick={() => {
                dispatch({ type: "logout" });
                navigate("/");
              }}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Logout
            </button>
          </div>
        ) : null}
      </nav>
    </header>
  );
};

export default Nav;
