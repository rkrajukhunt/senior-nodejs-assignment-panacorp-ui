import React, {
  useState,
} from 'react';
import Login from './components/Login';
import Factorial from './components/Factorial';
import { loginService, signUpService } from './services/user';
import { ToastContainer, toast } from 'react-toastify';
import './assets/app.main.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState({
    userName: '',
    password: '',
  });
  const isAuthed = user && user._id;

  function changeUserName(e){
    console.log('change uname');
    setUser({
      ...user,
      userName: e.target.value,
    });
  }

  function changePassword(e){
    setUser({
      ...user,
      password: e.target.value,
    });
  }

  async function login() {
    try{
      let result = await loginService({
        ...user,
      })
      setUser(result);
      toast.success('Logged in successfully')
      console.log('got result : ', result);
    }
    catch(err){
      console.log(err);
    }
  }

  async function signUp() {
    try{
      let result = await signUpService({
        ...user,
      })
      setUser({
        userName: '',
        password: '',
      });
      toast.success('Registered successfully')
      console.log('got result : ', result);
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <div className="App">
      <ToastContainer />
      {
        !isAuthed ? <Login
          login={login}
          signUp={signUp}
          user={user}
          changePassword={changePassword}
          changeUserName={changeUserName}
          /> : <Factorial />
      }
    </div>
  );
}

export default App;
