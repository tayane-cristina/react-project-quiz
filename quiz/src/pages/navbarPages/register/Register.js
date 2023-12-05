import {useState} from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthenticator } from '../../../hooks/useAuthentication';

const Register = ( ) => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [error, setError] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const {createUser} = useAuthenticator()

  const handleSubmit  = async(e) => {
  e.preventDefault()

  const user = {
    displayName,
    email,
    password
  }
  
  if (password !== confirmPassword) {
    setError("As senhas precisam ser iguais")
  } else {
      await createUser(user)
      setSuccessMessage("Seu cadastro foi feito com sucesso!")
  }
    
  }
  
  return (
    <div>
      <h1>Criar Cadastro</h1>
      {!error && <p className='subtitle-p'>Crie seu cadastro e teste seus conhecimentos!</p>}
      {error && <p className='error-message'>As senhas devem ser iguais, e conter mais de 6 caracteres</p>}

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input 
          type="text"
          name="displayName"
          value={displayName}
          onChange={({target}) => setDisplayName(target.value)}
          required
          ></input>
        </label>

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

        <label>
          <span>Confirme sua senha</span>
          <input 
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={({target}) => setConfirmPassword(target.value)}
          ></input>
        </label>

        <button className='btn-primary'>Enviar</button>
        {!error && <p className='success-message'>{successMessage}</p>}
        
      </form>
    </div>
  );
}

export default Register;