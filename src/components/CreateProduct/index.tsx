import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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

const validationSchema = Yup.object({
  name: Yup.string().required("Nome do produto é obrigatório"),
  description: Yup.string().required("Descrição do produto é obrigatória"),
  price: Yup.number()
    .required("Preço do produto é obrigatório")
    .positive("Preço deve ser um valor positivo")
    .typeError("Preço deve ser um número"),
  stock: Yup.number()
    .required("Quantidade em estoque é obrigatória")
    .positive("Quantidade deve ser um valor positivo")
    .integer("Quantidade deve ser um número inteiro")
    .typeError("Quantidade deve ser um número"),
});

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: {
    name: string;
    description: string;
    price: number;
    stock: number;
  }) => {
    try {
      await api.post("/api/products/create-product", values);
      alert("Produto criado com sucesso!");
      navigate("/admin");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar produto");
    }
  };

  return (
    <PageContainer>
      <Header>
        <HeaderTitle onClick={() => navigate("/admin")}>T-Alfa</HeaderTitle>
        <h2>Criar Produto</h2>
      </Header>
      <Formik
        initialValues={{ name: "", description: "", price: 0, stock: 0 }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmit(values).finally(() => {
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <FormContainer>
            <Label htmlFor="name">Nome do Produto</Label>
            <Field
              as={Input}
              type="text"
              id="name"
              name="name"
              placeholder="Nome do Produto"
            />
            <ErrorMessage name="name" component="div" />

            <Label htmlFor="description">Descrição do Produto</Label>
            <Field
              as={Input}
              type="text"
              id="description"
              name="description"
              placeholder="Descrição do Produto"
            />
            <ErrorMessage name="description" component="div" />

            <Label htmlFor="price">Preço do Produto</Label>
            <Field
              as={Input}
              type="number"
              id="price"
              name="price"
              placeholder="Preço do Produto"
            />
            <ErrorMessage name="price" component="div" />

            <Label htmlFor="stock">Quantidade em Estoque</Label>
            <Field
              as={Input}
              type="number"
              id="stock"
              name="stock"
              placeholder="Quantidade em Estoque"
            />
            <ErrorMessage name="stock" component="div" />

            <Button type="submit">Criar Produto</Button>
          </FormContainer>
        </Form>
      </Formik>
    </PageContainer>
  );
};

export default CreateProduct;
