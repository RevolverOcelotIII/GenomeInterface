import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  overflow: visible;
`;

const TooltipText = styled.div`
  visibility: hidden;
  width: 150px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px;
  position: absolute;
  bottom: 125%; /* Posiciona o tooltip acima do elemento */
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  white-space: pre-wrap;
  z-index: 9999;
  overflow: visible;

  /* Pequeno triângulo em forma de balão */
  &::after {
    content: "";
    position: absolute;
    top: 100%; /* Ponta do triângulo */
    left: 50%;
    transform: translateX(-50%);
    border-width: 6px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const TooltipHoverArea = styled.div`
  &:hover + ${TooltipText}, &:focus + ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

export {TooltipContainer, TooltipHoverArea, TooltipText}