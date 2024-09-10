import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #007bff;
  padding: 20px; /* Adicionado padding para maior conforto visual */
`;

export const Header = styled.header`
  margin-bottom: 40px;
  background-color: #fff;
  width: 100%;
  display: flex;
  height: 6rem; /* Aumentado para maior acessibilidade */
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem; /* Ajustado para maior responsividade */
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
  font-size: 2.2rem; /* Aumentado para maior acessibilidade */
  cursor: pointer;
  margin: 0;
  color: #333; /* Contraste aumentado */

  @media (max-width: 1024px) {
    font-size: 2rem; /* Ajustado para responsividade */
  }
`;

export const HeaderSubTitle = styled.h2`
  font-size: 1.8rem; /* Aumentado para maior acessibilidade */
  margin: 0;
  color: #333; /* Contraste aumentado */

  @media (max-width: 1024px) {
    font-size: 1.6rem; /* Ajustado para responsividade */
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px; /* Ajustado para acessibilidade */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 400px; /* Ajustado para responsividade */
  }
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem; /* Aumentado para maior acessibilidade */
  color: #333; /* Contraste aumentado */
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1.2rem; /* Aumentado para maior acessibilidade */
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px; /* Ajustado para maior acessibilidade */
  font-weight: bold;
  font-size: 1.2rem; /* Aumentado para maior acessibilidade */
  color: #333; /* Contraste aumentado */
`;
