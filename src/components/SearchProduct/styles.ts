import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26rem;
  white-space: nowrap;

  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    height: 7rem;
    align-items: center;
  }
`;

export const HeaderTitle = styled.h1`
  cursor: pointer;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
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
  margin-top: 10px;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 0.3rem;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  position: relative;
`;

export const ModalTitle = styled.h2`
  margin-bottom: 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 3px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin-top: 12px;
  padding: 10px;
  background: #007bff;
  color: white;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Label = styled.label`
  display: block;
`;
