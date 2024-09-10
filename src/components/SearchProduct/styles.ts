import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  width: 100%;
  height: 6rem; /* Aumentado para maior acessibilidade */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem; /* Ajustado para responsividade */
  white-space: nowrap;

  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    height: 8rem; /* Aumentado para maior acessibilidade */
    align-items: center;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem; /* Aumentado para maior acessibilidade */
  color: #333; /* Contraste aumentado */
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 1.8rem; /* Ajustado para responsividade */
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const Card = styled.div`
  width: 220px; /* Aumentado para maior acessibilidade */
  height: 250px; /* Aumentado para maior acessibilidade */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitle = styled.h3`
  margin-top: 15px;
  text-align: center;
  font-size: 1.5rem; /* Aumentado para maior acessibilidade */
  color: #333; /* Contraste aumentado */
`;

export const CardImage = styled.img`
  width: 120px; /* Aumentado para maior acessibilidade */
  height: 120px; /* Aumentado para maior acessibilidade */
  object-fit: cover;
  margin-bottom: 0.5rem; /* Ajustado para maior acessibilidade */
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Escurecido para melhor contraste */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px; /* Ajustado para acessibilidade */
  position: relative;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem; /* Aumentado para maior acessibilidade */
  color: #333; /* Contraste aumentado */
  margin-bottom: 20px; /* Ajustado para acessibilidade */
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem; /* Aumentado para maior acessibilidade */
  color: #007bff; /* Contraste aumentado */
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px; /* Aumentado para maior acessibilidade */
  margin-top: 8px; /* Ajustado para maior acessibilidade */
  margin-bottom: 12px; /* Ajustado para maior acessibilidade */
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1.2rem; /* Aumentado para maior acessibilidade */
`;

export const Button = styled.button`
  margin-top: 12px;
  padding: 12px; /* Aumentado para maior acessibilidade */
  background: #007bff;
  color: #fff;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem; /* Aumentado para maior acessibilidade */

  &:hover {
    background-color: #0056b3;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1.2rem; /* Aumentado para maior acessibilidade */
  color: #333; /* Contraste aumentado */
  margin-bottom: 8px;
`;
