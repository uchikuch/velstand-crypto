import React from "react";
import propTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useStateValue } from "src/StateProvider";

export const AuthGuard = ({ children }) => {
  const [{ user }] = useStateValue();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

AuthGuard.propTypes = {
  children: propTypes.any,
};
