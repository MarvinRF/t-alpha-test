import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

const DeleteProduct: React.FC = () => {
  const [productId, setProductId] = useState<number | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      alert("Usuário não autenticado");
      navigate("/login");
    }
  }, [navigate]);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();

    if (productId === null) {
      alert("Por favor, insira o ID do produto");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Usuário não autenticado");
      navigate("/login");
      return;
    }

    try {
      console.log("Deleting product with ID:", productId);
      console.log("Using token:", token);

      const response = await api.delete(
        `/api/products/delete-product/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      alert("Produto deletado com sucesso!");
      navigate("/admin");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Erro ao deletar produto");
    }
  };

  return (
    <PageContainer>
      <Header>
        <HeaderTitle onClick={() => navigate("/admin")}>T-Alfa</HeaderTitle>
        <h2>Deletar Produto</h2>
      </Header>
      <FormContainer onSubmit={handleDelete}>
        <Label htmlFor="productId">ID do Produto</Label>
        <Input
          type="number"
          id="productId"
          name="productId"
          value={productId || ""}
          onChange={(e) => setProductId(parseInt(e.target.value))}
          placeholder="Digite o ID do produto"
        />
        <Button type="submit">Deletar Produto</Button>
      </FormContainer>
    </PageContainer>
  );
};

export default DeleteProduct;
