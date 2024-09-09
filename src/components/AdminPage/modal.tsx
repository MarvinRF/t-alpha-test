import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  Input,
  Button,
  Label,
  ModalTitle,
} from "./styles";

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [id, setId] = useState("");
  const navigate = useNavigate();

  //EU tornaria isso um useCallback para evitar renderizacao desnecessaria
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      navigate(`/admin/update-product/${id}`);
      onClose();
    } else {
      alert("Por favor, insira o ID do produto.");
    }
  };

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>X</CloseButton>
        <ModalTitle>Digite o ID do Produto</ModalTitle>
        <form onSubmit={handleSubmit}>
          <Label htmlFor="productId">ID do Produto</Label>
          <Input
            type="number"
            id="productId"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Insira o ID do produto"
          />
          <Button type="submit">Ir para Atualizar Produto</Button>
        </form>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default Modal;
