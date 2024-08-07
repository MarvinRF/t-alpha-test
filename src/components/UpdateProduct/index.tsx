import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  PageContainer,
  Header,
  Input,
  Button,
  HeaderTitle,
  Label,
  FormContainer,
} from "./styles";

const UpdateProduct: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

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

  useEffect(() => {
    if (!id) {
      alert("ID do produto não fornecido.");
      navigate("/admin");
      return;
    }

    const fetchProduct = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Token não encontrado.");
          navigate("/login");
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        const response = await axios.get(
          `https://interview.t-alpha.com.br/api/products/get-one-product/${id}`,
          {
            headers,
          }
        );
        if (response.data) {
          setValues(response.data.data.product);
        } else {
          alert("Produto não encontrado.");
          navigate("/admin");
        }
      } catch (error) {
        console.error("Erro ao carregar o produto:", error);
        alert("Erro ao carregar o produto");
        navigate("/admin");
      }
    };

    fetchProduct();
  }, [id, navigate]);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Token não encontrado.");
          navigate("/login");
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };

        await axios.patch(
          `https://interview.t-alpha.com.br/api/products/update-product/${id}`,
          {
            name: values.name,
            description: values.description,
            price: Number(values.price),
            stock: Number(values.stock),
          },
          {
            headers: headers,
          }
        );

        alert("Produto atualizado com sucesso!");
        navigate("/admin");
      } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        alert("Erro ao atualizar produto");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <PageContainer>
      <Header>
        <HeaderTitle onClick={() => navigate("/admin")}>T-Alfa</HeaderTitle>
        <h2>Atualizar Produto</h2>
      </Header>
      <FormContainer onSubmit={handleSubmit}>
        <div>Você está alterando o produto com ID: {id}</div>
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
          {isSubmitting ? "Atualizando..." : "Atualizar Produto"}
        </Button>
      </FormContainer>
    </PageContainer>
  );
};

export default UpdateProduct;
