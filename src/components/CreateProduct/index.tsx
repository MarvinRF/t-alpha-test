import React, { useState } from "react";
import api from "../services/api";
import {
  PageContainer,
  Header,
  Input,
  Button,
  HeaderTitle,
  Label,
  FormContainer,
} from "./styles";

const CreateProduct: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleCreateProduct = async () => {
    try {
      await api.post("/api/products/create-product", {
        name,
        description,
        price,
        stock,
      });
      alert("Produto criado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar produto");
    }
  };

  return (
    <PageContainer>
      <Header>
        <HeaderTitle>T-Alfa</HeaderTitle>
        <h2>Criar Produto</h2>
      </Header>
      <FormContainer>
        <Label htmlFor="name">Nome do Produto</Label>
        <Input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nome do Produto"
        />

        <Label htmlFor="description">Descrição do Produto</Label>
        <Input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do Produto"
        />

        <Label htmlFor="price">Preço do Produto</Label>
        <Input
          type="number"
          id="price"
          required
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="Preço do Produto"
        />

        <Label htmlFor="stock">Quantidade em Estoque</Label>
        <Input
          type="number"
          id="stock"
          required
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
          placeholder="Quantidade em Estoque"
        />
        <Button onClick={handleCreateProduct}>Criar Produto</Button>
      </FormContainer>
    </PageContainer>
  );
};

export default CreateProduct;
