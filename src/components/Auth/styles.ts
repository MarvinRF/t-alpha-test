import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const FormContainer = styled.div`
  background-color: white;
  padding: 3rem; /* Aumentado o padding */
  border-radius: 8px;
  width: 90%;
  max-width: 500px; /* Aumentei a largura máxima */
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  font-weight: bold;
  margin-bottom: 1rem; /* Aumentei o espaço */
  font-size: 1.25rem; /* Fonte maior */
  color: #333333;
`;

export const Title = styled.h2`
  margin-bottom: 2rem; /* Aumentado o espaço inferior */
  font-size: 2rem; /* Título maior */
  color: #333333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem; /* Aumentado o padding */
  margin-bottom: 1.5rem; /* Maior espaço entre os inputs */
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1.25rem; /* Fonte maior */
  outline: none;

  &:focus {
    border-color: #007bff;
    outline: 4px solid #007bff; /* Contorno maior ao focar */
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem; /* Maior espaço inferior */
`;

export const Checkbox = styled.input`
  margin-right: 1rem;
  width: 25px; /* Checkbox maior */
  height: 25px;
  cursor: pointer;

  &:focus {
    outline: 2px solid #007bff;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem; /* Aumentado o padding */
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.25rem; /* Fonte maior */
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: 4px solid #0056b3; /* Contorno maior ao focar */
  }
`;

export const LinkText = styled.a`
  color: #007bff;
  text-decoration: none;
  font-size: 1.25rem; /* Fonte maior */

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid #0056b3;
  }
`;
