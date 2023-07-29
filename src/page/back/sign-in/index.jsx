import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../../App';

const SignInPage = () => {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handlePasswordChange = (event) => setPassword(event.target.value);
    const handleUserChange = (event) => setUser(event.target.value);

    const handleLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!user || !password) {
            return;
        }


        signInWithEmailAndPassword(auth, user, password)
        .catch((err) => {console.log(err)
        alert('usuario o contraseña incorrectos');
    })
    }

  return (
    <div>
        <h1>Login user</h1>
        <div>
            <input type="text" value={user} onChange={handleUserChange} />
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleLogin} disabled={!user || !password}>Login</button>
        </div>
    </div>
  )
}

export default SignInPage;