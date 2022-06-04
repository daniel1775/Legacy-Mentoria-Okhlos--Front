import { Navigate, Outlet } from "react-router-dom";
import authServices from "../../api/services/authServices"
import { useSelector } from "react-redux";
import {selectAuth} from "../../redux/slices/authSlice";
import { useEffect } from "react";
import { useState } from "react";

const RequireAuth = ({ allowedRoles }) => {
 
  const token= authServices.isLogin()

  
  // return auth.rol && allowedRoles.includes(auth.rol[0]) ? (
  return token? (
    (token.role==allowedRoles? <Outlet />: <Navigate to="/Unauthorized" /> )
    
  ) : <Navigate to="/" />
  
};

export default RequireAuth;
