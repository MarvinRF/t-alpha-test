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
  const [name, setName] = useState("");
  const [taxNumber, setTaxNumber] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const payload = {
        name,
        taxNumber,
        mail,
        phone,
        password,
      };
      console.log("Sending payload:", payload);
      await api.post("/api/auth/register", payload);
      alert(
        "Cadastro realizado com sucesso! Redirecionando para a página de login."
      );
      onSwitchToLogin();
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        alert("Usuário já cadastrado. Por favor, faça login.");
      } else {
        console.error("Erro durante o registro:", error);
        alert("Erro ao realizar cadastro. Tente novamente mais tarde.");
      }
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <Title>Cadastro</Title>
        <Label>Nome</Label>
        <Input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Digite o seu nome"
        />
        <Label>CPF ou CNPJ</Label>
        <Input
          type="text"
          required
          value={taxNumber}
          onChange={(e) => setTaxNumber(e.target.value)}
          placeholder="Digite o seu CPF ou CNPJ"
        />
        <Label>E-mail</Label>
        <Input
          type="email"
          required
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Digite o seu e-mail"
        />
        <Label>Telefone</Label>
        <Input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Digite a seu Telefone"
        />
        <Label>Senha</Label>
        <Input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite a sua senha"
        />
        <Button onClick={handleRegister}>Cadastrar</Button>
        <p>
          Já possui uma conta?{" "}
          <LinkText href="#" onClick={onSwitchToLogin}>
            Entrar
          </LinkText>
        </p>
      </FormContainer>
    </PageContainer>
  );
};

export default Cadastro;
