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

  /**
   * Eu transformaria esse handleSignup para receber o useCallback(async () => {
   * (...)
   * }, [name, taxNumber, mail, phone, password, onSwitchToLogin])
   */
  const handleSignup = async () => {
    try {
      // Obtém o token do localStorage, se necessário
      const token = localStorage.getItem("token");

      // Configura o cabeçalho Authorization se o token estiver presente
      const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

      // Envia a requisição para criar um novo usuário
      // Ao inves de fazer a requisicao direta a api eu criaria um apiService pra lidar com isso
      const response = await api.post(
        "/api/auth/register",
        {
          name,
          taxNumber,
          mail,
          phone,
          password,
        },
        {
          headers: headers,
        }
      );

      alert("Usuário cadastrado com sucesso");
      onSwitchToLogin();
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário");
    }
  };
  /**
   * Todos lugares que vc define uma funcao no onChange eu utilizaria no lugar dessa funcao, uma
   * nova definida atraves do useCallback, assim vc melhora a performance e evita re-renderizacao por ex:
   * const handleName = useCallback((e) => {
   *     setName(e.target.value)
   * },[])
   */
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
        <Label>Email</Label>
        <Input
          type="email"
          required
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Digite o seu email"
        />
        <Label>Telefone</Label>
        <Input
          type="text"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Digite o seu telefone"
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
