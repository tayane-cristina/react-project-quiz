import {useState} from 'react';
import { useAuthenticator } from '../../../hooks/useAuthentication';

const SignIn = ( ) => {

  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const {login} = useAuthenticator()

  const handleSubmit = async(e) => {
    e.preventDefault()

    const user = {
      email,
      password
    }

    await login(user)
    

  }

  return (
    <div>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input 
          type="email"
          name="email"
          value={email}
          onChange={({target}) => setEmail(target.value)}
          required
          ></input>
        </label>

        <label>
          <span>Senha</span>
          <input 
          type="password"
          name="password"
          value={password}
          onChange={({target}) => setPassword(target.value)}
          required
          ></input>
        </label>
        <button className='btn-primary'>Entrar</button>
      </form>
    </div>
  );
}

export default SignIn;