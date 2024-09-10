import { styled } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem; /* Aumentado o padding */
  font-size: 1.25rem; /* Aumentado o tamanho da fonte */
  background-color: #f0f0f0;
`;

export const Header = styled.div`
  margin-bottom: 30px; /* Maior espaçamento */
  background-color: #007bff;
  width: 100%;
  height: 6rem; /* Aumentada a altura */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12rem; /* Aumentado o padding */

  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    height: 8rem;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h1`
  color: #ffffff;
  font-size: 2.5rem; /* Aumentado o tamanho da fonte */

  @media (max-width: 1024px) {
    margin-bottom: 0.5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px; /* Aumentado o gap entre os cards */
  margin-top: 40px;
  padding: 2rem;

  @media (max-width: 1440px) {
    align-items: center;
    margin-bottom: 60px;
  }
`;

export const Card = styled.div`
  width: 250px; /* Aumentada a largura */
  height: 250px; /* Aumentada a altura */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 8px, rgba(0, 0, 0, 0.23) 0px 4px 8px;
  border-radius: 10px; /* Bordas mais arredondadas */
  cursor: pointer;
  transition: transform 0.3s; /* Suavizado */
  border: 2px solid transparent;

  &:hover,
  &:focus {
    transform: scale(1.08);
    border-color: #0056b3;
  }

  &:focus {
    outline: 3px solid #0056b3;
  }
`;

export const CardTitle = styled.h3`
  margin-top: 15px;
  text-align: center;
  font-size: 1.5rem; /* Aumentado o tamanho da fonte */
  color: #333333;
`;

export const CardImage = styled.img`
  width: 120px; /* Aumentada a largura */
  height: 120px; /* Aumentada a altura */
  object-fit: cover;
  margin-bottom: 0.5rem;
  alt: "Imagem representativa";
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8); /* Maior opacidade */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 30px; /* Aumentado o padding */
  border-radius: 10px;
  width: 95%;
  max-width: 500px; /* Aumentada a largura máxima */
  position: relative;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 40px; /* Aumentado o espaçamento */
  font-size: 2rem; /* Aumentado o tamanho da fonte */
  color: #333333;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 2rem; /* Aumentado o tamanho da fonte */
  cursor: pointer;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px; /* Aumentado o padding */
  margin-top: 5px;
  margin-bottom: 15px; /* Maior espaçamento inferior */
  border: 2px solid #ccc;
  border-radius: 6px; /* Bordas mais arredondadas */
  font-size: 1.25rem; /* Aumentado o tamanho da fonte */
  outline: none;

  &:focus {
    border-color: #007bff;
    outline: 3px solid #007bff;
  }
`;

export const Button = styled.button`
  margin-top: 15px;
  padding: 12px; /* Aumentado o padding */
  background: #007bff;
  color: white;
  width: 100%;
  border: none;
  border-radius: 6px; /* Bordas mais arredondadas */
  cursor: pointer;
  font-size: 1.25rem; /* Aumentado o tamanho da fonte */

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: 3px solid #0056b3;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1.25rem; /* Aumentado o tamanho da fonte */
  margin-bottom: 8px; /* Maior espaçamento inferior */
  color: #333333;
`;
