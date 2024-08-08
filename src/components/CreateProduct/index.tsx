import React, { useState } from "react";
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

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: any = {};

    if (!values.name) newErrors.name = "Nome do produto é obrigatório";
    if (!values.description)
      newErrors.description = "Descrição do produto é obrigatória";
    if (values.price <= 0 || isNaN(values.price))
      newErrors.price = "Preço deve ser um valor positivo";

    const stockValue = Number(values.stock);
    if (stockValue <= 0 || !Number.isInteger(stockValue)) {
      newErrors.stock = "Quantidade deve ser um número inteiro positivo";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Eu utilizaria novamente o useCAllback
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
 // Eu utilizaria novamente o useCAllback
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      try {
        // usar um localStorageService
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        // utilizar um apiService para fazer essa chamada ao inves de chamar direto a api
        await api.post(
          "/api/products/create-product",
          {
            ...values,
            price: Number(values.price),
            stock: Number(values.stock),
          },
          {
            headers: headers,
          }
        );

        alert("Produto criado com sucesso!");
        navigate("/admin");
      } catch (error) {
        console.error(error);
        alert("Erro ao criar produto");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <PageContainer>
      <Header>
        <HeaderTitle onClick={() => navigate("/admin")}>T-Alfa</HeaderTitle>
        <h2>Criar Produto</h2>
      </Header>
      <FormContainer onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome do Produto</Label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Nome do Produto"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <div>{errors.name}</div>}

        <Label htmlFor="description">Descrição do Produto</Label>
        <Input
          type="text"
          id="description"
          name="description"
          placeholder="Descrição do Produto"
          value={values.description}
          onChange={handleChange}
        />
        {errors.description && <div>{errors.description}</div>}

        <Label htmlFor="price">Preço do Produto</Label>
        <Input
          type="number"
          id="price"
          name="price"
          placeholder="Preço do Produto"
          value={values.price}
          onChange={handleChange}
        />
        {errors.price && <div>{errors.price}</div>}

        <Label htmlFor="stock">Quantidade em Estoque</Label>
        <Input
          type="number"
          id="stock"
          name="stock"
          placeholder="Quantidade em Estoque"
          value={values.stock}
          onChange={handleChange}
        />
        {errors.stock && <div>{errors.stock}</div>}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Criando..." : "Criar Produto"}
        </Button>
      </FormContainer>
    </PageContainer>
  );
};

export default CreateProduct;
