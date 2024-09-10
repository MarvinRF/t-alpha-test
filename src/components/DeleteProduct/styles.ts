import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #007bff;
`;

export const Header = styled.header`
  margin-bottom: 40px;
  background-color: #fff;
  width: 100%;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 26rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2.5rem; /* Aumentado para acessibilidade */
  cursor: pointer;
  margin: 0;
  color: #333; /* Contraste aumentado */

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }
`;

export const HeaderSubTitle = styled.h2`
  font-size: 2rem; /* Aumentado para maior legibilidade */
  margin: 0;
  color: #555; /* Contraste adequado */

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 650px; /* Largura aumentada */
  padding: 24px; /* Padding maior */
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 450px; /* Largura maior para telas pequenas */
  }
`;

export const Input = styled.input`
  margin-bottom: 18px; /* Maior espaçamento entre inputs */
  padding: 14px; /* Padding aumentado */
  width: 100%;
  border: 2px solid #ccc; /* Borda mais visível */
  border-radius: 4px;
  font-size: 1.2rem; /* Fonte maior */
  color: #333;

  &:focus {
    border-color: #007bff;
    outline: 3px solid #007bff; /* Destaque ao foco */
  }
`;

export const Button = styled.button`
  padding: 14px 24px;
  background-color: #007bff;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 24px;
  font-size: 1.2rem; /* Fonte maior */
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: 3px solid #0056b3;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 1.2rem; /* Fonte maior */
  color: #333;
`;
