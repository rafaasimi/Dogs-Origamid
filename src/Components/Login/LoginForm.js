import React from "react";
import { Link } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";
import { UserContext } from "../../UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  // Função disparada após o envio do formulário
  async function handleSubmit(event) {
    event.preventDefault();

    // Faz a verificação dos campos de username e password
    // Se TRUE, faz a solicitação a API em UserContext.js para obter o token do usuário.
    if (username.validate() && password.validate()) {
        userLogin(username.value, password.value)
  }
}

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
