import React, { useState } from "react";
import Modal from "./modal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };
/**
 * Essa observacao é mais por uma questao de modularizacao mesmo, para vc mostrar que vc sabe construir
 * componentes mais re-utilizaveis. Eu criaria um card generico que fosse configuravel de acordo com os dados passados,
 * algo desse genero:
    * const AdminCard: React.FC<CardData> = ({ image, alt, title, onClick }) => (
      <Card onClick={onClick}>
        <CardImage src={image} alt={alt} />
        <CardTitle>{title}</CardTitle>
      </Card>
    );

    criaria uma lista de cards com os atributos image, alt, title, onClick
    const cardData: CardData[] = [
    {
      image: CreateProductImage,
      alt: "Criar Produto",
      title: "Criar Produto",
      onClick: () => navigate("/create-product"),
    } (...))]

    E no componente principal eu renderizaria dessa forma:
    <PageContainer>
       <Header>
        <HeaderTitle>T-Alfa</HeaderTitle>
        <h2>Painel da Administração</h2>
      </Header>
      <CardContainer>
        {cardData.map((data, index) => (
          <AdminCard
            key={index}
            image={data.image}
            alt={data.alt}
            title={data.title}
            onClick={data.onClick}
          />
        ))}
      </CardContainer>
    </PageContainer
 */
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
        <Card onClick={handleUpdateClick}>
          <CardImage src={UpdateProductImage} alt="Atualizar Produto" />
          <CardTitle>Atualizar Produto</CardTitle>
        </Card>
        <Card onClick={() => navigate("/delete-product")}>
          <CardImage src={DeleteProductImage} alt="Deletar Produto" />
          <CardTitle>Deletar Produto</CardTitle>
        </Card>
      </CardContainer>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </PageContainer>
  );
};

export default AdminPage;
