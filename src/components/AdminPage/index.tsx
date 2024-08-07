import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PageContainer,
  Header,
  CardContainer,
  Card,
  CardTitle,
  CardImage,
  HeaderTitle,
} from "./styles";

import CreateProductImage from "../../assets/createproduct.png";
import SearchAllProductImage from "../../assets/search-all-products.png";
import SearchProductImage from "../../assets/search-product.png";
import UpdateProductImage from "../../assets/update-product.png";
import DeleteProductImage from "../../assets/delete-product.png";

const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <Header>
        <HeaderTitle>T-Alfa</HeaderTitle>
        <h2>Painel da Administração</h2>
      </Header>
      <CardContainer>
        <Card onClick={() => navigate("/create-product")}>
          <CardImage src={CreateProductImage} alt="Criar Produto" />
          <CardTitle>Criar Produto</CardTitle>
        </Card>
        <Card onClick={() => navigate("/get-all-products")}>
          <CardImage
            src={SearchAllProductImage}
            alt="Buscar Todos os Produtos"
          />
          <CardTitle>Buscar Todos os Produtos</CardTitle>
        </Card>
        <Card onClick={() => navigate("/get-product")}>
          <CardImage src={SearchProductImage} alt="Buscar Produto" />
          <CardTitle>Buscar Produto</CardTitle>
        </Card>
        <Card onClick={() => navigate("/update-product")}>
          <CardImage src={UpdateProductImage} alt="Atualizar Produto" />
          <CardTitle>Atualizar Produto</CardTitle>
        </Card>
        <Card onClick={() => navigate("/delete-product")}>
          <CardImage src={DeleteProductImage} alt="Deletar Produto" />
          <CardTitle>Deletar Produto</CardTitle>
        </Card>
      </CardContainer>
    </PageContainer>
  );
};

export default AdminPage;
