import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//? creatUser fonksiyonu ile yeni bir kullanıcı oluşturmak için firebase ten çağrılmıştır oluşturulduktan sonra currentUser çağrılır
import { createUser } from "../auth/firebase";

//? isim soyisim email ve password için state oluşturduk
const Register = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

//? Formda çağrılan handleSubmit fonksiyonu firebase/app uygulama içindeki creatUser metodu içine set edilen yeni değerler atıldı içine navigate te eklenerek  göndermek zorundayız
  const handleSubmit = (e) => {
    const displayName = `${firstName} ${lastName}`;
    e.preventDefault();
    createUser(email, password, displayName, navigate);

    console.log(firstName, lastName);
  };


//? klasik form işlemi yapıldı  inputlara onchange ve buton olarak kullanmak için form içinde input tanımlandı form a onsubmit verilerek bütün değerler alındı
//? 
  return (
    <div className="d-flex justify-content-center">

      {window.innerWidth > 700 && (
        <div className="form-image">
          <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
        </div>
      )}

      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>

        <form id="register" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label">
              First Name
            </label>

            <input
              type="text"
              className="form-control"
              id="first-name"
              placeholder="Enter your first name.."
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="last-name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              placeholder="Enter your last name.."
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

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
          
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Register"
            // onSubmit={handleSubmit}
          />
        </form>

      </div>
    </div>
  );
};

export default Register;
