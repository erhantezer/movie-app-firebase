import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//? firebase auth tan methodları alındı ve login işleminde kullanılacak
import { forgotPassword, signIn, signUpProvider } from "../auth/firebase";

//? kontrol edilecek event olacak olay 2 tanedir 1. si email 1. si password eventidir
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();


  //? Form handlesubmit edilir içindeki değerler (signIn) içine atılır ayrıca forgotPassword methodu form içinde çağrılır  onclick verilir eğer basılırsa çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
  };

  //? Form dışında bir buton konulup onclick verilir navigate ile firebaseteki fonksiyona gönderilir ve google ile giriş sağlar 
  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };
  
//? pencerenin boyutu 700px den büyükse yanına resim ekledik
  return (
    <div className="d-flex justify-content-center">

      {window.innerWidth > 700 && (
        <div className="form-image">
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
      )}

      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>

        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="link" onClick={() => forgotPassword(email)}>
            Forgot password?
          </div>

          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
            // onSubmit={handleSubmit}
          />

        </form>
        
        <button
          className="btn btn-primary form-control"
          onClick={handleProviderLogin}
        >
          Continue with Google
        </button>
      </div>

    </div>
  );
};

export default Login;
