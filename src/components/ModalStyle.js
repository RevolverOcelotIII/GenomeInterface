import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); // Cor de fundo semitransparente
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; // Garantir que o modal ficará acima de outros conteúdos
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 2000px;
  max-height: 90%;
  hr {
    color: #fff;
  }
`;

const ModalHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  padding: 20px 15px 15px;
  border-radius: 10px 10px 0 0;
  align-items: center;
  background-color: #1B1B1B;
  color: #fff;
  white-space: pre-wrap;
  svg {
    margin-left: 15px;
    transform: scale(1.3);
    cursor: pointer;
  }
`;

const ModalBody = styled.div`
  display: flex;
  margin: 20px 0;
  max-width: 1200px;
  max-height: 95%;
  font-size: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  border-radius: 10px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export {Overlay, ModalBody, ModalHeader, ModalContainer, ModalFooter, CloseButton}