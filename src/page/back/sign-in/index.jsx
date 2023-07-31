import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../../App';
import { Link } from 'react-router-dom';

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
      .catch((err) => {
        console.log(err);
        alert('Usuario o contraseña incorrectos');
      });
  };
  console.log("a modo de prueba para profesor ingere usuario: profesor@gmail.com y pasword: profesor")
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ border: '2px solid #000', borderRadius: '10px', padding: '20px', width: '300px', textAlign: 'center' }}>
        <h1>Login user</h1>
        <div>
          <input type="text" value={user} onChange={handleUserChange} placeholder="Usuario" />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="Contraseña" />
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleLogin} disabled={!user || !password}>Login</button>
        </div>
        <div style={{ marginTop: '20px' }}>
            <Link to="/">
                <button>Volver a la tienda</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
