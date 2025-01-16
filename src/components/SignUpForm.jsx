import { useState } from "react"

const SignUpForm = () => {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState(null);

  const createUser = async(event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup');
      const result = await response.json();
      console.log (result);
    } 
    catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={createUser}>
        <
          input placeholder="username" value = { username }
          onChange = {(event) => {setUsername(event.target.value)} }
        />
        <
          input type="password" placeholder="password" value = { password }
          onChange = {(event) => {setPassword(event.target.value)} }
        />

        <button>Submit</button>
      </form>
    </>
  )
}

export default SignUpForm