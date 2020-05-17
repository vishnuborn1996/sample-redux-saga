import React, { useState } from "react";
import LoginGrid from "./LoginGrid";
import firebase from "../../library/firebase";

const LoginPage = () => {
  //hooks
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  //end of hooks
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData(() => ({ ...loginData, [name]: value }));
    const isValid = value ? true : false;
    setErrors(() => ({
      ...errors,
      [name]: isValid ? "" : `${name} is required`,
    }));
  };

  const validateLoginForm = () => {
    const _errors = {};
    if (!loginData.email) _errors.email = "Email is required";
    if (!loginData.password) _errors.password = "Password is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateLoginForm() || loading === true) return;
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(loginData.email, loginData.password)
      .then((user) => {
        setLoading(false);
        console.log(user);
      })
      .catch((err) => {
        setLoading(false);
        const { message } = err;
        const _errors = {};
        _errors.generic = message;
        setErrors(_errors);
        console.log(err);
      });
  };
  return (
    <LoginGrid
      handleChange={handleChange}
      loginData={loginData}
      handleSubmit={handleSubmit}
      errors={errors}
      loading={loading}
    />
  );
};

export default LoginPage;
