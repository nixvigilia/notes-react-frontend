import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppState } from "../AppState";

const Auth = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  let type = params.form;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [userData, setUserData] = useState(null);
  const { state, dispatch } = useAppState();
  // console.log("state", state);

  useEffect(() => {
    if (userData) {
      console.log("userData", userData);
      const { token, user } = userData;
      dispatch({ type: "auth", payload: { token, username: user.username } });
      window.localStorage.setItem(
        "auth",
        JSON.stringify({ token, username: user.username })
      );
      navigate("/dashboard");
    }
  }, [userData]);

  const actions = {
    signup: () => {
      return fetch(state.url + "/users/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
    login: () => {
      return fetch(state.url + "/login/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
    },
  };

  // console.log("actions:", actions);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(dispatch, actions[type]);
    actions[type]().then((data) => {
      setUserData(data);
    });
  };
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="******************"
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          {/* <input type="submit" value={params.form} /> */}
          <button
            className="bg-indigo-600 hover:bg-indigo-700  text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            {params.form}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
