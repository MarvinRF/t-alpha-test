import React, { useState } from "react";
import api from "../services/api";
import { PageContainer, Header, Title, Input, Button } from "./styles";

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
      <Header>T-Alfa</Header>
      <Title>Criar Produto</Title>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do Produto"
      />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição do Produto"
      />
      <Input
        type="number"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="Preço do Produto"
      />
      <Input
        type="number"
        value={stock}
        onChange={(e) => setStock(Number(e.target.value))}
        placeholder="Quantidade em Estoque"
      />
      <Button onClick={handleCreateProduct}>Criar Produto</Button>
    </PageContainer>
  );
};

export default CreateProduct;
