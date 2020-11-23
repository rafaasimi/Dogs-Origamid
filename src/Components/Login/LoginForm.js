import React from "react";
import { Link } from "react-router-dom";
import { TOKEN_POST, USER_GET } from "../../api";
import useForm from "../../Hooks/useForm";
import Button from "../Forms/Button";
import Input from "../Forms/Input";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  //   Verifica se já existe algum token no localStorage
  // Se sim, já solicita usuário/senha para a API
  React.useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      getUser(token);
    }
  }, []);

  //   Solicita usuario/senha através do Token do usuario
  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
  }

  // Função disparada após o envio do formulário
  async function handleSubmit(event) {
    event.preventDefault();

    // Faz a verificação dos campos de username e password
    // Se TRUE, faz a solicitação a API para obter o token do usuário.
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });

      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem("token", json.token);
      getUser(json.token);
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
