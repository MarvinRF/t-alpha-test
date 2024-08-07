import React, { useState } from "react";
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

interface LoginProps {
  onSwitchToSignup: () => void;
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onSwitchToSignup, onLoginSuccess }) => {
  const [taxNumber, setTaxNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.post("/api/auth/login", {
        taxNumber,
        password,
      });
      localStorage.setItem("token", response.data.token);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      onLoginSuccess(); // Navega para a página de administração
    } catch (error) {
      console.error(error);
      alert("Usuário ou senha inválidos");
    }
  };

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
