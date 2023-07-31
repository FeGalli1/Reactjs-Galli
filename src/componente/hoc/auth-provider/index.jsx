import React from 'react';

import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../../../App';
import SignInPage from '../../../page/back/sign-in/index';

const AuthProvider = ({children}) => {
  const [isAuth, setIsAuth] = React.useState(false);
  
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      if (isAuth) {
        setIsAuth(false);
      }
    } else {
      if (!isAuth) {
        setIsAuth(true);
      }
    }
  })

  return (
    <>
      {
        isAuth ?
          children
          :
          <SignInPage />
      }
    </>
  )
}

export default AuthProvider;