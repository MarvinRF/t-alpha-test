import React, { useCallback, useState } from "react";
import {
  PageContainer,
  FormContainer,
  Title,
  Input,
  CheckboxContainer,
  Checkbox,
  Button,
  LinkText,
  Label,
} from "./styles";
import api from "../services/api";
// import {apiService, storageService} from "../services";

interface LoginProps {
  onSwitchToSignup: () => void;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToSignup, onLoginSuccess }) => {
  const [taxNumber, setTaxNumber] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Para prevenir renderizaçao desnecessaria eu utilizaria o useCallback
   * para o handle login seria algo do tipo
   */
  // const handleLoginMemoized = useCallback( async () => {
  //   try {
  //     // Ao inves de fazer chamadas diretamente a api, eu criaria um apiService que fizesse as requisioes
  //     // por la, inclusive setando o token no header do axios para bater nos endpoints
  //     const response = await apiService.post("/api/auth/login",
  //       taxNumber,
  //       password
  //     );
  //     const token = response.data.data.token;
  //     // ao inves de chamar diretamente o localstorage colocaria ele num storageService
  //     // isso demonstra sua preocupacao com separacao da logica e segue o single reponsability
  //     storageService.setItem("token", token);
  //     apiService.setAuthorizationToken(token);
  //     onLoginSuccess(); // Navega para a página de administração
  //   } catch (error) {
  //     console.error('Login failed', error);
  //     alert('Usuário ou senha inválidos');
  //   }
  // },[taxNumber, password, onLoginSuccess]);

  const handleLogin = () => {
    // try {
    //   const response = await api.post("/api/auth/login", {
    //     taxNumber,
    //     password,
    //   });
    //   const token = response.data.data.token;
    //   localStorage.setItem("token", token);

    //   api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    onLoginSuccess(); // Navega para a página de administração
    // } catch (error) {
    //   console.error(error);
    //   alert("Usuário ou senha inválidos");
    // }
  };

  /**
   * Novamente para melhorar performance e evitar re-renders desnecessarios eu nao usaria inline onChange, onClick
   * substituiria isso por duas funções utilizando useCallback, so renderizando novamente pelo que for definido la
   * tipo assim, ao inves de definir o setPassword, e setTaxNumber diretamente na funcao do onChange e onClick
   * eu usaria esses metodos aqui
   */
  const handleTaxNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTaxNumber(e.target.value);
    },
    []
  );

  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    []
  );

  return (
    <PageContainer>
      <FormContainer>
        <Title>Login</Title>
        <Label>CPF ou CNPJ</Label>
        <Input
          type="text"
          required
          value={taxNumber}
          onChange={(e) => setTaxNumber(e.target.value)}
          placeholder="Digite o seu CPF ou CNPJ"
        />
        <Label>Senha</Label>
        <Input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite a sua senha"
        />
        <CheckboxContainer>
          <Checkbox type="checkbox" />
          <label>Lembre-me</label>
        </CheckboxContainer>
        <Button onClick={handleLogin}>Entrar</Button>
        <p>
          Não tem uma conta ainda?{" "}
          <LinkText href="#" onClick={onSwitchToSignup}>
            Registre-se
          </LinkText>
        </p>
      </FormContainer>
    </PageContainer>
  );
};

export default Login;
