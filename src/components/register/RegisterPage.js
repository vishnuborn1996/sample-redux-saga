import React, { useState } from "react";
import RegisterGrid from "./RegisterGrid";
import firebase from "../../library/firebase";
const RegisterPage = () => {
  //hooks
  const [registrationData, setRegistrationData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [usersRef, setUsersRef] = useState(firebase.database().ref("users"));

  //end of hooks
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData(() => ({ ...registrationData, [name]: value }));
    const isValid = value ? true : false;
    setErrors(() => ({
      ...errors,
      [name]: isValid ? "" : `${name} is required`,
    }));
  };

  const validateRegisterForm = () => {
    const _errors = {};
    if (!registrationData.email) _errors.email = "Email is required";
    if (!registrationData.username) _errors.username = "username is required";
    if (!registrationData.password) _errors.password = "Password is required";
    if (!registrationData.confirmPassword)
      _errors.confirmPassword = "confirm password is required";

    if (registrationData.password !== registrationData.confirmPassword) {
      _errors.password = "passowords do not match";
      setRegistrationData({ ...registrationData, confirmPassword: "" });
    }

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  };

  const saveUser = (createdUser) => {
    usersRef.child(createdUser.user.uid).set({
      name: createdUser.user.displayName,
      avatar: createdUser.user.photoURL,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateRegisterForm() || loading === true) return;
    setLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        registrationData.email,
        registrationData.password
      )
      .then((createduser) => {
        createduser.user
          .updateProfile({
            displayName: registrationData.username,
          })
          .then(() => {
            saveUser(createduser).then(() => {});
            setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            const { message } = err;
            const _errors = {};
            _errors.generic = message;
            setErrors(_errors);
            console.log(err);
          });

        console.log(createduser);
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
    <RegisterGrid
      handleChange={handleChange}
      registrationData={registrationData}
      handleSubmit={handleSubmit}
      errors={errors}
      loading={loading}
    />
  );
};

export default RegisterPage;
