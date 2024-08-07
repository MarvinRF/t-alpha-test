import React, { useState } from "react";
import axios from "axios";
import {
  PageContainer,
  Header,
  HeaderTitle,
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  CloseButton,
  Input,
  Button,
  Card,
  CardTitle,
} from "./styles";

const SearchProduct: React.FC = () => {
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<boolean>(true);

  const handleSearchProduct = async () => {
    if (!productId) {
      setError("ID do produto não pode estar vazio.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Token não encontrado.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.get(
        `https://interview.t-alpha.com.br/api/products/get-one-product/${productId}`,
        {
          headers,
        }
      );

      setProduct(response.data.data.product);
      setError(null);

      // Fechar o modal após a busca ser realizada com sucesso
      setShowModal(false);
    } catch (error) {
      setError("Erro ao carregar produto.");
      console.error("Erro ao carregar produto:", error);
    }
  };

  return (
    <PageContainer>
      <Header>
        <HeaderTitle onClick={() => (window.location.href = "/admin")}>
          T-Alfa
        </HeaderTitle>
        <h2>Buscar Produto</h2>
      </Header>

      {showModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>Buscar Produto</ModalTitle>
            <Input
              type="text"
              placeholder="Digite o ID do produto"
              value={productId || ""}
              onChange={(e) => setProductId(e.target.value)}
            />
            <Button onClick={handleSearchProduct}>Buscar</Button>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            {error && <div>{error}</div>}
          </ModalContainer>
        </ModalOverlay>
      )}

      {product && (
        <Card>
          <CardTitle>{product.name}</CardTitle>
          <div>Descrição: {product.description}</div>
          <div>Preço: R${product.price.toFixed(2)}</div>
          <div>Estoque: {product.stock}</div>
        </Card>
      )}
    </PageContainer>
  );
};

export default SearchProduct;
