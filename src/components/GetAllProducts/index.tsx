import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Certifique-se de que a dependência esteja instalada
import api from "../services/api";
import {
  PageContainer,
  Header,
  HeaderTitle,
  CardContainer,
  Card,
  CardTitle,
  CardImage,
} from "./styles";

const GetAllProducts: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("Token não encontrado.");
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await api.get("/api/products/get-all-products", {
          headers,
        });
        setProducts(response.data.data.products);
      } catch (error) {
        setError("Erro ao carregar produtos.");
        console.error("Erro ao carregar produtos:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <PageContainer>
      <Header>
        <HeaderTitle onClick={() => navigate("/admin")}>T-Alfa</HeaderTitle>
        <h2>Buscar todos os produtos</h2>
      </Header>
      {error && <div>{error}</div>}
      <CardContainer>
        {products.map((product) => (
          <Card key={product.id}>
            <CardImage
              src="https://via.placeholder.com/100"
              alt={product.name}
            />
            <CardTitle>{product.name}</CardTitle>
            <div>Preço: R${product.price.toFixed(2)}</div>
            <div>Estoque: {product.stock}</div>
          </Card>
        ))}
      </CardContainer>
    </PageContainer>
  );
};

export default GetAllProducts;
