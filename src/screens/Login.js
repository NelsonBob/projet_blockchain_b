import { Link, useNavigate } from "react-router-dom";
import { Button, FormGroup, Input, InputGroup, Label } from "reactstrap";

import React, { useState } from "react";

const Login = () => {
  const [keyPublic, setKeyPublic] = useState("");
  const [pseudo, setPseudo] = useState("");
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    if (keyPublic === "123456789" && pseudo === "Nelson") {
      navigate("/home");
    } else {
      alert("Incorrect Credentials!");
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Se Connecter</h3>
            <div className="text-center  mb-3">
              Vous n'êtes pas encore inscrit ?{" "}
              <Link to="/signup" className="text-primary text-decoration-none">
                S'inscrire
              </Link>
            </div>
            <FormGroup>
              <Label>Clé publique</Label>
              <Input
                className="mb-3"
                placeholder="Veuillez saisir votre clé publique"
                type="text"
                onChange={(event) => setKeyPublic(event.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Pseudo</Label>
              <InputGroup>
                <Input
                  placeholder="Veuillez saisir votre pseudo"
                  type="text"
                  onChange={(event) => setPseudo(event.target.value)}
                />
                <Button color="white" className="color-button" outline>
                  <i className="zmdi zmdi-eye-off"></i>
                </Button>
              </InputGroup>
            </FormGroup>

            <div className="d-grid gap-2 mt-3">
              <Button color="primary" onClick={submit}>
                Connexion
              </Button>
            </div>
            <p className="forgot-password text-center mt-2">
              Mot de passe <a href="#">oublié?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
