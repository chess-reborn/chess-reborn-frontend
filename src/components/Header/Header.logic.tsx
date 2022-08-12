import React from "react"
import { useActions } from "react-redux-actions-hook"
import * as actions from "redux/slices/authSlice"
import useAuth from "hooks/useAuth"

import HeaderView from "./Header.view"


const HeaderLogic = () => {
  const { isLoggedIn } = useAuth();
  const { logIn, logOut } = useActions(actions);

  return (
    <HeaderView
      isLoggedIn={isLoggedIn}
      logIn={logIn}
      logOut={logOut}
    />
  )
}

export default HeaderLogic