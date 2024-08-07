import React, { useState } from "react";
import {
  PageContainer,
  FormContainer,
  Title,
  Input,
  Button,
  LinkText,
  Label,
} from "./styles";
import api from "../services/api";

interface CadastroProps {
  onSwitchToLogin: () => void;
}

const Cadastro: React.FC<CadastroProps> = ({ onSwitchToLogin }) => {
  const [taxNumber, setTaxNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await api.post("/api/auth/signup", {
        taxNumber,
        password,
      });
      alert("Usuário cadastrado com sucesso");
      onSwitchToLogin();
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar usuário");
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <Title>Cadastro</Title>
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
        <Button onClick={handleSignup}>Cadastrar</Button>
        <p>
          Já tem uma conta?{" "}
          <LinkText href="#" onClick={onSwitchToLogin}>
            Entre
          </LinkText>
        </p>
      </FormContainer>
    </PageContainer>
  );
};

export default Cadastro;
